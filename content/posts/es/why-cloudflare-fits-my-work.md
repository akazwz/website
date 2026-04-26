---
title: Por qué sigo eligiendo Cloudflare Workers
date: 2026-04-24
author: akazwz
category: Edge
excerpt: No es que tenga fe en una sola plataforma. Es que muchos de los productos que estoy construyendo ahora encajan de forma natural en el edge.
readingTime: 6
---

Si miras lo que he estado construyendo últimamente, aparece un patrón muy claro: sigo poniendo proyectos sobre Cloudflare.

No es porque quiera llevar todo al edge, ni porque piense que sirve para cualquier problema. Más exactamente, muchos de los productos que estoy construyendo ahora obtienen beneficios muy directos de este entorno de ejecución.

## Muchos productos necesitan primero un camino backend más corto, no uno más complejo

Para muchos proyectos personales y productos de equipos pequeños, el primer problema no es que la base de datos sea débil ni que los servicios no estén lo bastante separados. El primer problema suele ser que la ruta de despliegue es demasiado larga, el alcance global demasiado pobre, o que el sistema carga con demasiado peso operativo desde el primer día.

En ese contexto, el valor de Cloudflare Workers es muy directo para mí: despliegue rápido, distribución global por naturaleza y un lugar relativamente unificado para lo estático y lo dinámico. Muchos productos públicos pueden salir con una ruta mucho más corta.

## `smail` es un ejemplo muy típico

Productos como `smail` viven de forma natural en el borde de internet. Necesitan ser accesibles rápidamente, manejar la entrada del correo, el acceso por sesión, la lectura de datos y el renderizado de páginas, manteniendo al mismo tiempo el sistema fácil de explicar y fácil de desplegar.

En ese escenario, el Worker en sí, D1, R2 y una estrategia de sesión relativamente directa ya alcanzan para sostener lo verdaderamente importante del producto. No gana por infraestructura masiva, sino por lo bien que funciona la combinación.

## `hostc` muestra el valor del edge con aún más claridad

En esencia, `hostc` responde a una pregunta: ¿cómo conviertes un servicio local en una URL pública accesible lo más rápido posible?

Ese tipo de problema depende muchísimo de la propia ruta de red. Si un producto de túneles no puede ser rápido, estable y natural al manejar WebSockets, el ciclo de conexión y los estados de error, deja de ser convincente en el primer minuto.

Lo que Cloudflare Workers y Durable Objects ofrecen aquí no es una “arquitectura más cool”, sino un entorno de ejecución especialmente bien ajustado al problema. Acortan la parte del camino que más importa.

## Pero no todo debería vivir en el edge

Me gusta mucho el stack de Cloudflare, pero también tengo cada vez más claro cuáles son sus límites.

`mlx-live` es un buen contraejemplo. El núcleo de ese proyecto es la interacción de voz en tiempo real sobre Apple Silicon local: captura de audio en el navegador, transporte por WebSocket, detección de inicio y fin de voz con VAD, transcripción ASR, generación del modelo, síntesis TTS e interrupción inmediata cuando el usuario corta la respuesta. Esa cadena solo funciona como debe cuando permanece local.

Podrías intentar empaquetar algo así como servicio remoto, pero la posibilidad técnica no es el punto. El producto perdería justamente lo que le da carácter.

## Lo que de verdad me importa es si el camino encaja

No me gusta hablar de stacks como si fueran sistemas de creencias. Lo que más me importa es si el camino encaja.

Cuando un proyecto necesita alcance global, distribución pública y una ruta más corta de despliegue y operación, Workers aparece de forma natural. Cuando el valor central de un proyecto viene de la localidad, la inmediatez y la capacidad del lado del dispositivo, también resulta natural dejarlo en local.

La tecnología no es una postura. Es más bien un conjunto de restricciones. Si eliges la correcta, el producto se vuelve más simple. Si eliges mal, el producto pasa su vida peleando contra su propio runtime.
