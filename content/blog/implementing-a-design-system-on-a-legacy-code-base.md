---
hidden: false
title: Implementing a design system on a legacy code base
card_colour: bg-sky text-green
date: 2019-07-23T15:45:46.525Z
author: mat
draft: false
description: We're participating in the Global Climate Strike this Friday
toc: false
featured: false
key_topic: How we work
topics:
  - Design systems
---
It's been just over a year since we started working with [Sheffield Hallam University](https://madebykind.com/blog/sheffield-hallam-university-appoint-kind-as-digital-consultancy) to create a design system for their website and other online properties.

During the transition period between the legacy websites' design and front-end, we've also supported building new content for clearing, SHU's online prospectus and their student intranet, MyHallam.

So what has the process been so far and what have we learnt from the experience?

When creating a design system for existing products, it’s useful to begin by collating all of the colours, typography and patterns that are currently live. 

This was our first task and we were not surprised to find a large amount of colours and font-styles being used, especially on the older properties owned by the University. 

![A list of background-colours used on the Sheffield Hallam University website. There are a lot.](images/shu-colour-audit-vert.jpg)

We also found that there wasn’t very much in the way of component reuse or consistency of design between similar components.

![Examples of call to action styles found on the Sheffield Hallam University website](images/cta-audit.jpg)

At this point, the scale of the task was becoming clear, but it’s just not possible to fix this in one fell swoop without rebuilding all online properties and releasing in one ​“big-bang” launch. 

And that’s never a good idea. 

## Creating a hybrid

Since that initial audit, it has been necessary to carry out a lot of ​“Business as Usual” work to keep the primary website up-to-date and release new features. 

As part of this work we have built and evolved the principles and foundations of SHU’s design system but, for valid reasons, not all parts of this website could be updated at the same time. 

For example, the masthead on the website would still need to use legacy design and front-end code as updating it required much more work than originally envisaged (more on that later). 

So, we would be left with new templates using design system components and code which also required the inclusion of legacy styles. 

Simply pulling both style files into a template would lead to an increase in page load time, which is something no developer wants to see, so we packaged up just the legacy styles that were needed for the masthead and nothing more. 

## Design System as a Service

This got our development team thinking. Would it make sense for the design system we were creating to be separated from the primary website and consumed, as a service, by all of the University’s online properties? 

After all, while [shu​.ac​.uk](http://shu.ac.uk/) runs on the Sitecore platform, just like any other organisation of this size, the University is responsible for websites, intranets and API systems on many other platforms too. 

Abstracting the design system into a service means that all of those platforms can consume the same CSS and use the same HTML, ensuring consistency and speed of development. 

## Hard deadlines and continuous integration

Due to legacy issues, SHU don’t yet have the ability to regularly update their primary website’s code and so are often working to hard deployment deadlines which can be months apart. 

With more rigid time constraints, there is often a tendency to ​“get things done” and here is were we have encountered issues with consistency. 

These consistency issues then live in the wild for a relatively long time, while we wait for the next deployment date. 

To reduce the likelihood of these problems arising, we created a user interface library in Adobe XD which includes colours, type styles and all of the existing design system components. 

![Screenshot of Adobe XD file containing Sheffield Hallam University UI toolkit](images/shu-toolkit.jpg)

The toolkit is then used to wireframe new templates and is subsequently updated when creating new design.

## Letting go

As we are not Sitecore developers, all integration of the design system HTML code is handled off-site by a SHU’s chosen back-end development team. 

While we love collaborating with other teams, this has previously thrown up some issues with how the HTML is used, largely down to a lack of knowledge about the intended behaviour of a component or template. 

![Screenshots of Sheffield Hallam University component library in Fractal](images/shu-design-system.jpg)

To combat this, we are introducing component specifications in [Fractal](http://fractal.build/), the tool we use to document our component libraries, helping everyone working with design system code to understand each components’ intended behaviour and thus implement it correctly. 

## What next?

We’ve just finished working with SHU to update their online prospectus. This will be released soon and includes a 100x faster course search and landing pages for their many subject areas.

![A hand holding an iPhone on a pink background. The iPhone has the Sheffield Hallam University website on it](images/iphone-mockup.jpg)

After that we’ll be working to align the rest of the primary SHU website with the design system by creating a forms API and working on the structure of the primary navigation and masthead.