---
title: SQLite Is Probably Enough
date: 2026-04-10
author: James Osei
category: Databases
excerpt: Before you reach for Postgres, Redis, and a message queue, consider whether a single SQLite file might do the job better.
readingTime: 6
---

There is a tendency in backend development to reach immediately for a distributed database — Postgres, MySQL, a managed cloud offering — before understanding whether the problem actually requires one. Often it does not.

SQLite deserves more serious consideration than it typically receives for production workloads.

## What SQLite Actually Is

SQLite is not a toy. It is the most widely deployed database engine in the world, embedded in every iOS device, every Android device, every browser, and most operating systems. The SQLite codebase is extraordinarily well-tested: roughly 600 times more test code than production code.

It is a file-based database. The entire database — schema, data, indices — lives in a single file. Queries are executed in-process. There is no network round-trip.

## Where It Excels

**Low-concurrency workloads.** SQLite uses file-level locking. Multiple readers can operate simultaneously; writes are serialised. For applications with modest write throughput — most web applications — this is not a bottleneck.

**Latency-sensitive reads.** Without a network hop, reads are genuinely fast. A query that takes 5ms against a local Postgres instance over a socket takes microseconds against SQLite in the same process.

**Operational simplicity.** Backup is `cp`. Migrations are SQL files. Deployment is copying one file. There is no server to configure, monitor, or patch.

**Edge and embedded environments.** SQLite is the natural choice when you're running at the edge, on a user's device, or in an environment where running a server is impractical.

## The Write Ceiling

The common objection is write throughput. SQLite serialises writes, so concurrent write-heavy workloads will contend. The ceiling is real — but often misunderstood.

In WAL (Write-Ahead Logging) mode, SQLite handles around 100,000 writes per second on modest hardware. For comparison, most web applications handle a fraction of this. The write ceiling is a genuine constraint for large-scale social platforms. For the vast majority of applications, it is theoretical.

```sql
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
PRAGMA foreign_keys = ON;
```

These three pragmas cover most production use cases.

## Replication and Scale-Out

SQLite's traditional weakness was replication. This has changed. Projects like [Litestream](https://litestream.io/) provide continuous streaming replication to S3-compatible object storage. Turso and similar offerings provide distributed SQLite with replication built in.

If you outgrow a single node, these are now viable paths — rather than the full complexity of a distributed SQL database from day one.

## A Decision Framework

Before choosing a server-based database, ask:

- Will concurrent writes exceed ~10,000/second?
- Do you need built-in connection pooling across many application instances?
- Is your data inherently distributed across regions?

If the answer to all three is no, SQLite is worth serious consideration. Start simple. Scale up when you have evidence you need to.

The best database is usually the one that causes the least operational burden for your actual load. For most projects, that database is SQLite.
