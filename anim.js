const menu = document.getElementById ("menuPeque")
const fondoMenu = document.getElementById ("fondoPeque")
const toque = document.getElementById ("paraTouch")
const toque2 = document.getElementById ("paraTouch2")

function mostrarMenu () {
    menu.className = "menuP2" ;
    fondoMenu.className = "fondoMenuP2"
}

// toque.addEventListener ('touchstart' , function (event) {
//     // if (event.targetTouches.length == 1) {
//     //     var touch = event.targetTouches[0];
//         menu.className = "menuP2" ;
//         fondoMenu.className = "fondoMenuP2"
//     }
//  , false )

//  toque2.addEventListener ('touchstart' , function (event) {
//     // if (event.targetTouches.length == 1) {
//     //     var touch = event.targetTouches[0];
//         menu.className = "menuP" ;
//         fondoMenu.className = "fondoMenuP"
//     }
//  , false )