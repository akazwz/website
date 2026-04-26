---
title: De workersai a mlx-live: cómo entiendo la IA en la nube y la IA local
date: 2026-04-14
author: akazwz
category: Sistemas de IA
excerpt: Nube y local no son una cuestión de que una reemplace a la otra, sino de dos conjuntos muy distintos de restricciones de producto, cada uno adecuado para una experiencia diferente.
readingTime: 6
---

En los proyectos de IA en los que he trabajado últimamente hay dos líneas muy distintas.

Una es la vía más orientada a la nube, como `workersai`, con énfasis en alcance público, despliegue unificado, capacidades compartidas e interacción online completa. La otra es una vía más local, como `mlx-live`, centrada en interacción de voz inmediata sobre Apple Silicon, baja latencia y experimentación del lado del dispositivo.

Puestas una al lado de la otra, esas dos direcciones pueden parecer indecisión. Para mí, en realidad, son respuestas a dos preguntas completamente diferentes.

## La fuerza de la IA en la nube es el alcance y la unificación

El valor más evidente de un enfoque en la nube es que puede accederse a él en cualquier momento, actualizarse de forma centralizada, servir más fácilmente a varios clientes y gestionar muchos recursos y capacidades en un solo lugar.

Si estás construyendo un producto online real que necesita cuentas, sincronización, almacenamiento, búsqueda, manejo de medios y continuidad entre dispositivos, entonces la nube suele ser la dirección más natural. `workersai` y `openchat-monorepo` están mucho más cerca de esa forma de problema.

En proyectos así, la infraestructura no es un actor secundario. Es parte de la experiencia del producto.

## El valor de la IA local está en su sentido del tiempo

En un proyecto local como `mlx-live`, la cuestión no es “servir a mucha gente”. La cuestión es hacer que la interacción se sienta lo bastante inmediata.

Captura de audio en el navegador, transporte por WebSocket al backend, VAD para detectar el inicio y final del habla, transcripción ASR, generación del modelo, síntesis TTS e interrupción inmediata cuando el usuario corta. Si quieres que toda esa cadena sea lo más corta posible, la ejecución local se vuelve la dirección más honesta.

El valor de la IA local no es solo privacidad o modo offline. Más importante aún, cambia la sensación temporal de la interacción. El sistema empieza a sentirse en la misma habitación contigo, en lugar de detrás de una latencia de red evidente.

## Las prioridades de ingeniería de ambos caminos son completamente distintas

En proyectos en la nube me importan más la identidad, las sesiones, la escalabilidad, el estado compartido, la ruta de despliegue y la consistencia entre dispositivos. Esos proyectos responden a la pregunta de cómo existir como producto a lo largo del tiempo.

En proyectos locales me importan más la carga del modelo, la cadena de audio, la lógica de interrupción, los límites del dispositivo, las capacidades del navegador y la depuración en una sola máquina. Esos proyectos responden a la pregunta de cómo hacer que la interacción se sienta verdaderamente real.

Si mezclas esos dos objetivos, es muy fácil acabar en el peor estado posible: algo que parece hacer ambas cosas y en realidad no hace bien ninguna.

## No quiero elegir bando de forma ideológica

Las discusiones sobre IA local e IA en la nube a veces toman un tono ideológico, como si hubiera que declarar lealtad a un bando.

Desde el punto de vista de construir producto, ese marco sirve de poco. Las preguntas importantes siguen siendo las mismas: qué problema quieres resolver, qué experiencia quieres crear y qué restricciones estás dispuesto a aceptar.

Si el producto necesita ser accesible por mucha gente, usarse en cualquier momento y desplegarse continuamente, la nube es natural. Si el objetivo es baja latencia, capacidad de interrupción y una sensación cercana a la interacción del lado del dispositivo, lo local también lo es.

## Lo más importante es no elegir el problema equivocado

Mientras construía `workersai` y `mlx-live`, una de mis mayores conclusiones no fue qué camino era más avanzado, sino ver con mayor claridad cómo distintas restricciones moldean un producto.

Pon el problema en el lugar correcto y muchas decisiones de diseño convergen por sí solas. Ponlo en el lugar equivocado y el sistema pasará su tiempo peleando con su propio objetivo.

Para mí, por tanto, la IA en la nube y la IA local no son opuestas. Son dos caminos honestos de producto con restricciones distintas.
