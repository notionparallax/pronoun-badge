const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info(JSON.stringify(request.query), {
    structuredData: true,
  });

  const { createSVGWindow } = require("svgdom");
  const window = createSVGWindow();
  const SVG = require("svg.js")(window);
  const document = window.document;

  let q = request.query;
  //example URL: http://localhost:5001/pronoun-badge/us-central1/helloWorld?subject=He&object=Him&posessive=His&posessive-pronoun=His&reflexive=Himself&emoji=%F0%9F%91%AB&colour=B00B5&height=20px

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

  canvas.size(rect.width(), q.height);

  response.status(200);
  response.type("svg");
  response.send(canvas.svg());
});
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
  let text = parts.join(q.sep || "/");
  return text;
}
