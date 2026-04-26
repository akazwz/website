---
title: When I Build AI Products, I Care More About the Interaction Loop
date: 2026-04-16
author: akazwz
category: AI
excerpt: The model itself matters, of course, but what usually determines the product experience is the full interaction path from input to response to the next action.
readingTime: 6
---

Over the last two years of building AI-related projects, one thing has become increasingly clear to me: what users remember in the end is usually not which model you connected, but whether the whole interaction loop feels smooth.

That is why, when I look at projects like `openchat-monorepo` and `workersai`, my attention usually does not stop at model switching or output quality alone.

## Real Experience Is a Chain

An AI product starts to feel real not because one isolated capability is described well, but because the whole chain closes properly: input, streaming response, search, voice, storage, sync, session management, and whatever action comes next.

After the user says something, does the system respond in time? Does the response stream properly? How do search results enter the conversation? Is the history stable? Does the experience continue naturally across devices? Is voice just a demo feature, or does it become a real entry point?

Taken together, those questions are the product.

## I Do Not Believe Much in Isolated AI Features

Many AI products begin by listing capabilities: how many models they support, whether they do image generation, web search, voice, or multi-device sync.

Any of those can be a selling point, but if they are not organised well together, the final experience still feels fragmented.

What matters in a sustainable AI product is not whether the feature list is long enough. It is whether those capabilities are connected into one coherent usage path.

## Engineering Structure Directly Affects Interaction Quality

That is also why I care so much about protocols, state synchronisation, storage structure, and the boundary between frontend and backend in these projects.

In `openchat-monorepo`, the multi-client setup, RPC, shared contracts, and full-stack structure are not there to make the stack look complex. They are there because once the interaction loop spans devices, sessions, and capabilities, the underlying agreements have to stay stable.

The same is true for `workersai`. Text, TTS, STT, sessions, anonymous identity, and real-time communication are not new individually, but once you connect them, the system starts to behave like a product instead of a demo.

## Users Do Not Care About Your Architecture Diagram, but They Feel It

Most users will never look closely at your protocol choices, and they do not care about the details of Durable Objects, KV, or some ORM.

But they do feel whether those structures made the product smoother. They notice if context breaks too often, if the state looks wrong after a refresh, if moving across devices means having to re-understand the system, or if voice is just a gimmick instead of a complete entry path.

That is why, when I build AI products now, I force myself to judge them from the perspective of whether the entire loop closes, not whether one isolated capability looks good in a demo.

## Models Will Change. Closed Loops Stay Valuable.

Models evolve very quickly. The capability that feels important today may become a baseline feature in a few months.

But the way a product organises interaction, turns capabilities into real workflows, and keeps feeling natural after repeated use is much harder to copy quickly.

To me, that is the part of AI products that is more worth investing in.
