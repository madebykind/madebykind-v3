---
author: pam
cover_img: images/brand-rwb.jpg
cover_img_alt: A nerd in his natural habitat
draft: false
hidden: true
title: Tuned typography
toc: false
topics: 
date: 2020-04-30T17:28:36.948Z
description: We want our users to engage with our content, and great typography helps to do that.
intro: We want our users to engage with our content, and great typography helps to do that. The easier it is to read, the better the engagemnent.
---

Until now, trying to style the content of an article, document, or blog post has been a tedious task that required a keen eye for typography and a lot of complex custom CSS. Typically, we remove all of the default browser styling from paragraphs, headings, lists and more.

This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are_just trying to style some content_ that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.

We get lots of complaints about it actually, with people regularly asking us things like:

> Why are you removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?

We hear you, but we’re not convinced that simply disabling our base styles is what you really want. You don’t want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look _awesome_, not awful.

This is our attempt to give you what you _actually_ want, without any of the downsides of doing something stupid like disabling our base styles.
It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:

## What to expect from here on out

What follows from here is just a bunch of absolute nonsense I’ve written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like **bold text**, unordered lists, ordered lists, code blocks, block quotes, _and even italics_.

It’s important to cover all of these use cases for a few reasons:

1. We want everything to look good out of the box.
1. Really just the first reason, that’s the whole point of the plugin.
1. Here’s a third pretend reason though a list with three items looks more realistic than a list with two items.

Now we’re going to try out another header style, <abbr title="For The Win">FTW</abbr>.

### Great typography _should_ be easy!

So that’s a header for you – with any luck if we’ve done our job correctly that will look pretty reasonable. Something a wise person once told me about typography is:

> Typography is pretty important if you don’t want your stuff to look like trash. Make it good then it won’t be bad.

Unfortunately, Markdown does not provide a way to include proper quotations, i.e. correctly attributed. This short-code <span class="h--ui">📢 Kind Exclusive!</span> corrects that;

{{< blockquote author="Tim Berners-Lee" cite="www.brainyquote.com/citation/quotes/tim_bernerslee_444486" role="Computer Scientist" >}}
The Semantic Web isn't inherently complex. The Semantic Web language, at its heart, is very, very simple. It's just about the relationships between things.
{{</ blockquote >}}

It’s probably important that images look okay here by default as well…

![A smiling female scientist](../images/thisisengineering.jpg "Science is great, the computers are the bestest!")

Markdown does not provide a way to create figures, with captions, so that requires a shortcode, eg: 


#### Even for lists…

Now I’m going to show you an example of an unordered list to make sure that looks good, too:

- So here is the first item in this list.
- In this example we’re keeping the items short.
- Later, we’ll use longer, more complex list items.

And that’s the end of this section.

## What if we stack headings?

### We should make sure that looks good, too.

Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.

### When a heading comes after a paragraph…

When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let’s see what a more complex list would look like.

<ul>
  <li>
    <p>
      <strong>I often do this thing where list items have headings.</strong>
    </p>
    <p>
      For some reason I think this looks cool which is unfortunate because it’s pretty annoying to get the styles right.
    </p>
    <p>
      I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn’t write this way.
    </p>
  </li>
  <li>
    <p>
      <strong>Since this is a list, I need at least two items.</strong>
    </p>
    <p>
      I explained what I’m doing already in the previous list item, but a list wouldn’t be a list if it only had one item, and we really want this to look realistic. That’s why I’ve added this second list item so I actually have something to look at when writing the styles.
    </p>
  </li>
  <li>
    <p>
      <strong>It’s not a bad idea to add a third item either.</strong>
    </p>
    <p>
      I think it probably would’ve been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.
    </p>
  </li>
</ul>

After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.

## Code should look okay by default.

I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a> or <a href="https://prismjs.com/">Prism</a> or something if they want to style their code blocks but it wouldn’t hurt to make them look _okay_ out of the box, even with no syntax highlighting.

