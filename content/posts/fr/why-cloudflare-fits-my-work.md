---
title: Pourquoi je reviens sans cesse à Cloudflare Workers
date: 2026-04-24
author: akazwz
category: Edge
excerpt: Ce n'est pas que j'aie foi en une seule plateforme. C'est que beaucoup des produits que je construis en ce moment s'adaptent naturellement à l'edge.
readingTime: 6
---

Si l'on regarde ce que j'ai construit récemment, un schéma apparaît très vite : je continue à placer des projets sur Cloudflare.

Ce n'est ni parce que je veux tout pousser vers l'edge, ni parce que je pense que cela convient à tous les problèmes. Plus précisément, beaucoup des produits que je construis maintenant tirent des bénéfices très directs de cet environnement d'exécution.

## Beaucoup de produits ont d'abord besoin d'un chemin backend plus court, pas plus complexe

Pour beaucoup de projets personnels et de produits de petites équipes, le premier problème n'est pas une base de données trop faible ni des services insuffisamment découpés. Le premier problème est souvent un chemin de déploiement trop long, une portée globale trop faible, ou un système qui porte un poids opérationnel trop lourd dès le premier jour.

Dans ce contexte, la valeur de Cloudflare Workers est très directe pour moi : déploiement rapide, distribution naturellement mondiale, et un cadre relativement unifié pour le statique comme pour le dynamique. Beaucoup de produits publics peuvent être mis en ligne par un chemin bien plus court.

## `smail` est un exemple très typique

Des produits comme `smail` vivent naturellement au bord de l'internet. Ils doivent être accessibles rapidement, gérer l'arrivée des emails, l'accès basé sur la session, la lecture de données et le rendu des pages, tout en gardant l'ensemble du système facile à expliquer et à déployer.

Dans ce cadre, le Worker lui-même, D1, R2, et une approche de session relativement directe suffisent déjà à porter les parties vraiment importantes du produit. Ce n'est pas une victoire de l'infrastructure massive, mais de la bonne combinaison des pièces.

## `hostc` montre encore plus clairement la valeur de l'edge

Au fond, `hostc` pose une seule question : comment transformer un service local en URL publique accessible le plus vite possible ?

Ce type de problème dépend fortement du chemin réseau lui-même. Si un produit de tunnel ne peut pas être rapide, stable et naturel dans sa gestion des WebSockets, du cycle de connexion et des états d'erreur, il perd sa crédibilité dans la première minute.

Ce que Cloudflare Workers et Durable Objects apportent ici n'est pas une « architecture plus cool », mais un environnement d'exécution remarquablement bien ajusté au problème. Ils raccourcissent la partie du chemin qui compte le plus.

## Mais tout n'a pas sa place à l'edge

J'aime beaucoup la stack Cloudflare, mais je vois aussi de plus en plus clairement ses limites.

`mlx-live` est un bon contre-exemple. Le cœur de ce projet est l'interaction vocale temps réel sur Apple Silicon en local : capture audio dans le navigateur, transport WebSocket, détection des frontières de parole par VAD, transcription ASR, génération du modèle, synthèse TTS, et interruption immédiate lorsque l'utilisateur coupe la réponse. Cette chaîne ne fonctionne pleinement que lorsqu'elle reste locale.

On pourrait tenter d'emballer ce genre de projet comme un service distant, mais la faisabilité technique n'est pas le sujet. Le produit perdrait ce qui lui donne son caractère.

## Ce qui m'importe vraiment, c'est que le chemin corresponde

Je n'aime pas parler des stacks techniques comme de systèmes de croyance. Ce qui m'importe davantage, c'est de savoir si le chemin convient.

Quand un projet a besoin d'une portée globale, d'une distribution publique, et d'un chemin plus court pour le déploiement et l'exploitation, Workers devient un choix très naturel. À l'inverse, quand la valeur centrale d'un projet vient de la localité, de l'immédiateté et des capacités côté appareil, le garder en local est tout aussi naturel.

La technologie n'est pas une position. C'est plutôt un ensemble de contraintes. Choisissez bien, et le produit devient plus simple. Choisissez mal, et le produit passera sa vie à lutter contre son propre runtime.
