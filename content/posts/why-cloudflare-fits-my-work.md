---
title: Why I Keep Reaching for Cloudflare Workers
date: 2026-04-24
author: akazwz
category: Edge
excerpt: It is not that I have faith in one platform. It is that many of the products I am building right now fit naturally on the edge.
readingTime: 6
---

If you look at the things I have been building recently, one pattern shows up very quickly: I keep putting projects on Cloudflare.

That is not because I want to push everything to the edge, and not because I think it fits every problem. More precisely, many of the products I am building right now get very direct benefits from this runtime.

## Many Products First Need a Shorter Backend Path, Not a More Complex One

For many personal projects and small-team products, the first problem is not that the database is too weak or the services are not split finely enough. The first problem is often that the deployment path is too long, global reach is too poor, or the system takes on too much operational weight from day one.

In that context, the value of Cloudflare Workers is very direct for me: fast deployment, naturally global distribution, and a relatively unified place for static and dynamic concerns. Many public-facing products can go live through a much shorter path.

## `smail` Is a Very Typical Example

Products like `smail` naturally live at the edge of the internet. They need to be accessed quickly, handle incoming mail, session-based access, data retrieval, and page rendering, while still keeping the whole system easy to explain and easy to deploy.

Within that setup, the Worker itself, D1, R2, and a relatively direct session approach are already enough to support the genuinely important parts of the product. It wins less by massive infrastructure and more by how usable the combination becomes.

## `hostc` Shows the Value of the Edge Even More Clearly

At its core, `hostc` is about one question: how do you turn a local service into a publicly reachable URL as quickly as possible?

That kind of problem depends heavily on the network path itself. If a tunnel product cannot be fast, stable, and natural about handling WebSockets, connection lifecycle, and error states, it stops feeling credible in the first minute.

What Cloudflare Workers and Durable Objects provide here is not a “cooler architecture,” but an execution environment that is unusually well matched to the problem. They shorten the part of the path that matters most.

## But Not Everything Belongs on the Edge

I like the Cloudflare stack a lot, but I am also getting clearer about its limits.

`mlx-live` is a good counterexample. The core of that project is real-time voice interaction on local Apple Silicon: browser audio capture, WebSocket transport, VAD-based speech boundary detection, ASR transcription, model generation, TTS synthesis, and immediate interruption when the user cuts in. That chain only really works as intended when it stays local.

You could try to package that kind of project as a remote service, but the technical possibility is not the point. The product would lose the thing that gives it its character.

## What I Actually Care About Is Whether the Path Fits

I do not like to talk about technology stacks as if they were belief systems. What matters more to me is whether the path fits.

When a project needs global reach, public distribution, and a shorter deployment and operations path, Workers come to mind very naturally. When the core value of a project comes from locality, immediacy, and device-side capability, leaving it local also comes naturally.

Technology is not a position. It is more like a set of constraints. Pick the right one and the product gets simpler. Pick the wrong one and the product spends its life fighting its own runtime.
