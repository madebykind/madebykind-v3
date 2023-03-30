---
title: html5 overrides for Joomla
categories: [] 
summary: A set of semantic html5 overrides for Joomla which standardise and sanitise Joomla's content output.
permalink: /labs/joomla-html5-overrides/
cover_img:
cover_img_alt:
date: 2012-12-21
description:
draft: false
tags: []
toc: false
---

My own set of HTML5 overrides for Joomla! content, you are free to use them in your own projects.

In re-designing this site, I created a set of overrides for com_content to ensure that the html output by the component made use of HTML5 tags, like `<article>` and `<section>`, bringing semantic meaning to the markup.

Not only is this an attempt to bring Joomla's output up to modern standards, it should (in theory at least) benefit users of limited ability, including those using screen readers and other assisive technologies.

## How does HTML5 do that?

Simply put, the tag `<nav>` carries more meaning than `<div id="top-menu">`. Humans understand that both are probably for the same thing, search engines and screen readers do not. Adding more meaning to the markup is good for everyone; visitors, coders and search engines. None need to guess at what might be contained within `<header>`, `<nav>` or `<footer>` tags.

Aside (see what I did there?) from that, it is also important that Joomla keeps moving forward, incorporating modern standards, emerging practices and new technology in order to maintain it's position. There has been a lot of progress recently in Joomla's back-end, new functionality, code optimisations and more.

The front-end is now crying out for some love too!

## One small step

I want to share these overrides in a small effort to give something back to the project and to a community that have given me so much. While I am sure that there will be disagreement over some of the ways I have structured the markup, and there are probably many errors in my work, my hope is that this will help to kickstart a wider discussion about HTML5 semantics in Joomla. How should be we doing this?

For me, this is part of a wider personal project to create a complete mobile-first, responsive HTML5 template for Joomla! as something to share with the community.

## What's the catch?

Currently, I have created overrides only for com_content, though many more are needed to bring Joomla's output up to date. Of course, I will be adding my own overrides for ther components as I complete them as, ultimately, I would like to see a complete set of overrides for the Joomla core. I also hope that others will;

- suggest improvements
- point out where I have gone wrong, and
- contribute any overrides they may have for other components/modules.

## Where's the code?

On Github of course; [my html5 overrides for Joomla](https://github.com/nternetinspired/joomla_html5_overrides). Fork away!