Here’s what <code>tailwind.config.js</code> file for this project looks like at the time of writing:

<pre><code class="language-js">
// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './archetypes/**/*.*',
    './content/**/*.*',
    './data/**/*.*',
    './layouts/**/*.html',
    './src/js/**/*.*',
    './static/**/*.*',
  ],
  corePlugins: {
    container: false,
  },
  darkMode: 'media',
  theme: {
    colors: {
      currentColor: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',

      blue: '#265494',
      black: '#011c25',
      buff: '#f1ebe8',
      claret: '#9b0b36',
      green: '#08533c',
      indigo: '#084059',
      orange: '#e85625',
      pink: '#ebd6e6',
      sky: '#b6e0ee',
      teal: '#94cbb8',
      white: '#fff',
      yellow: '#fdb515',
    },
    extend: {
      borderWidth: {
        3: '3px',
      },
      fontFamily: {
        display: ['Smithee'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Marselis', ...defaultTheme.fontFamily.serif],
      },
      lineHeight: {
        'heading': '0.8',
      },
      maxHeight: {
        'illustration': '55rem',
      },
      maxWidth: {
        'cta-copy': '45ch',
        'illustration': '55rem',
      },
      minHeight: {
        '90vh': '90vh',
      },
    },
    fontSize: {
      /*@link https://utopia.fyi/type/calculator?c=375,15,1.618,1366,24,1.618,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12*/
      /*Step -2: 5.73px → 9.17px*/
      xs: 'clamp(0.36rem, calc(0.28rem + 0.35vw), 0.57rem)',

      /*Step -1: 9.27px → 14.83px*/
      sm: 'clamp(0.58rem, calc(0.45rem + 0.56vw), 0.93rem)',

      /*Step 0: 15.00px → 24.00px*/
      base: 'clamp(0.94rem, calc(0.72rem + 0.91vw), 1.50rem)',

      /*Step 1: 24.27px → 38.83px*/
      md: 'clamp(1.52rem, calc(1.17rem + 1.47vw), 2.43rem)',

      /*Step 2: 39.27px → 62.83px*/
      lg: 'clamp(2.45rem, calc(1.90rem + 2.38vw), 3.93rem)',

      /*Step 3: 63.54px → 101.66px*/
      xl: 'clamp(3.97rem, calc(3.07rem + 3.85vw), 6.35rem)',

      /*Step 4: 102.80px → 164.48px*/
      '2xl': 'clamp(6.43rem, calc(4.97rem + 6.22vw), 10.28rem)',

      /*Step 5: 166.34px → 266.14px*/
      '3xl': 'clamp(10.40rem, calc(8.04rem + 10.07vw), 16.63rem)',
      },
    },
  variants: {
    extend: {
      fontSmoothing: ['dark'],
    }
  }
}
</code></pre>

Hopefully that looks good enough to you.

### What about nested lists?

Nested lists basically always look bad which is why editors like Medium don’t even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.

<ol>
  <li>
    <p>
      <strong>Nested lists are rarely a good idea.</strong>
    </p>
    <ul>
      <li>You might feel like you are being really “organised” or something but you are just creating a gross shape on the screen that is hard to read.</li>
      <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
      <li>Nesting tons of folders in your source code is also not helpful.</li>
    </ul>
  </li>
  <li>
    <p>
      <strong>Since we need to have more items, here’s another one.</strong>
    </p>
    <ul>
      <li>I’m not sure if we’ll bother styling more than two levels deep.</li>
      <li>Two is already too much, three is guaranteed to be a bad idea.</li>
      <li>If you nest four levels deep you belong in prison.</li>
    </ul>
  </li>
  <li>
    <p>
      <strong>Two items isn’t really a list, three is good though.</strong>
    </p>
    <ul>
      <li>Again please don’t nest lists if you want people to actually read your content.</li>
      <li>Nobody wants to look at this.</li>
      <li>I’m upset that we even have to bother styling this.</li>
    </ul>
  </li>
</ol>

