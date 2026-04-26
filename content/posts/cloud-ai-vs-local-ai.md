---
title: From workersai to mlx-live, How I Think About Cloud AI and Local AI
date: 2026-04-14
author: akazwz
category: AI Systems
excerpt: Cloud and local are not about one replacing the other. They are two very different sets of product constraints, each suited to a different kind of experience.
readingTime: 6
---

In the AI-related projects I have been working on recently, there are two very different lines.

One is a more cloud-oriented path, like `workersai`, with its emphasis on public reach, unified deployment, shared capabilities, and complete online interaction. The other is a more local path, like `mlx-live`, with its emphasis on immediate voice interaction on Apple Silicon, low latency, and device-side experimentation.

Put side by side, those two directions can look like indecision. To me, they are actually answers to two completely different questions.

## The Strength of Cloud AI Is Reach and Unification

The most obvious value of a cloud approach is that it can be accessed at any time, updated centrally, serve multiple clients more easily, and manage many resources and capabilities in one place.

If you are building a real online product that needs accounts, sync, storage, search, media handling, and cross-device continuity, then the cloud is usually the more natural direction. `workersai` and `openchat-monorepo` both sit much closer to that shape of problem.

In projects like that, infrastructure is not a supporting actor. It is part of the product experience.

## The Value of Local AI Is Its Sense of Time

With a local project like `mlx-live`, the point is not “serving many people.” The point is making interaction feel immediate enough.

Browser audio capture, WebSocket transport to the backend, VAD to detect the start and end of speech, ASR transcription, model generation, TTS synthesis, and immediate interruption when the user cuts in. If you want that whole chain to stay as short as possible, local execution becomes the more honest direction.

The value of local AI is not only privacy or offline capability. More importantly, it changes the timing feel of the interaction. The system starts to feel like it is in the same room with you instead of sitting behind an obvious network delay.

## The Engineering Priorities of the Two Paths Are Completely Different

In cloud projects, I care more about identity, sessions, scalability, shared state, deployment path, and consistency across devices. Those projects are answering the question of how to exist as a product over time.

In local projects, I care more about model loading, the audio chain, interruption logic, device limits, browser capabilities, and single-machine debugging. Those projects are answering the question of how to make interaction feel genuinely real.

If you mix those two goals together, you easily end up in the worst possible state: something that looks like it is doing both, while not really doing either one well.

## I Do Not Want to Choose Sides Ideologically

Discussions around local AI and cloud AI sometimes pick up an ideological tone, as if you have to declare loyalty to one side.

From a product-building point of view, that framing is not very useful. The more important questions are still the same: what problem are you solving, what kind of experience are you trying to create, and what constraints are you willing to accept?

If the product needs to be accessed by many people, used anytime, and deployed continuously, the cloud is natural. If the goal is low latency, interruptibility, and a feeling close to device-side interaction, local is just as natural.

## The Most Important Thing Is Not to Choose the Wrong Problem

While building `workersai` and `mlx-live`, one of my biggest takeaways has not been which route is more advanced. It has been seeing more clearly how different constraints shape a product.

Put the problem in the right place and a lot of design decisions begin to converge naturally. Put it in the wrong place and the system will spend all its time fighting its own goal.

So to me, cloud AI and local AI are not opposites. They are two honest product paths with two different sets of constraints.
