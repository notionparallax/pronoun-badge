# pronoun-badge

An embeddable badge for your profiles to show your pronouns. Works anywhere that you can url link an image. Inspired by the new GitHub profile repo, particularly [8bithemant](https://github.com/8bithemant/8bithemant)'s. He has a pronoun badge, but it's a one off; this is generalised.

Here's a few examples

![](https://pronoun.cyou/x/y?subject=He&object=Him&posessive=His&posessive-pronoun=His&reflexive=Himself&emoji=👫&colour=B00B55&height=30&sep=|)

![](https://pronoun.cyou/x/y?subject=She&object=Her&posessive=Hers&posessive-pronoun=Hers&reflexive=Herself&emoji=👫👩🏼‍🤝‍👩🏻&colour=05968c&height=30&sep=⨝)

![](https://pronoun.cyou/x/y?subject=She&object=Her&posessive=Hers&height=20)

And you can also use it inline: Ben ![](https://pronoun.cyou/x/y?subject=He&object=Him&height=20)

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

`https://pronoun.cyou/x/y?subject=She&object=Her&height=25`

![](https://pronoun.cyou/x/y?subject=She&object=Her)

Then you can add params as you like.

`https://pronoun.cyou/x/y?subject=He&object=Him&posessive=His&posessive-pronoun=His&reflexive=Himself&emoji=👫&colour=B00B55&height=30&sep=|`

![](https://pronoun.cyou/x/y?subject=He&object=Him&posessive=His&posessive-pronoun=His&reflexive=Himself&emoji=👫&colour=B00B55&height=30&sep=|)

I took the [names for the params from here](https://uwm.edu/lgbtrc/support/gender-pronouns/):

![](https://uwm.edu/lgbtrc/wp-content/uploads/sites/162/2016/04/Pronoun-cards-2016-01-768x439.png)

This is a subject that I don't really know a lot about, so if you have any input, I'd really appreciate it. Submit a PR or email me (ben at notionparallax.co.uk)

\* The skin colour thing in the emojis is cool, but it does seem a bit specific. maybe someone could make a skin colour emoji that worked like party parrot, but for all the possible skin tones?

![](https://cultofthepartyparrot.com/parrots/hd/parrot.gif)

## Flags - alpha feature

There is an extra param that you can use to add a flag. It doesn't work fully yet, but you can think of it as a preview feature.

![](https://pronoun.cyou/x/y?subject=She&object=Her&posessive=Hers&posessive-pronoun=Hers&reflexive=Herself&emoji=👩🏾‍🤝‍👩🏽✊&colour=B00B55&height=30&sep=%20|%20&flag=straightally)

I got the flags from [this article: The Complete Guide to Queer Pride Flags](https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0)

<style>
li img {height:1rem;}
</style>

- 1978-1999 Pride Flag `flag=7899` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/7899.jpg)
- Agender Flag `flag=agender` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Agender.jpg)
- Aromantic Flag `flag=aromantic` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Aromantic.jpg)
- Asexual Flag `flag=asexual` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Asexual.jpg)
- Bear Brotherhood Flag `flag=bear` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Bear.png)
- Bisexual Flag`flag=bisexual` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Bisexual.jpg)
- Genderfluid/Genderflexible Flag `flag=genderfluid` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Genderfluid.jpg)
- Genderqueer Flag `flag=genderqueer` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Genderqueer.jpg)
- Gilbert Baker Pride Flag `flag=baker` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Baker.jpg)
- Intersex Flag `flag=intersex` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Intersex.png)
- Labrys Lesbian Pride Flag `flag=labrys` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Labrys.jpg)
- Leather, Latex, & BDSM Flag `flag=leather` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Leather.png)
- Lipstick Lesbian Flag `flag=lipstick` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Lipstick.jpg)
- Non Binary Flag `flag=nonbinary` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/NonBinary.jpg)
- Pansexual Pride `flag=pansexual` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Pansexual.jpg)
- Philadelphia People Of Color Inclusive Flag `flag=philadelphia` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Philadelphia.jpg)
- Polyamory Flag `flag=polyamory` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Polyamory.png)
- Polysexual Flag`flag=polysexual` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Polysexual.png)
- Pony Flag `flag=pony` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Pony.jpg)
- Progress Pride Flag `flag=progress` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Progress.jpg)
- Rubber Pride Flag `flag=rubber` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Rubber.png)
- Straight Ally Flag `flag=straightally` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/StraightAlly.jpg)
- Traditional Gay Pride Flag `flag=traditional` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Traditional.jpg)
- Transgender Flag `flag=transgender` ![](https://raw.githubusercontent.com/notionparallax/pronoun-badge/master/flags/Transgender.jpg)
