---
title: A personal challenge
categories: [] 
summary: I set myself a challenge to build the best blog site I could, with the minimum possible amount of code. This is my first attempt, and I am quite happy with the results so far.
cover_img:
cover_img_alt:
date: 2013-02-27
description:
draft: false
tags: []
toc: false
---

Following my recent post [bemoaning the bloat](http://resolutely.me/lean-and-mean/) seen on so many sites today, I thought it would be a good idea to throw down the gauntlet on my own doorstep first.

I'd never like it to be said that I wasn't eating my eating dogfood, so I set myself a simple challenge;

> &lsquo;Build the best blog you can, with *the least amount of code* possible!&rsquo;

I wanted to see exactly how far I could push my obsession with page-weight, how low I could go. I still wanted something that looked good and fulfilled its purpose of course, but I wanted to push myself.

## And so, the cull
There are several assets I was habitually calling that leapt straight to the top of my hit-list, key among these were a couple which I think we've become conditioned to believe we cannot build without.

I'd already noticed on some recent projects that by far the largest single assets I was loading were jQuery and Modernizr. On one in particular, the latest gzipped version of jQuery was 5x the size of any other asset; that's nuts. In my quest for speed I had to question my need for these tools and in doing so found that the things I was asking of these libraries were optional, nice-but-not-essential type things.

## The essentials
What's really needed to build a decent website? Not much I think. With scrutiny I found I could fullfill my requirements with just&#42;:

1. Some thoughtful html.
2. A single stylesheet.

&#42;<small>Proper browsers only of course. IE8 and below require a little shim on account of my love for html5 elements.</small>

### Just one small comment
D'oh! Of course, blogs should have comments.

Unfortunately this requires more than a little html and css. For a number of reasons (another posts worth) I decided to go with Disqus for commenting, despite the horrific page load it brings. In this instance I found it indispensable, I only wish it were lighter.

## The result
Although I'm certain I can find somewhere to squeeze a little extra out, I'm pretty happy with the results of my first serious attempt;

* A page without commenting or images, e.g. the [archive page](http://resolutely.me/archive.html) comes in under 10Kb.
* The homepage weighs in under 60Kb.
* A typical page without commenting *with* a banner image comes in at 60-70Kb.
* A page with commenting but without images is around 230Kb-240Kb (Disqus comments are **heavy**).
* A page with commenting *and* a banner image is around 300Kb.

Overall, I'm quite happy with that. As I don't have commenting (or comment counts) enabled on the homepage, the initial hit on any vistor is kept to a minimum. All I need now is a fat-free, platform-agnostic, external commenting solution and I'm home free! I like a challenge…
