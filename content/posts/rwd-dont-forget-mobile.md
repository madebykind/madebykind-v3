---
title: RWD? Don't forget mobile!
categories: [] 
summary: Making it responsive is not the same as making a site mobile-friendly, no sir!
cover_img:
cover_img_alt:
date: 2012-09-14
description:
draft: false
tags: []
toc: false
---

Making it responsive is not the same as making a site mobile-friendly

I'm one of those annoying people that check the source of your newly launched site. There's few online things that I find more annoying than the >1mb 'Mobile-friendly' responsive sites. Some of the worst ones I've seen are in excess of 4Mb! Mostly, I think it's simply a case that developers haven't really thought about it (presumably they tested over wifi, not in a real-world 3G environment) or they are simply being lazy.

The first scenario is unfortunate, but understandable. If you are a professional developer the second is inexcusable .

## You want in? Pay up!

Let's not forget, mobile users pay for bandwidth, and they pay handsomely. Even on a contract, a mobile user has a set amount of bandwidth they may consume, it's simply paid for monthly. How many of the visitors to your site would be happy to pay you a USD2.50 entrance fee for the privilege of having a look round? When you deliver large sites to mobile devices that is exactly what you are doing, charging the visitor on behalf of the phone company. 

I think most people would agree that sucks.

## Think about what you are loading!

Developing a site? It's fine to use the 242KB development version of jQuery, that's what it's for (though personally, I will develop with the min version. I don't modify it anyway.)!

Finished the site and putting it live? It is not OK to continue to use the dev version, use the ~32KB minified production version!
This isn't rocket surgery, just good old fashioned common sense. It isn't hard and the rewards are many indeed, it baffles me why more developers clearly do not give more attention to page-weight when building 'mobile-friendly' sites.

## A pre-launch checklist

Am I loading anything that isn't used? Yes? Remove it!
Am I loading minified versions of site assets (.css, .js, etc)? No? Minimise them!
Have I optimised images? No? Optimise them!
Do those images really add value? No? Remove them!
Simply answering these questions, and thinking about their implications is a great first step in turning a responsive website into a mobile-friendly website. You visitors will thank you for that, your clients will thank you for that and Google will reward you some love too.

The only losers? The phone companies. That is something I can live with.
