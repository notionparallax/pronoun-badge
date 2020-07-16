# pronoun-badge

An embeddable badge for your profiles to show your pronouns

![](https://pronoun.cyou/x/y?subject=He&object=Him&posessive=His&posessive-pronoun=His&reflexive=Himself&emoji=👫&colour=B00B55&height=30&sep=|)

![](https://pronoun.cyou/x/y?subject=She&object=Her&posessive=Hers&posessive-pronoun=Hers&reflexive=Herself&emoji=👫👩🏼‍🤝‍👩🏻&colour=05968c&height=30&sep=⨝)

![](https://pronoun.cyou/x/y?subject=She&object=Her&posessive=Hers&height=20)

Base URL is `https://pronoun.cyou/x/y?` and then there are params:

- `subject=He` Anything
- `object=Him` Anything
- `posessive=His` Anything
- `posessive-pronoun=His` Anything
- `reflexive=Himself` Anything
- `emoji=👫` Anything, but probably emoji, any number.\*
- `colour=B00B55` A hex colour
- `height=30` result height in px
- `sep=|` a separator character

All are optional, not all have defaults yet, and there are more to come at some point in the future.

So, the simplest badge would be:

`https://pronoun.cyou/x/y?subject=She&object=Him`

![](https://pronoun.cyou/x/y?subject=She&object=Hers&height=25)

Then you can add params as you like. (There will be a default for height soon, so you can leave that off.)

`https://pronoun.cyou/x/y?subject=He&object=Him&posessive=His&posessive-pronoun=His&reflexive=Himself&emoji=👫&colour=B00B55&height=30&sep=|`

![](https://pronoun.cyou/x/y?subject=He&object=Him&posessive=His&posessive-pronoun=His&reflexive=Himself&emoji=👫&colour=B00B55&height=30&sep=|)

I took the [names for the params from here](https://uwm.edu/lgbtrc/support/gender-pronouns/):

![](https://uwm.edu/lgbtrc/wp-content/uploads/sites/162/2016/04/Pronoun-cards-2016-01-768x439.png)

This is a subject that I don't really know a lot about, so if you have any input, I'd really appreciate it. Submit a PR or email me (ben at notionparallax.co.uk)

\* The skin colour thing in the emojis is cool, but it does seem a bit specific. maybe someone could make a skin colour emoji that worked like party parrot, but for all the possible skin tones?

![](https://cultofthepartyparrot.com/parrots/hd/parrot.gif)
