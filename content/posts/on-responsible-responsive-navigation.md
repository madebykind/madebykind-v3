---
title: On responsible, responsive navigation
categories: []
summary: Drop-down navigation for small screens is very popular in responsive web design, but why do so many approaches execute it the wrong way?
cover_img:
cover_img_alt:
date: 2013-02-07
description:
draft: false
tags: []
toc: false
permalink: /wrote/thoughts/on-responsible-responsive-navigation/
---

Drop-down navigation for small screens is very popular in responsive web design, and rightly so. It allows us to greatly reduce the amount of screen space taken up by navigation elements when they are not needed.

Start with an unordered list of navigation links and hide them (collapsing the space they occupy) until they are requested. Easy right?

It's a great concept, so why do so many approaches execute it the wrong way?

## There's a right way, and a wrong way
Unfortunately, I'm seeing a lot of examples (frameworks, I'm looking at you!) doing it the wrong way and ignoring the principles of both <a href="http://www.w3.org/wiki/Graceful_degredation_versus_progressive_enhancement" title="See what the W3C says about this stuff!" target="_blank">graceful degradation and progressive enhancement</a>.

What I'm seeing is a pattern that runs basically like this:

<ul>
<li>Markup a nav toggle link.</li>
<li>Markup the menu.</li>
<li>Hide main nav with CSS (Minus points for using display: none).</li>
<li>Reveal the menu, when the nav toggle is clicked, using Javascript to reverse the default 'hidden' style set in css.</li>
</ul>
<h3>What's the problem?</h3>
The problem with this approach is that there's a weak link here, Javascript. <em>Never</em> assume that it will always be available. When it isn't this is what you are left with, it isn't pretty:

<ol>
<li>A nav toggle that doesn't do anything (except frustrate users who click away in vain).</li>
<li><em>No navigation!</em></li>
<li>A very frustrated user.</li>
</ol>
I think we can all agree that this is not good.

<h2>Reverse that!</h2>
What bothers me most is that there is simply no need to do things like this. It's sensless. We can achieve exactly the same thing with similar techniques applied in reverse. Let's hide stuff with Javascript, instead of revealing it.

In fact, we can do all the hide/unhide business with css. We just need a little Javascript (jQuery in my case) to provide some hooks to work with. My preferred pattern goes like this:

<ul>
<li>Markup the menu.</li>
<li>Use Javascript to determine if we have Javascript!</li>
<li>Create the nav toggle using Javascript. We don't want it in markup, as without Javascript it's useless.</li>
<li>Use Javascript to add a css 'hook' to the menu when the toggle link is clicked.</li>
<li>Hide the menu using css, <em>if, and only if,</em> we have Javascript!</li>
<li>Reveal the menu using css, when the our hook is added by a toggle click.</li>
</ul>

Now, when Javascript is disabled you get:

<ol>
<li>Navigation!</li>
<li>Happy user.</li>
</ol>
<h2>You want code too?</h2>
As always, the best way to understand how this works is to see some code in action, so I did a quick <a href="https://jsfiddle.net/internetinspired/hCV2a/36/" target="_blank" rel="nopener noreferrer">fiddle</a> to demonstrate what I'm talking about.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/internetinspired/hCV2a/36/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
Just slap some pretty CSS3 on top and you're done. A nice responsive, sliding, menu which leaves users without Javascript with a menu! If there is a downside, I honestly can't see it.

<h2>Is there an even better way?</h2>
I'm sure there probably is. For starters, jQuery is hardly my forte!!

I would love to hear how you are approaching these issues and making navigation responsive, user-friendly, device-friendly and future-friendly.

Thanks.