The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements aren’t given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.

<ul>
  <li>
    <p>
      <strong>For example, here’s another nested list.</strong>
    </p>
    <p>
      <strong>But this time with a second paragraph.</strong>
    </p>
    <ul>
      <li>These list items won’t have <code>&lt;p&gt;</code> tags</li>
      <li>Because they are only one line each</li>
    </ul>
  </li>
  <li>
    <p>
      <strong>But in this second top-level list item, they will.</strong>
    </p>
    <p>
      This is especially annoying because of the spacing on this paragraph.
    </p>
    <ul>
      <li>
        <p>
          As you can see here, because I’ve added a second line, this list item now has a <code>&lt;p&gt;</code> tag.
        </p>
        <p>
          This is the second line I’m talking about by the way.
        </p>
      </li>
      <li>
        Finally here’s another list item so it’s more like a list.
      </li>
    </ul>
  </li>
  <li>
    A closing list item, but with no nested list, because why not?
  </li>
</ul>

And finally a sentence to close off this section.

## There are _other elements_ we need to style!

I almost forgot to mention links, like <a href="https://madebykind.com">this link to the Kind website</a>. We almost made them blue but that’s so yesterday, so we went with our brand colour, it feels edgier.

We even included table styles, check it out:

<table>
  <thead>
    <tr><th>Wrestler</th><th>Origin</th><th>Finisher</th></tr>
  </thead>
  <tbody>
    <tr><td>Bret "The Hitman" Hart</td><td>Calgary, AB</td><td>Sharpshooter</td></tr>
    <tr><td>Stone Cold Steve Austin</td><td>Austin, TX</td><td>Stone Cold Stunner</td></tr>
    <tr><td>Randy Savage</td><td>Sarasota, FL</td><td>Elbow Drop</td></tr>
    <tr><td>Vader</td><td>Boulder, CO</td><td>Vader Bomb</td></tr>
    <tr><td>Razor Ramon</td><td>Chuluota, FL</td><td>Razor’s Edge</td></tr>
  </tbody>
</table>

We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss</code>.

### Typographic elements:

We musn’t forget the really funky stuff. Agreed, _most users will not know about these_ but that doesn’t mean we shouldn’t consider them. At the
very least we will want to ensure that they don't look terrible in our chosen typeface!
There’s &prime; primes and &Prime; double primes, &dagger; daggers and &Dagger; double daggers, &sect; sections, &para; pilcrows, &#10087; hedera, &#8470; numero, &#9758;fists or manacles&#9756;,
&copy; copyright, &reg; registered and &trade; trademark symbols, &pound; pounds and &euro; euros, &frac12; fractions. Let's not even think about mathematical symbols&iexcl;

### We may even use <code>code</code> in headings

Even though it’s probably a bad idea, and historically I’ve had a hard time making it look good. This _"wrap the code blocks in backticks"_ trick works pretty well though really.

Another thing I’ve done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href="https://github.com/tailwindcss/docs"><code>tailwindcss/docs</code></a> repository. I don’t love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.

#### We haven’t used an <code>h4</code> yet

But now we have. Please don’t use <code>h5</code> or <code>h6</code> in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or <code>h6</code>.

We don’t style them at all out of the box because <code>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it _smaller_ than the body copy? No thanks.

### We need to think about stacked headings…

#### Let’s make sure we don’t screw that up with <code>h4</code> elements, either.

Phew, with any luck we have styled the headings above this text and they look pretty good.

Let’s add a closing paragraph here so things end with a decently sized block of text. I can’t explain why I want things to end that way but I have to assume it’s because I think things will look weird or unbalanced if there is a heading too close to the end of the document.

---

What I’ve written here is probably long enough, but adding this final sentence can’t hurt. Besides, it gave me an excuse to add a couple of horizontal rules. This is a thematic break from the preceding content.

---

<small>Legal disclaimer: This page is an adaption of <a href="https://tailwindcss-typography.netlify.app/">Tailwind typography</a></small>
