---
author: Seth Warburton
title: Defining a performance budget
date: 2020-02-21T14:35:14.710Z
draft:
tags: ['webperf','UX',]
cover_img: images/chris-liverani-HUJDz6CJEaM-unsplash.jpg
cover_img_alt: Illuminated rev counter
description: >-
  Defining a performance bugdet for your web apps is a great way to ensure that
  performance concerns are addressed from the outset, not an afterthought.
---

We already know that web applications have balooned in recent years with the [average website now almost 2Mb](https://httparchive.org/reports/page-weight#bytesTotal). We also know that the the larger a website becomes the more [it costs visitors to be able to view it](https://whatdoesmysitecost.com/), the more it costs us to maintain and deliver it and the more [CO<sub>2</sub> it is responsible for](https://www.websitecarbon.com/)—fat websites cost everyone!

So, as responsible developers, how can we go about ensuring that the things we put out into the World are as efficient and sustainable as they can possibly be?

It's too often the case that web applications are developed only with a narrow set of requirements based around the high-level business goals with performance testing and optimisations taking place right at the end of the development cycle, just before the application is shipped to production. But this approach comes with several notable downsides:

* Features and functionality cannot be removed at this point, they are already in and have been accepted, we can only look now at micro-optimisations; i.e. trimming the fat.
* Deadlines are already in place and the pressure to ‘go live’ is now a key driver in any development decision.
* There's an belief that there will be time (and budget) in place at some later point to go back and make things better. In reality, this almost never happens. Additional time and budget will instead go to adding more features, exacerbating the problem.

## Pre-empting performance issues

One way to ensure that we don't fall into this trap is to ensure that performance concerns are a first-class citizen in our application requirements. What we build should never exceed key performance metrics and requirements, they are fundamental requirements of our application as core functionality.

In the same way that we may require that ‘a user can create an account using only their email address‘, we should also be creating requirements like ’a user can reach the site, on a 3G connection, in under 3 seconds’.

Put simply, we need to ask ourselves ‘[Can we afford it?](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/)’. Once we have some idea of what we want to achieve, tools like the [Performance Budget Calculator](https://www.performancebudget.io/) can help us keep on track, allowing us to see where trade-offs can be made. While the requirements themselves may differ according to the application, we can relate the requirements to the build phase of our application by quantifying them, and at every step of development ensure that we adhere to these metrics.


## Defining a performance budget

An easy way to codify such requirements is to remove them from the standard project requirements documenet and define them in a seperate document, the Performance Budget. How quickly can a user expect to be able to use our application on a desktop? On a mobile phone? On a low-end mobile phone with patchy 3G coverage? What's the maximum a user on a typical data plan will pay to see our homepage?

By defining and codifying these metrics we ensure that our developers will have a clear idea of the constraints they face, and that they proceed accordingly, and we have clearly defined items that we can easily test against. It's always easier to work towards a clear goal!

>> Setting a performance budget makes allows us to quantify and validate every addition to our codebase, ensuring that performance remains a key requirement at all stages of development.

My approach has always been to deliver the lightest, fastest site that I possibly can as performance is, and always will be, a key aspect of user experience. Users don’t like to wait for things to load, users don’t like sites that drain their phone battery, users don't like to have their data allowance hammered for no good reason! Fast sites make users happy.


### Firm but fair
This is my personal perfomance budget, and while it might seem like a hard-to-reach target I believe that it absolutely is possible to deliver great experiences given the following technical constraints and, more importantly, our users will thank us for doing do.

#### Performance budget:

* 300 kilobytes for all scripts.
* 500 kilobytes for all images.
* 100 kilobytes for all third-party resources.
* 1000 kilobytes total.
* 10 network requests for third-party resources.
* 30 network requests total.


## Walking the walk

Now a budget has been decided, things get easier, there are a number of tools and services that can help you and your team keep things on track and within budget. One of my personal favourites, [Lighthouse](https://developers.google.com/web/tools/lighthouse), can be configured to [audit against the budget you define](https://developers.google.com/web/tools/lighthouse/audits/budgets) and can be [integrated into your build process](https://developers.google.com/web/tools/lighthouse/#cli) to catch bloat _before it is added_ to your app.
