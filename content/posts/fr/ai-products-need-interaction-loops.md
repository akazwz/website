---
title: Quand je construis des produits IA, je m'intéresse davantage à la boucle d'interaction
date: 2026-04-16
author: akazwz
category: IA
excerpt: Le modèle compte, bien sûr, mais ce qui détermine le plus souvent l'expérience produit, c'est le chemin complet qui va de l'entrée à la réponse puis à l'action suivante.
readingTime: 6
---

Au cours des deux dernières années passées à construire des projets liés à l'IA, une chose est devenue de plus en plus claire pour moi : ce dont l'utilisateur se souvient à la fin n'est généralement pas le modèle que vous avez branché, mais la fluidité de toute la boucle d'interaction.

C'est pourquoi, quand je regarde des projets comme `openchat-monorepo` et `workersai`, mon attention ne s'arrête pas au changement de modèle ou à la qualité de sortie.

## L'expérience réelle est une chaîne

Un produit IA commence à paraître réel non pas parce qu'une capacité isolée est bien décrite, mais parce que toute la chaîne se ferme correctement : entrée, réponse en streaming, recherche, voix, stockage, synchronisation, gestion de session, puis l'action suivante.

Après qu'un utilisateur a dit quelque chose, le système répond-il à temps ? La réponse se diffuse-t-elle correctement ? Comment les résultats de recherche entrent-ils dans la conversation ? L'historique est-il stable ? L'expérience se poursuit-elle naturellement d'un appareil à l'autre ? La voix est-elle seulement une démonstration, ou devient-elle un véritable point d'entrée ?

Mises ensemble, ces questions forment le produit.

## Je crois peu aux fonctionnalités IA isolées

Beaucoup de produits IA commencent par lister des capacités : nombre de modèles supportés, génération d'images, recherche web, voix, ou synchronisation multi-appareils.

Chacune peut être un argument de vente, mais si elles ne sont pas bien organisées ensemble, l'expérience finale reste fragmentée.

Ce qui compte dans un produit IA durable n'est pas la longueur de la liste des fonctionnalités. C'est le fait que ces capacités soient reliées en un parcours d'usage cohérent.

## La structure d'ingénierie affecte directement la qualité de l'interaction

Voilà pourquoi je me soucie autant des protocoles, de la synchronisation d'état, de la structure de stockage et de la frontière entre frontend et backend dans ce type de projet.

Dans `openchat-monorepo`, la configuration multi-client, RPC, les contrats partagés et la structure full-stack ne sont pas là pour donner l'impression d'un stack compliqué. Ils sont là parce que, dès que la boucle d'interaction traverse appareils, sessions et capacités, les accords sous-jacents doivent rester stables.

La même logique vaut pour `workersai`. Texte, TTS, STT, sessions, identité anonyme et communication temps réel ne sont pas nouveaux séparément, mais une fois reliés, le système commence à se comporter comme un produit au lieu d'une démo.

## Les utilisateurs ne regardent pas votre schéma d'architecture, mais ils en sentent les effets

La plupart des utilisateurs n'examineront jamais vos choix de protocole et ne se soucieront pas des détails des Durable Objects, de KV ou d'un ORM.

En revanche, ils sentent si ces structures ont rendu le produit plus fluide. Ils remarquent si le contexte se casse trop souvent, si l'état semble faux après un rafraîchissement, si passer d'un appareil à l'autre oblige à réapprendre le système, ou si la voix n'est qu'un gadget au lieu d'une entrée complète.

C'est pourquoi, quand je construis des produits IA aujourd'hui, je m'oblige à les juger selon la question suivante : est-ce que toute la boucle se ferme ? Et non pas : est-ce qu'une capacité isolée a l'air impressionnante en démo ?

## Les modèles changeront. Les boucles fermées resteront précieuses.

Les modèles évoluent très vite. La capacité qui semble importante aujourd'hui peut devenir une fonctionnalité de base dans quelques mois.

Mais la manière dont un produit organise l'interaction, transforme des capacités en vrais flux, et continue à paraître naturel après plusieurs usages est beaucoup plus difficile à copier rapidement.

Pour moi, c'est là que l'investissement dans un produit IA a le plus de valeur.
