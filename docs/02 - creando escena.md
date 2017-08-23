## Creando nuestra escena

Vamos a crear nuestra primera experencia inmersiva con una imagen de 360.
En el documento que veniamos trabajando, borramos la caja y el cielo del HTML. Cambiamos la propiedad de radio de la esfera para hacerla gigante, y la movemos de manera que la camara quede dentro.

```
<a-scene>
    <a-sphere position="0 2 0" radius="5" color="#EF2D5E"></a-sphere>
    <a-camera>
    <a-cursor id="cursor"></a-cursor>
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
