import { writable } from "svelte/store";

function createPerson() {
  const { subscribe, set, update } = writable({
    subject: "He",
    object: "Him",
    posessive: "His",
    posessivePronoun: "His",
    reflexive: "Himself",
    emoji: "👫",
    colour: "B00B55",
    height: "60",
    sep: "/",
  });

  return {
    makeText: () => {
      let parts = [];
      if (person.subject) parts.push(person.subject);
      if (person.object) parts.push(person.object);
      if (person.posessive) parts.push(person.posessive);
      if (person.posessivePronoun) parts.push(person.posessivePronoun);
      if (person.reflexive) parts.push(person.reflexive);
      if (person.emoji) parts.push(person.emoji); // this seems to break sapper
      let text = parts.join(person.sep || "|");

      return text;
    },
    buildURL: () => {
      let parts = [];
      if (person.subject) parts.push(`subject=${person.subject}&`);
      if (person.object) parts.push(`object=${person.object}&`);
      if (person.posessive) parts.push(`posessive=${person.posessive}&`);
      if (person.posessivePronoun)
        parts.push(`posessive-pronoun=${person.posessivePronoun}&`);
      if (person.reflexive) parts.push(`reflexive=${person.reflexive}&`);
      if (person.emoji) parts.push(`emoji=${person.emoji}&`);
      if (person.colour) parts.push(`colour=${person.colour}&`);
      if (person.height) parts.push(`height=${person.height}&`);
      if (person.sep) parts.push(`sep=${person.sep}&`);
      return "https://pronoun.cyou/x/y?" + parts.join("");
    },
  };
}
export const person = createPerson();
