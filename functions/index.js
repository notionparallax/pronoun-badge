const functions = require("firebase-functions");
// const axios = require("axios");
// const sharp = require("sharp");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest(async (request, response) => {
  functions.logger.info(JSON.stringify(request.query), {
    structuredData: true,
  });

  const { createSVGWindow } = require("svgdom");
  const window = createSVGWindow();
  const SVG = require("svg.js")(window);
  const document = window.document;

  //example URL: http://localhost:5001/pronoun-badge/us-central1/helloWorld?subject=He&object=Him&posessive=His&posessive-pronoun=His&reflexive=Himself&emoji=%F0%9F%91%AB&colour=B00B5&height=20px
  let q = request.query;
  q.height = q.height || 20;
  if (q.flag) {
    flagPath = getFlagPath(q.flag);
  }

  const text = makeText(q);
  const margin = 2;
  // create svg.js instance
  const canvas = SVG(document.documentElement); //.size(1000, q.height);
  let texts = canvas.text(text).font("size", q.height * 0.8);
  const textLength = texts.length();
  texts.remove();

  let rect = canvas.rect(textLength + margin, q.height);
  rect.fill(`#${q.colour}`);
  rect.radius(margin * 2);

  let visibleText = canvas.plain(text);
  visibleText.fill(`#${"FFF"}`);
  visibleText.font({ size: q.height * 0.757, leading: 0, anchor: "middle" });
  visibleText.x(rect.width() / 2);
  visibleText.y(-2);

  if (q.flag) {
    // let image = await axios.get(flagPath, {
    //   responseType: "arraybuffer",
    // });
    // const big = sharp(image.data);
    // smol = big.resize(
    //   Math.ceil(q.height - margin),
    //   Math.ceil((q.height - margin) * 1.774)
    // );
    // const buf = await smol.toBuffer();
    // const b64 = buf.toString("base64");
    // let returnedB64 = Buffer.from(image.data).toString("base64");
    // let flag = canvas.image(b64);
    let flag = canvas.image(flagPath);
    flag.height(q.height - margin);
    flag.width(q.height * 1.77);
    flag.x(rect.width() - flag.width());
    flag.y(margin / 2);
  }

  canvas.size(rect.width(), q.height);

  response.status(200);
  response.type("svg");
  response.send(canvas.svg());
});

function getFlagPath(flagName) {
  const flagFiles = {
    "7899": "7899.jpg",
    agender: "Agender.jpg",
    aromantic: "Aromantic.jpg",
    asexual: "Asexual.jpg",
    baker: "Baker.jpg",
    bear: "Bear.png",
    bisexual: "Bisexual.jpg",
    genderfluid: "Genderfluid.jpg",
    genderqueer: "Genderqueer.jpg",
    intersex: "Intersex.png",
    labrys: "Labrys.jpg",
    leather: "Leather.png",
    lipstick: "Lipstick.jpg",
    nonbinary: "NonBinary.jpg",
    pansexual: "Pansexual.jpg",
    philadelphia: "Philadelphia.jpg",
    polyamory: "Polyamory.png",
    polysexual: "Polysexual.png",
    pony: "Pony.jpg",
    progress: "Progress.jpg",
    rubber: "Rubber.png",
    straightally: "StraightAlly.jpg",
    traditional: "Traditional.jpg",
    transgender: "Transgender.jpg",
  };
  //   return `https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/${
  // flagFiles[flagName.toLowerCase()]
  //   }`;
  return `../flags/${flagFiles[flagName.toLowerCase()]}`;
}

function makeText(q) {
  // builds the text in an ordered way, protexts against unordered inputs
  //   http://localhost:5001/pronoun-badge/us-central1/helloWorld?
  // subject=He
  // object=Him
  // posessive=His
  // posessive-pronoun=His
  // reflexive=Himself
  // emoji=%F0%9F%91%AB
  // colour=B00B5
  // height=20px
  // sep=|
  let parts = [];
  if (q.subject) parts.push(q.subject);
  if (q.object) parts.push(q.object);
  if (q.posessive) parts.push(q.posessive);
  if (q.posessivePronoun) parts.push(q.posessivePronoun);
  if (q.reflexive) parts.push(q.reflexive);
  if (q.emoji) parts.push(q.emoji);

  return parts.join(q.sep || "/");
}
