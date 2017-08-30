## Pato GO

El ejemplo mas volado de todos, pero el mas efectivo.
La idea es que con AFRAME con Camara abierta, puedan usar el cursor para "cazar" al pato que vimos antes.

El pato deberia estar "dando vueltas" aldedor nuestro y si lo llegamos "atrapar" con la mira por algunos segundos deberiamos contar nuestro puntaje.

¿Que tenemos que hacer para esto?

1) Usar Aframe + ARJS para usar camara
2) Cargar el modelo del pato.
3) Que el modelo del pato se "mueva alrededor de la camara"
4) USar el cursor y armar un evento " cada vez que se clickee el pato"

Otros chiches
Cada vez que se "golpee el pato", pueden disparar una animación especifica de trigger por evento.

Como este ejemplo donde el begin pide un evento

```
<a-entity id="fading-cube" geometry="primitive: box" material="opacity: 1">
  <a-animation attribute="material.opacity" begin="fade" to="0"></a-animation>
</a-entity>
```
y lo podemos disparar como cualquier evento js

```
document.querySelector('#fading-cube').emit('fade');
```