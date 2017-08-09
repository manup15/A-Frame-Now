//controller to change scene.

// from scene 1 to scene 2
var teleport1 = document.getElementById("toScene2")

teleport1.addEventListener('click', function () {

  console.log("click on teleport!")
  var element = document.getElementById("image-360");
  element.setAttribute("opacity", "0")
  element = document.getElementById("image-360-2");
  element.setAttribute("opacity", "1")

  element = document.getElementById("toScene1");
  element.setAttribute("opacity", "1")
  element = document.getElementById("toScene2");
  element.setAttribute("opacity", "0")

  var element = document.getElementById("curved")
  element.setAttribute("opacity", "0")
  element = document.getElementById("plane")
  element.setAttribute("opacity", "0")
  element = document.getElementById("text")
  element.setAttribute("opacity", "0")
  element = document.getElementById("toVideo")
  element.setAttribute("opacity", "1")

})

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// from scene 2 to scene 1
var teleport2 = document.getElementById("toScene1")
teleport2.addEventListener('click', function () {
  console.log("click on teleport!")
  var element = document.getElementById("image-360")
  element.setAttribute("opacity", "1")
  element = document.getElementById("image-360-2")
  element.setAttribute("opacity", "0")

  //opacity 1 scene 1 assets
  element = document.getElementById("toScene1");
  element.setAttribute("opacity", "0")
  element = document.getElementById("toScene2");
  element.setAttribute("opacity", "1")

  element = document.getElementById("curved")
  element.setAttribute("opacity", "1")
  element = document.getElementById("plane")
  element.setAttribute("opacity", "1")
  element = document.getElementById("text")
  element.setAttribute("opacity", "1")
  element = document.getElementById("toVideo")
  element.setAttribute("opacity", "0")
});
