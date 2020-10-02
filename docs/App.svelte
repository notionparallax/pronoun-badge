<script>
  let person = {
    subject: "He",
    object: "Him",
    posessive: "His",
    posessivePronoun: "His",
    reflexive: "Himself",
    emoji: "👫",
    colour: "B00B55",
    height: "60",
    sep: "/",
    note: "",
  };

  $: altText = makeText(person);
  $: url = buildURL(person);

  function buildURL() {
    let parts = [];
    if (person.subject) parts.push(`subject=${person.subject}&`);
    if (person.object) parts.push(`object=${person.object}&`);
    if (person.posessive) parts.push(`posessive=${person.posessive}&`);
    if (person.posessivePronoun)
      parts.push(`posessive-pronoun=${person.posessivePronoun}&`);
    if (person.reflexive) parts.push(`reflexive=${person.reflexive}&`);
    if (person.emoji) parts.push(`emoji=${person.emoji}&`);
    if (person.colour) parts.push(`colour=${person.colour.replace("#", "")}&`);
    if (person.height) parts.push(`height=${person.height}&`);
    if (person.sep) parts.push(`sep=${person.sep}&`);
    if (person.note) parts.push(`sep=${person.note}&`);
    return "https://pronoun.cyou/x/y?" + parts.join("");
  }

  function makeText() {
    let parts = [];
    if (person.subject) parts.push(person.subject);
    if (person.object) parts.push(person.object);
    if (person.posessive) parts.push(person.posessive);
    if (person.posessivePronoun) parts.push(person.posessivePronoun);
    if (person.reflexive) parts.push(person.reflexive);
    if (person.emoji) parts.push(person.emoji); // this seems to break sapper
    let text = parts.join(person.sep || "|");

    return text;
  }

  import { onMount } from "svelte";

  let photos = [];

  onMount(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=4`
    );
    const theJson = await res.json();
    const examplePeople = [
      {
        subject: "Zie",
        object: "Zim",
        posessive: "Zis",
        posessivePronoun: "Zir",
        reflexive: "Zieself",
      },
      {
        subject: "She",
        object: "Her",
        posessive: "Hers",
        posessivePronoun: "Her",
        reflexive: "Herself",
      },
      {
        subject: "He",
        object: "Him",
        posessive: "His",
        posessivePronoun: "His",
        reflexive: "Himself",
      },
      {
        subject: "Hep",
        object: "Himp",
        posessive: "His",
        posessivePronoun: "His",
        reflexive: "Himself",
      },
      {
        subject: "1",
        object: "2",
        posessive: "3",
        posessivePronoun: "3",
        reflexive: "5",
      },
    ];

    theJson, examplePeople;
    let temp = [];
    theJson.forEach((e, i) => {
      temp.push({ ...e, ...examplePeople[i] });
    });
    console.log(temp);
    photos = temp;
  });
</script>

<style>
  p.note {
    width: 30vw;
    display: inline-block;
    margin: 0;
  }
  input {
    width: 30vw;
  }
  label {
    min-width: 10em;
    width: 20vw;
    display: inline-block;
    text-align: right;
  }
  code {
    font-size: 200%;
  }

  .photos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
</style>

<svelte:head>
  <title>Pronoun Badge</title>
</svelte:head>

<!-- <p>alt text: {altText}</p> -->

<p><a href={url} target="_blank"><code>{url}</code></a></p>

<figure>
  <img alt="A pronoun badge that reads {altText}" src={url} />
  <figcaption>This is the generated badge at that URL</figcaption>
</figure>

<form>
  <div>
    <label for="subject">subject</label>
    <input name="subject" bind:value={person.subject} />
    <p class="note">subject={person.subject} Anything</p>
  </div>

  <div>
    <label for="object">object</label>
    <input name="object" bind:value={person.object} />
    <p class="note">object={person.object} Anything</p>
  </div>

  <div>
    <label for="posessive">posessive</label>
    <input name="posessive" bind:value={person.posessive} />
    <p class="note">posessive={person.posessive} Anything</p>
  </div>

  <div>
    <label for="posessive-pronoun">posessive pronoun</label>
    <input name="posessive-pronoun" bind:value={person.posessivePronoun} />
    <p class="note">posessive-pronoun={person.posessivePronoun} Anything</p>
  </div>

  <div>
    <label for="reflexive">reflexive</label>
    <input name="reflexive" bind:value={person.reflexive} />
    <p class="note">reflexive={person.reflexive} Anything</p>
  </div>

  <div>
    <label for="emoji">emoji</label>
    <input name="emoji" bind:value={person.emoji} />
    <p class="note">
      emoji={person.emoji}
      Anything, but probably emoji, any number.*
    </p>
  </div>

  <div>
    <label for="colour">colour</label>
    <input name="colour" bind:value={person.colour} type="color" />
    <p class="note">colour={person.colour} A hex colour</p>
  </div>

  <div>
    <label for="height">height</label>
    <input name="height" bind:value={person.height} />
    <p class="note">height={person.height} result height in px</p>
  </div>

  <div>
    <label for="sep">sep</label>
    <input name="sep" bind:value={person.sep} />
    <p class="note">sep={person.sep} a separator character</p>
  </div>

  <!-- TODO: waiting for the server to accept it -->
  <!-- <div>
    <label for="note">note</label>
    <input name="note" bind:value={person.note} />
    <p class="note">
      note={person.note}
      a little note that will show up in the server logs. Who
      <em>are</em>
      you?
    </p>
  </div> -->
</form>

<div class="photos">
  {#each photos as photo}
    <figure>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <figcaption>
        {photo.subject}<br />
        {photo.object}<br />
        {photo.posessive}<br />
        {photo.posessivePronoun}<br />
        {photo.reflexive}<br />
      </figcaption>
    </figure>
  {:else}
    <!-- this block renders when photos.length === 0 -->
    <p>loading...</p>
  {/each}
</div>
