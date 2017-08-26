#Atributos

Como todas las entidades de AFRAME son elementos HTML, vamos a manejarnos mucho atraves de atributos html de cada una para manejarnos y alterarlas.

Si vamos ahora mismo a ver el resultado en el navegador, no vamos a ver nada. La escena y la caja estan renderizadas, pero aun no tienen ninguna propiedad que haga visibles estos elementos. Agregamos entonces alguns artibutos a la caja: posicion, rotacion y color. Agregamos tambien un cielo con color. El cielo se representa con el elemento <a-sky>

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

Perfecto. Ahora ya podemos ver una caja roja bajo un cielo azul. Otra primitivas son la esfera, o <a-sphere>, la camara y el cursor.
Como el cursor representa el centro de nuestra vision, necesitamos adjuntarlo a la camara. Pero en A-Frame la camara viene agregada por defecto (no se necesitamos agregar un elemento "camara" a nuestro html para ver nuestra experiencia en el navegador). Para unir el cursor a la camara agregamos amos elementos uno dentro del otro.

```
<a-scene>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    <a-sky color="#cafefc" material="src: pen/imagen/nubes.png;"></a-sky>
    <a-sphere
        position="0 1.25 -5"
        radius="1.25"
        color="#EF2D5E"
    ></a-sphere>
    <a-camera>
        <a-cursor id="cursor"></a-cursor>
    </a-camera>
</a-scene>
```