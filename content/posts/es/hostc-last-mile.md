---
title: Lo que hostc realmente tiene que resolver es la última milla de la experiencia de desarrollo
date: 2026-04-20
author: akazwz
category: Herramientas para desarrolladores
excerpt: Al construir un túnel para localhost, lo difícil no es exponer un puerto, sino hacer que la conexión, el feedback y la experiencia del primer minuto se sientan naturales.
readingTime: 6
---

Cuando la gente ve `hostc` por primera vez, suele describirlo como “sacar un puerto local a internet”. Esa descripción no es incorrecta, pero se queda muy corta.

Desde el punto de vista de la implementación, construir algo que reenvíe peticiones no es la parte más difícil. Lo que de verdad determina si la herramienta se siente legítima suele estar en la última milla.

## El usuario juzga una herramienta de túneles en un minuto

¿Cuándo usa un desarrollador una herramienta de túneles? Normalmente cuando ya tiene un servicio local corriendo y necesita enseñárselo a alguien, conectarlo a un callback, probar con una plataforma externa o abrirlo en otro dispositivo.

Eso significa que no tiene paciencia. No quiere entender tu sistema. Quiere una URL pública que funcione ya.

Si el comando no es lo bastante directo, el estado de la conexión no está claro, los errores son vagos, el soporte WebSocket falla o el feedback se vuelve torpe cuando el servicio local cae, toda la herramienta empieza a parecer poco fiable en el primer minuto.

## Los problemas de experiencia suelen disfrazarse de problemas técnicos

Cuando construyes este tipo de herramienta, es fácil centrar toda la atención en el protocolo y el reenvío en sí. Pero muchos de los puntos que más moldean la sensación de producto están mucho más cerca del UX.

Por ejemplo: cómo funciona la reconexión tras una caída, cómo se presenta la URL del túnel, qué debería decir la terminal cuando el servicio local no está disponible, cómo se mantiene sincronizado el estado entre el Worker y el CLI, y qué debería contar la página de error.

Estas cosas no parecen “tecnología central”, pero determinan si la gente sigue usando la herramienta.

## Me gustan los sistemas que se pueden explicar rápido

Me gusta la estructura de `hostc`: un CLI, un Cloudflare Worker, un Durable Object y un paquete de protocolo compartido. No es un monorepo para parecer completo. Es un monorepo porque esas partes realmente necesitan hablar el mismo idioma.

Si el estado que ve el CLI no coincide con el estado que cree tener el servidor, una herramienta de túneles se vuelve difícil de depurar muy rápido. El protocolo compartido aquí no es exhibicionismo. Es una forma de reducir esa división.

## “Zero config” no es solo una frase de marketing

Siempre soy un poco cauteloso con expresiones como “zero-config”, porque muchos productos lo dicen cuando en realidad solo están escondiendo la configuración.

Pero sí creo que una herramienta de túneles debería acercarse tanto como pueda a esa dirección. Los desarrolladores ya están ocupados con sus propios servicios y su lógica de negocio. Si la capa de túnel exige demasiada comprensión adicional, su valor baja.

Así que lo que `hostc` realmente tiene que resolver no es solo mover tráfico. Es lijar toda la capa de fricción que rodea ese tráfico.

## Una buena herramienta para desarrolladores debería hacer que la gente piense un paso menos

Cada vez me gustan más las herramientas que reducen activamente el coste de decisión del usuario. No las que toman todas las decisiones por él, sino las que impiden que los pasos innecesarios suban a la superficie.

En `hostc`, esa sensación de “una cosa menos que pensar” puede importar más que una lista más larga de funciones. Está en la última milla de la experiencia de desarrollo. Si esa última milla sigue siendo torpe, todo el trabajo de implementación anterior se siente mucho menos valioso.
