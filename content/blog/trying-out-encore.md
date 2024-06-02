+++
title = "Trying out Encore"
date = 2024-06-02
updated = 2024-06-02
description = "Seems like a really relaxed approach to backend development"

[taxonomies]
tags = ["code", "typescript", "golang", "tech"]
+++

Recently, while browsing the website formerly known as Twitter, I stumbled across a new and fancy backend framework called Encore.
Usually I just throw a quick glance at posts regarding new frameworks and then move on with my day.
That's because normally projects I find this way offer one neat gimmick and then development slowly fizzles out a year after the production-ready release.
Encore seemed different though, so I took a closer look.

![The GitHub banner for Encore &copy;](/img/blog/encore_logo_gh.webp)

Apart from the marketing containing very little corpo bullshit IMO, the tech addresses some of my personal gripes with cloud infrastructure.
Having a layer of abstraction above vendor-specific cloud technologies is already a good start, but then they add a declarative way of defining the infra your application requires in code.
They already had my interest, now they have my attention.
Looking through the docs a bit more, it seemed they had all the pain-points covered.
When using the Go SDK, you're provided with _extremely_ comfortable SQL migrations powered by gorm (at least by default), a comfortable interface for caching with Redis, dependency injection with seemingly very little overhead, code-gen for API clients in TypeScript and Go as well as a few other cool features.
But at the core, the entire framework seems to be built for highly event-driven systems.
Built-in support for cron-jobs and message queues is a blessing when working on a highly reactive system.
I am currently building a version of my university's campus system on top of Encore and it's an absolute breeze.

They support deployment via Kubernetes on GCP and AWS, but I hope that they add support for non-cloud k8s clusters at some point for people like me who avoid "the cloud" like the plague. 
Their documentation also deserves praise, because it took me twenty minutes to read through the most important sections and get a good image of how everything fits together.
Good example projects right on the docs site, though a few of them seem a tad out of date, but you still get the picture when looking through them.

If you want to check it out, [visit their website](https://encore.dev).
That's all from me right now, I just wanted to fangirl about this for a minute. See ya.

