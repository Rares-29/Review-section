var submit = document.querySelector(".Submit");
console.log(submit);
var stars;
var buttons = document.querySelectorAll(".f-btn");
for (var i = 0; i < buttons.length; i ++)
  {
    buttons[i].addEventListener("click", function(){
      stars = this.value;
      console.log(stars);
      for (let j = 0; j < buttons.length; j ++)
        buttons[j].classList.remove("active");
      this.classList.toggle("active");
    })
  }

  submit.addEventListener("click", function(){
    document.querySelector(".selector").innerHTML = "You selected " + stars + " out of 5";
    document.querySelector(".div-boss.first-div").classList.add("hidden");
    document.querySelector(".div-boss.thank-you").classList.remove("hidden");
  })
