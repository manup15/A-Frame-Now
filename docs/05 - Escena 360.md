## Creando una escena 360.

 En el documento trabajado, borramos la caja y creamos una escena donde el cielo (que es una esfera) mapea una imagen 360. Para esto agregamos el asset de la imagen dentro de la etiqueta <a-assets></a-assets> y luego agregamos a la etiqueta <a-sky></a-sky> un radio y un src en lugar de dar un color al cielo.

Para crear una escena 360 vamos a utilizar una imagen que será mapeada sobre una esfera en el espacio. La etiqueta <a-sky></a-sky> es una esfera en sí misma y la utilizaremos para crear la escena.
También se puede lograr el mismo efecto utilizando <a-sphere></a-sphere> en lugar de Sky.

```
<a-scene>

  <a-assets>
    <img id="imagen-cielo" src="/images/image.jpeg">
  </a-assets>

  <a-sky id="image-360" radius="10" src="#imagen-cielo"></a-sky>

  <a-camera wasd-controls-enabled="true">
    <a-cursor id="cursor">
    </a-cursor>
  </a-camera>

</a-scene>
```
ideosphere primitive plays 360° videos in the background of the scene. Videospheres are a large sphere with the video texture mapped to the inside.

Podemos tambien crear una escena que en lugar de tener una imagen tenga un video utilizando la primitiva <a-videosphere></a-videosphere>. Esta primitiva reproduce videos 360 como background. Videospheres es simplemente una esfera que mapea videos en su interior.
Entre sus atributos mas importantes se encuentran:
* autoplay (true o false).
* loop (true o false).

```
<a-scene>
  <a-assets>
    <video id="antarctica" autoplay loop="true" src="antarctica.mp4">
  </a-assets>
  <a-videosphere src="#antarctica"></a-videosphere> 
  <a-videosphere src="africa.mp4"></a-videosphere>
</a-scene>
```
