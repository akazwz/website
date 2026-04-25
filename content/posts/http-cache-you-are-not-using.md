---
title: The HTTP Cache You're Not Using
date: 2026-03-22
author: Elena Maris
category: Web Performance
excerpt: HTTP caching is built into the web platform and requires no dependencies. Most applications use almost none of it.
readingTime: 5
---

HTTP caching is one of the most effective performance tools available to web developers. It is built into the platform, requires no libraries, and can eliminate entire categories of latency. Most applications use almost none of it.

## The Two Caches

There are two distinct HTTP caches worth understanding.

**The browser cache** stores responses on the user's device. A resource loaded from cache costs zero network time — it doesn't even leave the machine.

**The shared cache** (CDN, reverse proxy) stores responses between the origin and many users. A resource served from a CDN edge node skips the origin entirely, regardless of whether the individual user has seen it before.

Both are controlled by the same HTTP headers.

## Cache-Control

`Cache-Control` is the primary cache directive. A few values cover most use cases:

```
Cache-Control: max-age=31536000, immutable
```

Use this for any asset with a content hash in the filename (JS bundles, images, fonts). The hash changes when content changes, so the URL is effectively immutable. The browser can cache it for a year without ever revalidating.

```
Cache-Control: no-cache
```

Counterintuitively, `no-cache` does not mean "do not cache". It means "cache, but revalidate before use". Combined with `ETag` or `Last-Modified`, this allows the browser to skip downloading the body if nothing has changed, while still checking freshness on every request.

```
Cache-Control: no-store
```

This actually prevents caching. Reserve it for responses containing sensitive data that must never be stored — authentication tokens, payment pages.

## Conditional Requests

When a cached response expires, the browser can make a conditional request — asking the server "has this changed since I last fetched it?"

The server sets `ETag: "abc123"` on the response. The browser stores it. On the next request, the browser sends `If-None-Match: "abc123"`. If the resource hasn't changed, the server responds `304 Not Modified` with no body — saving the bandwidth of retransmitting the content.

```
# First response
HTTP/1.1 200 OK
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
Cache-Control: no-cache
Content-Type: application/json

# Subsequent request
GET /api/config HTTP/1.1
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"

# Server response (no body)
HTTP/1.1 304 Not Modified
```

## Vary and CDN Caching

The `Vary` header tells caches which request headers affect the response. A common use case is content negotiation:

```
Vary: Accept-Encoding
```

This tells the CDN to store separate cached copies for compressed and uncompressed versions of the same URL. Without it, a CDN might serve a gzip-compressed response to a client that doesn't support it.

Avoid `Vary: Cookie` or `Vary: Authorization` on shared caches — these effectively disable caching for authenticated responses since every user has a different value.

## A Practical Checklist

- Static assets with hashed filenames: `max-age=31536000, immutable`
- HTML documents: `no-cache` with `ETag`
- API responses that change infrequently: `max-age=60` or `stale-while-revalidate=3600`
- Authenticated API responses: `private, no-cache`
- Responses with personal data: `no-store`

Implementing these five rules correctly will measurably improve performance for most web applications — without a single dependency.
