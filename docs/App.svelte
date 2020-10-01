<script>
  let subject = "He";
  let object = "Him";
  let posessive = "His";
  let posessivePronoun = "His";
  let reflexive = "Himself";
  let emoji = "👫";
  let colour = "B00B55";
  let height = "30";
  let sep = "/";

  function makeText() {
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
    if (subject) parts.push(subject);
    if (object) parts.push(object);
    if (posessive) parts.push(posessive);
    if (posessivePronoun) parts.push(posessivePronoun);
    if (reflexive) parts.push(reflexive);
    if (emoji) parts.push(emoji);

    return parts.join(sep || "/");
  }
  function buildURL() {
    let parts = [];

    if (subject) parts.push(`subject=${subject}&`);
    if (object) parts.push(`object=${object}&`);
    if (posessive) parts.push(`posessive=${posessive}&`);
    if (posessivePronoun) parts.push(`posessive-pronoun=${posessivePronoun}&`);
    if (reflexive) parts.push(`reflexive=${reflexive}&`);
    if (emoji) parts.push(`emoji=${emoji}&`);
    if (colour) parts.push(`colour=${colour}&`);
    if (height) parts.push(`height=${height}&`);
    if (sep) parts.push(`sep=${sep}&`);
    return "https://pronoun.cyou/x/y?" + parts.join("");
  }
</script>

<h1>
  <code>{buildURL()}</code>
  <img alt="A pronoun badge that reads {makeText()}" src={buildURL()} />
</h1>

<div>
  <label for="subject">subject</label>
  <input name="subject" bind:value={subject} />
  <p>subject=He Anything</p>

  <label for="object">object</label>
  <input name="object" bind:value={object} />
  <p>object=Him Anything</p>

  <label for="posessive">posessive</label>
  <input name="posessive" bind:value={posessive} />
  <p>posessive=His Anything</p>

  <label for="posessive-pronoun">posessive pronoun</label>
  <input name="posessive-pronoun" bind:value={posessivePronoun} />
  <p>posessive-pronoun=His Anything</p>

  <label for="reflexive">reflexive</label>
  <input name="reflexive" bind:value={reflexive} />
  <p>reflexive=Himself Anything</p>

  <label for="emoji">emoji</label>
  <input name="emoji" bind:value={emoji} />
  <p>emoji=👫 Anything, but probably emoji, any number.*</p>

  <label for="colour">colour</label>
  <input name="colour" bind:value={colour} />
  <p>colour=B00B55 A hex colour</p>

  <label for="height">height</label>
  <input name="height" bind:value={height} />
  <p>height=30 result height in px</p>

  <label for="sep">sep</label>
  <input name="sep" bind:value={sep} />
  <p>sep=| a separator character</p>
</div>
