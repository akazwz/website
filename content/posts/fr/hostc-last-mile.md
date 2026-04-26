---
title: Ce que hostc doit vraiment résoudre, c'est le dernier kilomètre de l'expérience développeur
date: 2026-04-20
author: akazwz
category: Outils pour développeurs
excerpt: Avec un tunnel localhost, la difficulté n'est pas d'exposer un port, mais de rendre la connexion, le feedback et l'expérience de la première minute naturels.
readingTime: 6
---

Quand les gens découvrent `hostc` pour la première fois, ils le décrivent souvent comme « exposer un port local sur internet ». Cette description n'est pas fausse, mais elle est très loin de suffire.

Du point de vue de l'implémentation, construire quelque chose capable de relayer des requêtes n'est pas la partie la plus difficile. La partie qui décide réellement si l'outil paraît légitime se situe presque toujours dans le dernier kilomètre.

## L'utilisateur juge un outil de tunnel en une minute

Dans quel contexte un développeur utilise-t-il un outil de tunnel ? En général lorsqu'un service local tourne déjà et qu'il faut urgemment le montrer à quelqu'un, l'accrocher à un callback, tester avec une plateforme tierce, ou l'ouvrir sur un autre appareil.

Cela signifie qu'il n'a aucune patience. Il ne veut pas comprendre votre système. Il veut une URL publique qui fonctionne tout de suite.

Si la commande n'est pas assez directe, si l'état de connexion est flou, si les erreurs sont vagues, si le support WebSocket vacille, ou si le retour devient maladroit quand le service local tombe, l'outil paraît peu fiable dès la première minute.

## Les problèmes d'expérience se déguisent souvent en problèmes techniques

Quand on construit ce type d'outil, il est facile de concentrer toute son attention sur le protocole et sur le relais lui-même. Pourtant, beaucoup des éléments qui déterminent le plus fortement la sensation du produit sont en réalité beaucoup plus proches de l'UX.

Par exemple : comment se fait la reconnexion après une coupure, comment l'adresse du tunnel est présentée, ce que le terminal doit dire quand le service local n'est pas lancé, comment l'état reste synchronisé entre le Worker et le CLI, et ce que la page d'erreur doit expliquer à l'utilisateur.

Ces points ne ressemblent pas à de la « technologie centrale », mais ils déterminent si les gens continueront à utiliser l'outil.

## J'aime les systèmes qu'on peut expliquer vite

J'aime la structure de `hostc` : un CLI, un Cloudflare Worker, un Durable Object, et un paquet de protocole partagé. Ce n'est pas un monorepo pour faire complet. C'est un monorepo parce que ces parties ont réellement besoin de parler la même langue.

Si l'état vu par le CLI ne correspond pas à l'état que le serveur pense avoir, un outil de tunnel devient très vite difficile à déboguer. Le protocole partagé ici n'est pas de la démonstration technique. C'est une manière de réduire ce type de fracture.

## « Zero config » n'est pas qu'une formule marketing

Je reste toujours un peu prudent avec des termes comme « zero-config », parce que beaucoup de produits l'affirment alors qu'ils ne font que cacher la configuration.

Mais je pense tout de même qu'un outil de tunnel devrait s'approcher le plus possible de cette direction. Les développeurs sont déjà occupés par leurs propres services et leur logique métier. Si la couche de tunnel exige trop de compréhension supplémentaire, sa valeur diminue.

Ainsi, ce que `hostc` doit vraiment résoudre n'est pas seulement le transfert du trafic. C'est le fait de poncer toute la couche de friction autour de ce trafic.

## Un bon outil pour développeurs devrait faire penser à une étape de moins

J'aime de plus en plus les outils qui réduisent activement le coût de décision pour l'utilisateur. Non pas ceux qui prennent toutes les décisions à sa place, mais ceux qui empêchent des étapes inutilement pesantes de remonter à la surface.

Pour `hostc`, cette sensation de « une chose de moins à penser » compte peut-être davantage qu'une liste plus longue de fonctionnalités. Il se situe sur le dernier kilomètre de l'expérience développeur. Si ce dernier kilomètre reste maladroit, tout le travail d'implémentation en amont devient beaucoup plus difficile à percevoir comme précieux.
