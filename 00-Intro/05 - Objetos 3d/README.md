## Objetos 3d

Este tutorial es una adaptación de 
https://medium.com/arjs/augmented-reality-in-10-lines-of-html-4e193ea9fdbf


Una de las mejores cosas de AFRAME es la  integracion con diferentes tecnologias.
Una de ellas es AR.JS, que permite armar experiencias de realidad aumentada desde la web.
Por ahora, AR.JS solo soporta marcadores (QR CODE) pero en un futuro cercano va a soportar Espacialidad traves de ARKIT (iOS) y Google Tango (Android).
Es importante entender como funciona, se integra para que en unos meses puedas entender para donde ir.

###Empecemos 

Primero incluimos el script de AFRAME 
```
<script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
```

Ahora agreguemos ARToolKit es una biblioteca de código abierto que utilizamos para localizar el codigo de track atraves del telefono.
```
<script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
```


Armamos luego la estructura html habitual.

En este paso, todo es como siempre. Usted define el cuerpo, como lo haría en todas las páginas HTML.

```
<body style='margin : 0px; overflow: hidden;'>
  
</body>
```

A continuación, vamos a crear nuestra escena a-frame con 2 atributos embedded y arjs para que se activen las camaras

```
<a-scene embedded arjs>
  </a-scene>

```
Ahora tenemos que relacionar nuestro codigo con QR. Sólo una simple caja
Una vez que hemos creado la escena 3d, podemos empezar a añadir objetos a ella. 
En esta línea, agregamos un cuadro simple.  Luego modificamos su material para hacerlo transparente.  También cambiamos su posición para que se muestre en la parte superior del marcador AR.

```
<a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
```

Cómo añadir la cámara AR

Lo ultimo que tenemos que hacer es definir una cámara controlada por la posición del marcador.
En este último paso, vamos a añadir una cámara. 
Incluimos el preset 'hiro' (como en Hiro) https://jeromeetienne.github.io/AR.js/data/images/HIRO.jpg. 

```
<a-marker-camera preset='hiro'></a-marker-camera>
```

Listo! 

