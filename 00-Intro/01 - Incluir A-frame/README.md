## Empezando {#empezando}

La mayor parte de Aframe esta basada en componentes y primitivas que reaccionan ante cambios en el HTML.

En esta primera parte vamos a enfocarnos en como inicializar y luego 

###¿Cómo funciona?
Estos son sólo sitios web HTML regular con "poderes 3D especiales"! 
En primer lugar, asegurate que sabes es un sitio web HTML.
Un sitio web se compone de elementos o "etiquetas". 
Estas etiquetas son como instrucciones para que su computadora dibuje la página web. 
Una etiqueta debe (normalmente) estar abierta y cerrada: <algo> </algo>. 
Las etiquetas pueden "anidar" o incluir otras etiquetas infantiles dentro de ellas.
Hay un patrón simple para los sitios web HTML. 

Entonces, lo primero que tenemos que hacer es agregar Aframe en nuestro head.

```
<script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
```

Luego vamos a agregar nuestra escena, que es el objeto raiz donde se colocaran todas las entidades de la experiencia. La representamos mediante el elemento 
<a-scene>

```
<a-scene></a-scene>
```

Agregamos una primiiva, en este caso, una caja.

```
<a-scene>
    <a-box></a-box>
</a-scene>
```


Finalmente tenemos que hacer que se vea para eso primero debemos pintarlo y luego colocar su posicion.

```
<a-scene>
    <a-box color="red" position="0 1 -2"></a-box>
</a-scene>
 ```


Para Iniciar podes incluir varias de las primitivas iniciales como 
 ```
<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
<a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
<a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
<a-sky color="#ECECEC"></a-sky>

```