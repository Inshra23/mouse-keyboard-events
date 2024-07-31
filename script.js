let button = document.getElementById("btn")
// button.addEventListener("dblclick",() =>{
//     document.querySelector(".container").innerHTML = "<b>Yay you were clicked<b> Enjoy your click"
// })


//  button.addEventListener("mouseenter",() =>{
//    document.querySelector(".container").innerHTML = "<b>Yay you were clicked<b> Enjoy your click"
//  })

// button.addEventListener("mouseout",() =>{
//     document.querySelector(".container").innerHTML = "<b>Yay you were clicked<b> Enjoy your click"
// })


//   button.addEventListener("keypress",(e) =>{
//          document.querySelector(".container").innerHTML = "<b>Yay you were clicked<b> Enjoy your click"
//          console.log(e);
//      })


function myFunction(){
    let y = document.getElementById("fname")
     y.value = y.value.toLowerCase()
}


function myFunction1(){
    alert("You pressed a key inside the input field")
}


function myFunction2(){
    document.getElementById("email").innerHTML = "You pressed a key inside the input field"
    document.getElementById("email").style.color = 'blue'
}