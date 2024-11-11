+++
title = "Headaches with VitaSDK"
date = 2024-11-04
updated = 2024-11-04
description = ""

[taxonomies]
tags = ["games", "tech", "homebrew", "console"]
+++

In my last post, I talked about getting PlayStation Vita for myself and initially modding it.
Now I want to write code for it, but that's turning out to be quite an adventure in it's own right.

So after initially looking up where to start on my homebrew adventure, my search engine of choice threw [VitaSDK](https://vitasdk.org/) at me.
It seemed like a solid start!
Nice landing page, what seemed like decent samples at first, library support with a custom dependency package manager, etc.
Well, it seemed nice, but after trying it out I gotta say; it's either me being stupid ( not unlikely ) or a clear lack of documentation in some areas.
With PSP homebrew it felt like the community had managed to pass a lot more information into their documentation, whereas on the Vita side of things,
it feels like more than 80% of all contents of the API doc are completely uncommented.
The samples rely quite heavily on the libraries that *have already* been ported to the Vita or just use lack comments, making them kind of difficult to use as references and
the wiki that is linked on the landing page ( [Henkaku Wiki](https://wiki.henkaku.xyz/vita/Main_Page) ) is more focused on the hardware and exploiting part than homebrew development.

Another deal-breaking factor was the fact that it didn't work properly on my MacBook Pro ( support for aarch64 hosts is seemingly broken atm ).
Someone had forked the toolchain repo to build on Apple Silicon, which was neat, but that took me a bit to get up and running too.
Weirdly enough, there also wasn't a sample that showed off any sort of 3D rendering.
I can understand that you might not want to over-do it in a quick sample for the SDK, but I just found it curious that there wasn't anything like it in there.
The only other thing I found was a Git repository called [gxmfun](https://github.com/xerpi/gxmfun), that apparently used to be part of the samples, but isn't anymore?
No idea what went on there.
It also looks like they are using a tool called `psp2cgc` to compile the shader code for their application, which seems to be part of the official Sony Vita SDK?
Maybe that's why they removed it from the SDK's samples, but I might look into obtaining that, later on down the line.
If I do find anything though, I'm not going to link it for ( in my opinion ) obvious reasons. :P

Just to clarify, I don't want to talk down / belittle any efforts made by the community to build a proper SDK for this lovely console.
I am merely speaking of my own experience with it so far.

Either way, I am going to keep looking, maybe someone posted the official docs for some sort of reference.
The Vita's graphics hardware seems like quite the adventure, which I really want to dig into.

That's about it, cya.

PS: I forgot to commit this post to the blog, so I'm pushing it now on the 11th of November. Oops.

