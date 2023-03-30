---
title: Colour magic with Sass
summary: Creating a complementary colour palette with Sass, and a quick glance at colour theory, is easy.
cover_img:
cover_img_alt:
date: 2014-11-16
description:
draft: false
tags: []
toc: false
hero-class: overlay-primary hero-reversed
hero-image: /img/1280px/dust.jpg
intro-image: /img/800px/dust.jpg
---

The influence that colours have upon us is profound, though frequently we don't recognise it. It can mean the difference between a customer completing your check-out process, or not.

The process of selecting and implementing a colour pallette for a design is arguably one of the most difficult tasks a designer faces. Fortunately, the 'art' of colour is far more science than art. By relying on [colour theory](http://en.wikipedia.org/wiki/Color_theory "Wikipedia's entry on Colour Theory") it's possible to spin out a palette of harmonious, complementary and aesthetically pleasing colours from a single colour choice. Online tools, like [Adobe's Kuler][2], provide an easy-to-use interface that allows you to easily experiment with various colour schemes.

>Your colour choices may be the deciding factor in the subconscious process by which a visitor decides to trust, or not trust, your brand. It's that important.

My process used to involve several hours messing around in Kuler tweaking settings and switching schemes, before finally going with either the basic complementary or triadic schemes. I now go immediately to these first, because they always work.

## Sassy palettes please

Now I know that this is the case, and since I've switched to[Sass][5], my color scheming process can now be automated. Generating colour palettes, and indeed any other colour manipulation process, with Sass is laughably easy. I simply declare my ‘Brand colour’ variable and use that to generate the colour variables I need, like this:

	// Brand palette
	$brand-color: 			rgb(52, 73, 94);

	// Return the complementary colour to $brand-color
	$complement-color: 		adjust_hue($brand-color, 180);

	// Triadic color scheme from $brand-color ? Go!
	$secondary-color: 		adjust_hue($brand-color, 120);
	$tertiary-color: 		adjust_hue($brand-color, -120);

With this in place I can simply redefine the value of $brand-color to change my entire colour scheme site-wide. By hanging all my other colour choices from these variables I can keep my stylesheets flexible, maintainable and re-usable.

Within the same variables.scss I can then go on to declare other colour choices by referencing the variables generated for my colour pallette, like so:

	// Link colours.
	$link-color: 			$complement-color;
	$link-color-hover:      lighten($link-color, 10%);

My links now automagically complement my primary colour choice, which I might use in the banner or footer for example, perfectly. Importantly, I need only to change the value of $brand-color to change *all the colours* in my design.

## Experiment with colour
The above example is only the tip of the iceberg. I've touched only on adjust-hue() there's plenty more ways to manipulate colour with Sass. If you want to learn more about manipulating colours with Sass then [Sass & Compass Color Functions][6] is a great comprehensive resource. Not certain about the syntax or how to combine multiple functions? Check out [SassMe][7].

If you want to learn more about the fundamentals of colour theory and the application of colour in web design I highly recommend [Mark Boulton's][3] brilliant book [Designing for the web][4]. It's a book that every web designer should own.

[2]: https://kuler.adobe.com/create/color-wheel "Adobe's online colour palette generator"
[3]: https://twitter.com/markboulton "Mark Boulton on Twitter"
[4]: http://designingfortheweb.co.uk/
[5]: http://sass-lang.com/
[6]: http://jackiebalzer.com/color
[7]: http://sassme.arc90.com/
