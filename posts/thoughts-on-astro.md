---
title: "First hands-on with Astro"
date: 2024-03-31
updated: 2024-03-31
description: "Am I out of touch? No, it must be those new-fandangled web-frameworks."
layout: "post"
tags:
  - tech
  - code
  - javascript
  - typescript
---

I recently stumbled across [Astro](https://astro.build/). A content-driven web framework that seemingly tries to drag all those old WordPress sites kicking and screaming into the 21st century.

For those who haven't heard of it, as far as I understand it, Astro offers a possibility of building mostly static sites like blogs, portfolios and business sites with modern design approaches.

Personally I think they have a pretty neat way of integrating the React way of building web pages with the concept of content-centric websites.

Back in the early 2010s, when I wanted to try a new CMS I would simply download a ZIP archive, extract it to the document root of my web server and just see how I go through things. The thing is, I can't really do this with Astro. So let's see how that goes. 

![GIF showing the creation of a new Astro project](/images/posts/astro-init.gif)
Oh damn, that was actually pretty neat. After quickly running the Astro CLI to add tailwind support using `pnpx astro add tailwind` I was basically ready to go. So I started the dev server.

Not gonna lie, it's pretty convenient to have a nice modern syntax to piece together pages from reusable components that don't require fucking about with WordPress blocks, incompatibilities due to the theme or things just breaking because you wanted two instead of three columns in the footer (looking at you Typo3).

The modularity with pre-made "features" like adding full React support and or Tailwind styling is extremely convenient. I'm still in the process of slowly learning my way through this new framework. Currently, I'm trying to port an old client's website to see how close I can get to the original.

Personally, I wouldn't mind if we could finally deprecate the old PHP-based approach to such sites.
One of the major things I'm still wrapping my head around is where and how content is stored and processed. I can definitely see the appeal of migrating a site via replacing the front-end site with an Astro-based project and continuing to write content in the WordPress back-end. Once I figured out a solid way of editing content I am definitely gonna consider using Astro in production.
