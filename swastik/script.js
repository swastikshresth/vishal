// document.querySelector('body').addEventListener('mousemove',eyeball);
// function eyeball(){
//     var eye= document.querySelectorAll('.eye');
//     eye.forEach(function(eye){
//         let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
//         let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
//         let radian = Math.atan2(event.pageX - x, event.pageY - y);
//         let rot = (radian * (180 / Math.PI) * -1) + 270;
//         eye.style.transform = "rotate("+ rot +"deg)";

//     })
// }

// function changeText()
// {
// 	var change=document.getElementById("b1");
// 	if(change.innerHTML=="show")
// 		change.innerHTML="hide";
// 	else
// 		change.innerHTML="show";
// }

// owl script

$('input[type="password"]').on('focus', () => {
  $('*').addClass('password');
}).on('focusout', () => {
  $('*').removeClass('password');
});;

const face = document.getElementById("face-container").style
const input = document.querySelectorAll("input")

  input[0].addEventListener("input", eyesFollow);
  input[0].addEventListener("focusout", eyeContact)
  
  function eyesFollow(e) {
    let value = 0
    value = e.target.value.length*2.15
    if(value >= 100){
      value = 100
    }
    console.log(value)
    face.setProperty('--eyesX', `${value}%`)
    face.setProperty('--eyesY', "50%")
  }
  