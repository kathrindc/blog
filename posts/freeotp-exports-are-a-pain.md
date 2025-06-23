---
title: "FreeOTP exports are a pain"
date: 2023-06-06
updated: 2023-06-06
description: "Sometimes XML files contain binary data and no one knows why"
layout: "post"
tags:
  - tech
  - code
  - typescript
  - javascript
---

A couple days ago one of my mates Lukas told me about a small thing he's working on.
His university recently started requiring everyone to have 2FA set up on their accounts, which lead quite a few people to download the next best OTP authenticator from the App Store / Play Store.
One of his colleagues decided to use FreeOTP, which, at the first glance, seems reasonable, but apparently it has quite a few problems.
Therefore Lukas' colleague wanted to export all their TOTP keys out of the app and into another one.
Once they exported their keys they had an XML file, which doesn't seem that bad at first, but once you take a look inside the real fun begins.

Apparently, FreeOTP (which is [open-source](https://github.com/freeotp/freeotp-android) at least) just uses default Java serialisation to export all it's values.
The XML file was a binary-serialised version of a HashMap where the values are JSON objects that contain the cryptographic information used by each token as well as a encrypted master key that is used to encrypt the actual TOTP key data.

![A hexdump of the export file created by FreeOTP](/images/posts/otp-export-hexdump.webp)

Lukas and I kinda worked on our own little implementations over the course of three days.
Well actually, it was three evenings, since we were both busy with work and uni during the day.
Either we kept sharing technical details we figured out.

Due to the file's format, we had to implement a parser to read out the binary data inside the export file.
We quickly discovered a npm package called [java-deserialization](https://www.npmjs.com/package/java-deserialization), but it was last updated 5 years ago as well as not having types, meaning I can't use it with TypeScript.
Lukas chose to update the package and port it to modern JavaScript so he can use it with his NodeJS service, whereas I decided to only extract the required parts and rewrite them in TypeScript (available [here](https://github.com/kathrindc/freeotp-dump/blob/main/src/utils/java.ts)).

Now that we had a Parser up and running to extract the fields from the serialised HashMap, we have this nice object we can work with.

![Object structure parsed from the export file](/images/posts/parsed-otp-collection.webp)

These objects contained some encrypted values, so the next challange was to figure out how to mash the data we have into the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).
I am going to be completely honest; this API is an absolute pain in the arse, since the most common error we encountered was "Operation failed for an operation-specific reason" (ah yes, the floor is made out of floor).
So apart from these headache-inducing errors, we had to scower the JavaDocs for the cryptography classes used by FreeOTP.

The encryption works by first taking the user's passphrase and using PBKDF2 to derive a key from it.
Next you take this passphrase-key to decrypt the actual master key, which then can be used to decrypt any other token data.
It took us quite a bit of time to figure out how to extract the required data from the encryption parameters specified in the export data.
Turns out Java's crypto classes store the IV in ASN.1 format, which neither of us ever interacted with so we had to look up how it is structured.
At this point I'd like to shout out [Lapo Luchini](https://lapo.it) for making an interactive ASN.1 decoder (available [here](https://lapo.it/asn1js/)), which gives you a nice breakdown of various pieces of information contained within a given chunk of ASN.1 data.
This tool allowed us to see that there was a 12 byte long octet chunk contained in the _mParameters_ value of an encrypted key.
It took a bit of time to put one and one together and notice that the 12 byte sequence was the IV used for decryption.
The additional authentication data (AAD for short) was stored in a field that was called _mToken_ for some reason.
After figuring out all of this information we didn't have many issues decrypting the master key and from there on it was only a matter of importing the decrypted master key and using it to decrypt the actual TOTP keys.
All that was left was to encode each secret key in Base32 and build a QR code that the user can scan and I think it turned out quite well.

![Screenshot of the application's page showing the resulting QR codes](/images/posts/freeotp-dump-results.webp)

If you want to check out the source code you can view our [GitHub repo](https://github.com/kathrindc/freeotp-dump) or use the live version right [here](https://freeotp-dump.toast.ws).
