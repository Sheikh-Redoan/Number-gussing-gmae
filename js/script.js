let starting_div = document.querySelector('.starting_part .kakasi_div')
let start_btn = document.querySelector(".start_btn")
let first_player_div = document.querySelector('.starting_part .first_player_div')
let first_player_name_input = document.querySelector(".first_player_name_input")
let first_player_name_warning = document.querySelector(".warning_First_player_name")
let first_player_name_btn = document.querySelector(".first_player_name_btn")
let first_player_Narito_image = document.querySelector(".naruto_image")


let first_player_div_number = document.querySelector(".first_player_div_number")
let first_player_name_videw = document.querySelector(".first_player_name_videw")
let first_player_number_input = document.querySelector(".first_player_number_input")
let warning_First_player_number = document.querySelector(".warning_First_player_number")
let first_player_number_btn = document.querySelector(".first_player_number_btn")










let secound_player_div = document.querySelector('.starting_part .secound_player_div')
let secound_player_name_input = document.querySelector(".secound_player_name_input")
console.log(secound_player_name_input);

let secound_player_name_warning = document.querySelector(".warning_secound_player_name")
let secound_player_name_btn = document.querySelector(".secound_player_name_btn")
let secound_player_Narito_image = document.querySelector(".saske_image")


let secound_player_div_number = document.querySelector(".secound_player_div_number")
let secound_player_name_videw = document.querySelector(".secound_player_name_videw")
console.log(secound_player_name_videw);

let secound_player_number_input = document.querySelector(".secound_player_number_input")
let warning_secound_player_number = document.querySelector(".warning_secound_player_number")
let secound_player_number_btn = document.querySelector(".secound_player_number_btn")
let total_try = document.querySelector(".total_try")
let winner_bord = document.querySelector(".winner_bord")
let winner_name = document.querySelector(".winner_name")





start_btn.addEventListener("click", function(){
    starting_div.style.left = "500%"
    first_player_div.style.left= "50%"
})

first_player_name_btn.addEventListener("click", function() {
    
  if (first_player_name_input.value == "") {
    first_player_name_warning.innerHTML = "Please Enter your name ..."
  }else if (isNaN(first_player_name_input.value)) {
    first_player_div.style.left = "500%"
    first_player_Narito_image.src = "images/Naruto.png"
    first_player_div_number.style.left = "50%"
    
  } else{
    first_player_name_warning.innerHTML = "Enter a valid name...😒😒😒"
    first_player_Narito_image.src = "images/naruto_ff.png"
    first_player_Narito_image.style.width = "350px"
    }
})

first_player_name_videw.innerText = first_player_name_input.value;

first_player_number_btn.addEventListener("click", function () {
 
  if (first_player_number_input.value >= 0 && first_player_number_input.value <=9) {
    first_player_div_number.style.left = "500%"
    secound_player_div.style.left = "50%"
    
  }else{
    warning_First_player_number.innerHTML = "Enter a number between 0 to 9 😒😒😒"
  }


})




secound_player_name_btn.addEventListener("click", function() {
    
  if (secound_player_name_input.value == "") {
    secound_player_name_warning.innerHTML = "Please Enter your name ..."
  }else if (isNaN(secound_player_name_input.value)) {
    secound_player_div.style.left = "500%"
    secound_player_Narito_image.src = "images/Naruto.png"
    secound_player_div_number.style.left = "50%"
    
  } else{
    secound_player_name_warning.innerHTML = "Enter a valid name...😒😒😒"
    secound_player_Narito_image.style.width = "350px"
    }
})

secound_player_name_videw.innerText = secound_player_name_input.value;
let count = 5;
secound_player_number_btn.addEventListener("click", function () {
 
  if(secound_player_number_input.value <0 && secound_player_number_input.value >9){
    warning_secound_player_number.innerHTML = "Enter a number between 0 to 9 😒😒😒"
  }

  if (secound_player_number_input.value >= 0 && secound_player_number_input.value <=9) {
    count--
    total_try.innerText = count;
   if (count >=0) {
    if (secound_player_number_input.value == first_player_number_input.value) {
      winner_bord.style.left = "50%"
      secound_player_div_number.style.left="500%"
      winner_name.innerText = secound_player_name_input.value;
     }
   }else{
    winner_bord.style.left = "50%"
    secound_player_div_number.style.left="500%"
    winner_name.innerText = first_player_name_input.value;
  }
    
  }


})
