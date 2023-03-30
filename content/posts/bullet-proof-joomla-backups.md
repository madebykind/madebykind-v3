---
title: Bullet-proof Joomla! backups
categories: []
cover_img:
cover_img_alt:
date: 2010-08-16
description:
draft: false
summary: Back-ups of your site don't have to be a chore, in fact Akeeba Backup can automate everything!
tags: []
toc: false
permalink: /wrote/tutorials/bullet-proof-joomla-backups/
---

Everyone reading this should understand the importance of a good, reliable back-up. If you don't, shame on you. A good, solid back-up is your ultimate plan B, your reserve parachute.

Put simply, when everything goes horribly wrong and your site disappears (or worse, starts punting counterfeit pharmaceuticals!) a complete backup is the only way you are going to be able to get up and running again without starting from scratch.

## Enter Akeeba Backup!

I have been using first Joomlapack and then it's successor <a href="http://www.akeebabackup.com/">Akeeba Backup</a> since I first discovered it, because it does it's job incredibly well. Akeeba Backup is <a href="http://www.akeebabackup.com/general/akeeba-backup-wins-joscar-award.html">an award-winning Joomla! backup solution</a> that provides a complete backup solution, in a user-friendly format. Here's what Akeeba say about Akeeba Backup:

> It's mission is simple: create a site backup that can be restored on any Joomla!-capable server. It creates a full backup of your site in a single archive. The archive contains all the files, a database snapshot and a restoration script (derived from the standard Joomla! installer).

I use Akeeba not only for backing up my site, but for migrating sites from development to productions servers. It is simply the fastest way to move a complete site, and almost 100% foolproof. If you have been moving sites by transferring the files over FTP, and database dumping/importing then you have waaay too much free time! I want it done fast!

## I know I should backup my site, but…

The biggest problem with back-ups is actually doing them. It is all very well banging on about the importance of it, but how many of us are devoted enough to really do it every day/week/month? I know I am not, because I am basically lazy! Everyone has an excuse. This isn't a bad one, and one I have thought about using myself;

> My host does a complete back-up of my site, every day!

Mine too. There are only a couple of issues with this approach. What happens when your hosts back-up platform fails? You think they will tell you about that? Trust me, you won't know until you really need that backup and go try and find it. What about if your host suspends your account for some reason? Where's your back-up then?

## No single point of failure!

Redundant back-ups are the only really reliable way to know you have your back covered. Let your host back-up your site, but make sure you do it too! Relying on any single method risks exposing yourself to the possibility of failure, data security should follow the same principles as site security: No single point of entry or method of authentication, no matter how strong you believe it to be. Your backup strategy should be robust and multi-pronged.

## OK, Sold! How do I do it?

As I mentioned, I have been using Akeeba Backup for a long time. The *only* problem with it was not it's method of operation but mine. Creating a back-up involved:
<ol>
<li>Logging in as admin</li>
<li>Pressing 'Backup now'</li>
<li>Downloading the backup to my PC</li>
<li>Copying it to my external hard-drive</li>
</ol>

Where's the problem with that?
<ol>
<li>I am lazy and didn't do this as often as I should</li>
<li>see above</li>
<li>what if my PC is stolen or my house burns down?</li>
<li>see above (the external hard drive lives nearby!)</li>
<li>The back-up script runs at a pre-determined time every day on my hosts server.</li>
<li>Akeeba Backup Pro transfers the backup to my free Dropbox account!</li>
<li>Dropbox syncs the file to a folder on my PC.</li>
<li>My phone (which is synced to Dropbox) lets me know my site is backed up!</li>
</ol>

The solution then is pretty simple:

> Ensure that backup happens without any intervention on my part and that the backup lives on something more resilient than my own storage

## Akeeba Backup Pro to the rescue!

I recently paid to upgrade to <a href="https://www.akeebabackup.com/subscribe.html">Akeeba Backup Pro</a>, and I am really glad that I did. Akeeba Backup is an incredible tool, well thought out and well coded. Akeeba Backup Pro solves all my problems. It includes a script that can be run as a cron job, creating backups without any button pressing on my part. Nice!

That just leaves my back-up storage probem. My hosts server is possibly not much more resilient/reliable than my own machine. It could also go belly-up. What then?

Akeeba Backup Pro to the rescue! It has one stand-out, killer feature which is well worth the (minimal) EUR30 fee, all by itself :

> Akeeba Backup Pro can be automatically transfer your backup to <a href="http://aws.amazon.com/s3/">Amazon's S3</a> or <a href="http://www.dropbox.com/referrals/NTEwMTE4MTQ3OQ">Dropbox</a>'s cloud storage services.

Awesome! Here's what happens on my site now:

The net result? I am backed up, full of lovely warm feelings and have not had to lift a finger to ensure my sites are backed up. Released under GPL license, Akeeba Backup Pro can be installed on multiple domains and adapted to suit your needs.

By going Pro, as I did, you will be supporting the great work done already by the Akeeba team, as they continue to improve both the free and Pro versions of the software, giving back to a community that gives so much to us as well as ensuring you "Got Backup!". Doesn't that sound like EUR30 well spent? I think it is a bargain.

* Disclaimer - I don't have any affiliation with Akeeba and I don't get any affiliate referral fee. I just *love* their products! Thank you Akeeba Team!
