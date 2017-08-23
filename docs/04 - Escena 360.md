## Creando una escena 360.

 En el documento trabajado, borramos la caja y creamos una escena donde el cielo (que es una esfera) mapea una imagen 360. Para esto agregamos el asset de la imagen dentro de la etiqueta <a-assets></a-assets> y luego agregamos a la etiqueta <a-sky></a-sky> un radio y un src en lugar de dar un color al cielo.



```
<a-scene>

  <a-assets>
    <img id="imagen-cielo" src="/images/image.jpeg">
  </a-assets>

  <a-sky id="image-360" radius="10" src="#imagen-cielo"></a-sky>

  <!-- Camera + Cursor. -->
  <a-camera wasd-controls-enabled="true">
    <a-cursor id="cursor">

      <a-animation begin="click" easing="ease-in" attribute="scale"
                   fill="backwards" from="0.1 0.1 0.1" to="1 1 1" dur="150">
      </a-animation>

      <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
                   from="1 1 1" to="0.1 0.1 0.1" dur="1500"></a-animation>
    </a-cursor>
  </a-camera>
</a-scene>
```

Pero a pesar dentro de la esfera, podemos ver a traves de la misma, en lugar de ver su interior. Eso es porque nos falto agregar el atributo side "double", que refleja la misma textura que tiene una primitiva tanto dentro como fuera de la misma.

```
<a-scene>
    <a-sphere position="0 2 0" radius="5" material="src: pen/imagen/paisaje-360.jpg;" side="double"></a-sphere>
    <a-camera>
    <a-cursor id="cursor"></a-cursor>
  </a-camera>
</a-scene>
```

El atributo material nos permite colocar propiedades relacionadas a la textura que le aplicamos a nuestros elementos. En el ejemplo agregamos la imagen de un paisaje 360.










Agregamos una primiiva, en este caso, una caja.

```
<a-scene>
    <a-box></a-box>
</a-scene>
```

Si vemos ahora mismo a ver el resultado en el navegador, no vemos nada. La escena y la caja están renderizadas, pero aun no tienen ninguna propiedad que las haga visibles. Agregamos entonces algunos artibutos a la caja: posicion, rotacion y color. Agregamos también un cielo con color. El cielo se representa con el elemento <a-sky>

```
<a-scene>

    <a-box
        position="-1 0.5 -3"
        rotation="0 45 0"
        color="red"
    ></a-box>

    <a-sky
        color="blue"
    ></a-sky>

</a-scene>
```

Ahora podemos ver una caja roja bajo un cielo azul. Otra primitivas son la esfera, o <a-sphere>, la camara y el cursor.

El componente cursor por defecto proporciona la capacidad de "hacer clic" en las entidades posicionandose sobre las mismas con el móbil, o bien mirando una entidad y haciendo clic con el ratón en una computadora.

Para tener un cursor visible fijado a la cámara , colocamos el cursor como hijo de la cámara.

Como no definíamos específicamente una cámara, A-Frame incluía una cámara predeterminada para nosotros. Pero ya que tenemos que añadir un cursor como un niño de la cámara, vamos a necesitar ahora definir una camara  <a-camera> que contiene un cursor <a-cursor>:

```
<a-scene>
  <a-box
      position="-1 0.5 -3"
      rotation="0 45 0"
      color="red"
  ></a-box>

  <a-sky color="blue"></a-sky>

  <a-camera>
      <a-cursor id="cursor"></a-cursor>
  </a-camera>
</a-scene>
```
