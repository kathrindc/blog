+++
title = "Kendo Can't Do"
date = 2023-05-17
updated = 2023-05-17
description = "A tale of pure and unadulterated anger at a JavaScript library"

[taxonomies]
tags = ["tech", "code", "javascript", "work"]
+++

First things first. No hard feelings, but KendoUI (at least the jQuery version) is one of the worst libraries I ever had the displeasure of using.

I honestly cannot stand this stupid ass library anymore.
Oh, you want to re-order some rows in a grid widget?
Here's a row index that doesn't respect grouping, sorting or any other features of the widget and just doesn't work as soon as you don't have linear numeric `id` values.
Oh, you want to show group titles based on a separate data-source?
Time to preload the entire group datasource before initialising the grid, just to resolve group ids to names.
Oh, you want to have a property containing a nested object in a data item?
Time to throw random-ass errors that will take hours to debug, until you just decide to flat-out remove that nested structure.
Oh, you think that DOM elements should be initialised when the init function of a widget returns?
Well time to throw in 5 calls to `setTimeout`, because who knows when we'll feel like doing things synchronously and when we won't.

I could go on for hours about the issues KendoUI causes me at work.
But in my personal opinion, this library is beyond saving.
The creators of KendoUI (Telerik / Progress) require you to follow such a strict schema for your data models and application structure, that any sort of deviation from their standard model results in painfully bodging in fixes just to make the damn thing work.
It's gotten to the point where I had to write a wrapper library for basic functionality that should've been included from the start.
*Kathi's Instant Widget Improvements*, or KIWI for short, was created out of spite.
I **wish** I wouldn't have to write things like these, but alas this seems to be the Kendo way of building applications faster.
The library I wrote includes a couple Quality-of-Life features such as:

* Initialising grid columns or form fields from the model in a DataSource or other widgets.
* A combined FormDialog that automatically manages it's state and handles grid edit events without any issues.
* Proper fucking property serialisation options and presets (eg. customizable serialization and deserialization of `Date` objects with presets like ISO 8061. This should at least be in option in the datasources model, like come on Telerik).

These are just some examples that, at least in my opinion, should be included in Kendo out of the box.
Personally, I think that the price tag for such an outdated, unstable, inconsistent piece of software is way too high. So I decided it's time to end this stockholm-ass relationship.

![The "friendship ended with mudasir" meme edited to "friendship ended with Kendo UI"](/img/blog/friendship-ended-with-kendoui.webp)

Since my workplace is *very* strict when it comes to just bringing in random code from elsewhere, I have decided to build my own library (oh yay, yet another JavaScript library).
This new library shall be free of legacy crap that no-one in their right mind should use anymore, therefore also as lightweight and efficient as possible, using ES6 classes instead of being a jQuery plugin, and *definitely* no god damn `eval`.
I have already gotten started a bit last week and managed to get a safe templating syntax working with a rudimentary grid component.
The roadmap is to add a sort of `Remote` class later today and to port some basic features that the KIWI library implements over the next couple of days.

I'll hopefully remember to keep things up to date on here and maybe move the source over to GitHub at some point, but that's gonna be it for now.

Cheers.
