var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
var randomDiceImage = "dice"+randomNumber1+".png";
var randomimagesource = "./images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);



var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomimagesource2 = "./images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1]
image2.setAttribute("src",randomimagesource2);

if(randomNumber1>randomNumber2)
{
    var heading = document.querySelector("h1");
    heading.innerHTML="congrats Player1 wins!!!"
}
else if(randomNumber1<randomNumber2){
     var heading = document.querySelector("h1");
    heading.innerHTML="congrats Player2 wins!!!"
}
else
{
    document.querySelector("h1").innerHTML="Draw!!";
}