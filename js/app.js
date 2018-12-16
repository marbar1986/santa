$(function() {
console.log($("audio"));
vph = $(window).height();
vpw = $(window).width();
$('.start__page').css("height",vph + "px");
$('body').css("height",vph + "px");

// MUSIC BUTTON

music_count = 0;
$(".music_settings").on("click",function(){
  if(music_count == 0){
    $(this).css("border","2px solid white");
    $(".off").css("display","none");
    $("audio")[0].play();
  music_count++
}
else{
  $(this).css("border","2px solid red");
  $(".off").css("display","block");
$("audio")[0].pause();
  music_count--
}
  })


// GAME SUCCESS

  function gameSucces(){
  var body = $("body");
  $('body').css("height",vph + "px");
var gif_santa_lose = $("<div>",{
  class:"gif_santa_lose",
})
var gif = $('<div>',{
  class:"gif",
})
var gif_cloud_text = $('<div>',{
  class:"gif_cloud_text",
})
var gif_cloud_text_content = $('<p>');
var gif_cloud = $('<div>',{
  class:"gif_cloud",
})
var gif_santa = $('<div>',{
  class:"gif_santa",
})
var gif_play_again = $("<div>",{
  html:"Od nowa",
  class:"gif_play_again",
})
body.append(gif);
gif.append(gif_cloud);
gif.append(gif_cloud_text);
gif_cloud_text.append(gif_cloud_text_content);
gif.append(gif_santa);
var gif_santa = $(".gif_santa");
var santa_text = $(".gif_cloud_text p");

function changeColor(name){
  setTimeout(function(){
    name.css("color","white");
    name.css("transition-duration","3s");
  }, 3000);
}

function animation_santa(){
  setInterval(function(){ gif_santa.css("background-image",`url("./images/santa6.png")`); }, 250);
}

 function animation2_santa(){
  setInterval(function(){ gif_santa.css("background-image",`url("./images/santa1.png")`); }, 250);
}

  setTimeout(function(){
  animation2_santa();
  },125);

  animation_santa();

function animation_santa_lose(){
  setInterval(function(){ gif_santa_lose.css("background-image",`url("./images/santa7.png")`); }, 250);
}

 function animation2_santa_lose(){
  setInterval(function(){ gif_santa_lose.css("background-image",`url("./images/santa8.png")`); }, 250);
}



// var gif_santa_text = [""];
var gif_santa_text = ["Nie wierzę, że ci się udało", "Jak mogłeś mi to zrobić ?", "Gdzie ja teraz znajdę pracę?","Ale pewnie co cię to obchodzi","W takim razie proszę masz mój strój","Rudolf z saniami stoi pod domem",""];

function santa_gif(index) {
  setTimeout(function() {
    santa_text.text(gif_santa_text[index]);
    if(index == 0){
        changeColor(santa_text);
        santa_text.css("transition-duration","3s");
        santa_text.css("color","black");
      }
    if(index == 1){
        changeColor(santa_text);
        santa_text.css("transition-duration","3s");
        santa_text.css("color","black");
      }
    if(index == 2){
        changeColor(santa_text);
        santa_text.css("transition-duration","3s");
        santa_text.css("color","black");
      }
    if(index == 3){
        changeColor(santa_text);
        santa_text.css("transition-duration","3s");
        santa_text.css("color","black");
      }
    if(index == 4){
        changeColor(santa_text);
        santa_text.css("transition-duration","3s");
        santa_text.css("color","black");
      }
    if(index == 5){
        changeColor(santa_text);
        santa_text.css("transition-duration","3s");
        santa_text.css("color","black");
      }
    if(index == 6){
        $('.gif_cloud').remove();
        gif_santa.remove();
        $(".gif").append(gif_santa_lose);
        setTimeout(function(){
        animation2_santa_lose();
        $("body").append(gif_play_again);
        gif_play_again.on("click",function(){
          location.reload();
        })
        },125);

        animation_santa_lose();
      }
              }, index * 6000);
            }

            var index;
            for (index = 0; index < gif_santa_text.length; ++index) {
              santa_gif(index)
            }
}

  // all elements


  var numbers_of_gift = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
  var want_gift = ["wóz strażacki","koparkę","konia na biegunach","misia","różowego kucyka","kostkę rubika","piłkę plażową","bumerang","balona","klocki z literkami","domek","robota","gameboya","ludzika lego","cymbałki","smoczek","yo-yo","butelkę ze smoczkiem","pada do konsoli","pistolet flasha","deskorolkę","łopatkę","bączka","procę","żołnierzyka","samochodzik","piłkę do koszykówki","rower","samolocik"];
var body = $("body");
var start = $(".start__page");
var slider = $(".slider p");
var slider_all = $(".slider");
var santa = $(".santa_picture");
if(vpw < 700){
  slider_all.css("background-image",`url("./images/cloud6.png")`);
}
if(vpw < 400 ){
  slider_all.css("background-image",`url("./images/cloud7.png")`);
}
var slider_start_game_button = $("<div>",{
  class:"start__button",
  html:"►",
})
var slider_start_game_content = $("<div>",{
  class:"start__button__content",
  html:"Start",
})
var correct =$('<div>',{
  class:"correct",
  html:"Jesli zabawka ma zieloną ramkę to już została oddana w dobre ręce :)",
})

var success_level_cloud = $("<img>",{
  class:"success_level_cloud",
  src:"./images/cloud5.png",
})
var success_level_cloud_text = $("<p>",{
  class:"success_level_cloud_text",
  html:"Hmmm... Tym razem ci się udało, zobaczymy jak ci pójdzię kiedy będzię więcej dzieci !!",
})
var success_level2_cloud_text = $("<p>",{
  class:"success_level2_cloud_text",
  html:"Ooo.. znowu ci się udało, nie ciesz się tak w nastepnej rundzie będzie trudniej Hehe !!",
})
var success_level_picture = $("<img>",{
  class:"success_level_picture",
  src:"./images/santa5.png",
})
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
shuffle(numbers_of_gift);
function animation(){
  setInterval(function(){ santa.css("background-image",`url("./images/santa1.png")`); }, 250);
}

function animation2(){
  setInterval(function(){ santa.css("background-image",`url("./images/santa6.png")`); }, 250);
}
function changeColor(name){
  setTimeout(function(){
    name.css("color","black");
    name.css("transition-duration","3s");
  }, 3000);
}
function changeColorLevels(name){
  setTimeout(function(){
    name.css("color","transparent");
    name.css("transition-duration","3s");
  }, 3000);
}
// var slider_elements = [""];
var slider_elements = ["Czy chciałbyś zastąpić mnie w roli mikołaja ?","Pewnie myslisz ze to jest proste ?", " Tak ! Myślisz, że sobie poradzisz ?", "A jak u ciebie z pamięcią?", "Jeszcze tu jesteś ?","W porzadku, sprawdź się !",""];


function sliderStartPage(index) {
  setTimeout(function() {
    slider.text(slider_elements[index]);
    if(index == 0){
        changeColor(slider);
        slider.css("transition-duration","3s");
        slider.css("color","white");
      }
      if(index == 1){
          changeColor(slider);
          slider.css("transition-duration","3s");
          slider.css("color","white");
        }
        if(index == 2){
            changeColor(slider);
            slider.css("transition-duration","3s");
            slider.css("color","white");
          }
          if(index == 3){
              changeColor(slider);
              slider.css("transition-duration","3s");
              slider.css("color","white");
            }
            if(index == 4){
                changeColor(slider);
                slider.css("transition-duration","3s");
                slider.css("color","white");
              }
              if(index == 5){
                  changeColor(slider);
                  slider.css("transition-duration","3s");
                  slider.css("color","white");
                }
                if(index==6){
                  slider_all.remove();
                  santa.remove();
                  start.append(slider_start_game_button);
                  start.append(slider_start_game_content);
                  slider_start_game_button.on("click",function(){
                    levels();
                  })
                }
              }, index * 6000);
            }

            var index;
            for (index = 0; index < slider_elements.length; ++index) {
              sliderStartPage(index)
            }

            animation();
            setTimeout(function(){
              animation2();
            },125);

//elements level1

var slider_level_1 = ["Za chwilę zobaczysz czworo dzieci, które przedstawią swoje żądania", "Będziez miał 3 sekundy na zapamiętanie każdego z nich " , "Jak tylko będziesz gotów ;)" ,""];
// var slider_level_1 = [""];

var child_level1_array = [];

child_level1_array.push("child1.printOne()");
child_level1_array.push("child2.printOne()");
child_level1_array.push("child3.printOne()");
child_level1_array.push("child4.printOne()");

var gift_print_level1 = [];

gift_print_level1.push("child1.printGift()");
gift_print_level1.push("child2.printGift()");
gift_print_level1.push("child3.printGift()");
gift_print_level1.push("child4.printGift()");

shuffle(gift_print_level1);
shuffle(child_level1_array);

//elements level2

// var slider_level_2 = [""];
var slider_level_2 = ["Myślisz, że jesteś taki dobry ? ","Pierwsza runda to był pikuś haha","Zobaczymy jak poradzisz sobie teraz","zasady te same, tylko teraz zobaczysz ośmiorgo dzieci", "Zabawe czas zacząć !!",""];

var child_level2_array = [];

child_level2_array.push("child5.printOne()");
child_level2_array.push("child6.printOne()");
child_level2_array.push("child7.printOne()");
child_level2_array.push("child8.printOne()");
child_level2_array.push("child9.printOne()");
child_level2_array.push("child10.printOne()");
child_level2_array.push("child11.printOne()");
child_level2_array.push("child12.printOne()");
var gift_print_level2 = [];

gift_print_level2.push("child5.printGift()");
gift_print_level2.push("child6.printGift()");
gift_print_level2.push("child7.printGift()");
gift_print_level2.push("child8.printGift()");
gift_print_level2.push("child9.printGift()");
gift_print_level2.push("child10.printGift()");
gift_print_level2.push("child11.printGift()");
gift_print_level2.push("child12.printGift()");

shuffle(gift_print_level2);
shuffle(child_level2_array);

//elements level3

var slider_level_3 = ["hoho jestem w szoku, że udało ci się dotrzeć, aż tutaj","Może cię trochę niedoceniłem...","Ale jakie to ma znaczenie skoro tutaj i tak polegniesz ;)","W finałowej rundzie swoje żadania przedstawi szesnaściorgo dzieci", "Hehe i co załamany ?","Jeśli ci się uda oddam ci moją pracę", "Nie żartuję zostaniesz świętym mikołajem !", "Zaczynajmy","" ];

// var slider_level_3  = [''];

var child_level3_array = [];

child_level3_array.push("child13.printOne()");
child_level3_array.push("child14.printOne()");
child_level3_array.push("child15.printOne()");
child_level3_array.push("child16.printOne()");
child_level3_array.push("child17.printOne()");
child_level3_array.push("child18.printOne()");
child_level3_array.push("child19.printOne()");
child_level3_array.push("child20.printOne()");
child_level3_array.push("child21.printOne()");
child_level3_array.push("child22.printOne()");
child_level3_array.push("child23.printOne()");
child_level3_array.push("child24.printOne()");
child_level3_array.push("child25.printOne()");
child_level3_array.push("child26.printOne()");
child_level3_array.push("child27.printOne()");
child_level3_array.push("child28.printOne()");

var gift_print_level3 = [];

gift_print_level3.push("child13.printGift()");
gift_print_level3.push("child14.printGift()");
gift_print_level3.push("child15.printGift()");
gift_print_level3.push("child16.printGift()");
gift_print_level3.push("child17.printGift()");
gift_print_level3.push("child18.printGift()");
gift_print_level3.push("child19.printGift()");
gift_print_level3.push("child20.printGift()");
gift_print_level3.push("child21.printGift()");
gift_print_level3.push("child22.printGift()");
gift_print_level3.push("child23.printGift()");
gift_print_level3.push("child24.printGift()");
gift_print_level3.push("child25.printGift()");
gift_print_level3.push("child26.printGift()");
gift_print_level3.push("child27.printGift()");
gift_print_level3.push("child28.printGift()");

shuffle(gift_print_level3);
shuffle(child_level3_array);


function levels(){
  start.remove();
  var levels = $("<div>",{
    class:"levels__page",
  })
  var levels__background = $("<div>",{
    class:"snow_efects",
  })
  body.append(levels);
  $(".levels__page").css("height",vph + "px");
  levels.append(levels__background);
  $(".snow_efects").css("height",vph + "px");
  body.addClass("level1");
if(body.hasClass("level1") === true){

  //level1


  var slider_level1 = $('<div>',{
    class:"slider__level1",
  })
  var slider_level1_text = $('<p>');
  $(".snow_efects").append(slider_level1);
  slider_level1.append(slider_level1_text);
  var level1_slider = $(".slider__level1 p");

  function start_level1(index) {
    setTimeout(function() {
       level1_slider.text(slider_level_1[index]);

       if(index == 0){
         changeColorLevels(level1_slider);
         level1_slider.css("transition-duration","3s");
         level1_slider.css("color","black");
       }
       if(index == 1){
         changeColorLevels(level1_slider);
         level1_slider.css("transition-duration","3s");
         level1_slider.css("color","black");
       }
       if(index == 2){
         changeColorLevels(level1_slider);
         level1_slider.css("transition-duration","3s");
         level1_slider.css("color","black");
       }
       if(index == 3){
         slider_level1.remove();
         levels.append(slider_start_game_button);
         levels__background.append(slider_start_game_content);
         slider_start_game_button.on("click",function(){
           slider_start_game_button.remove();
           slider_start_game_content.remove();
           slider_level1.remove();
           function level1(){
             var child1 = new Child(1,Number(numbers_of_gift[0]),"Ja chcę " + want_gift[Number(numbers_of_gift[0])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child2 = new Child(2,Number(numbers_of_gift[1]),"Ja chcę " + want_gift[Number(numbers_of_gift[1])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child3 = new Child(3,Number(numbers_of_gift[2]),"Ja chcę " + want_gift[Number(numbers_of_gift[2])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child4 = new Child(4,Number(numbers_of_gift[3]),"Ja chcę " + want_gift[Number(numbers_of_gift[3])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child_print_level1= ["child1.print()","child2.print()","child3.print()","child4.print()"];
             function start_level1_print(index) {
               setTimeout(function() {
                 eval(child_print_level1[index]);
                 if(index == 0){

                        }
                 if(index == 1){
                   $('.child1').remove();
                        }
                 if(index == 2){
                   $('.child2').remove();
                        }
                 if(index == 3){
                   $('.child3').remove();
                        }
               },index * 3000)
             }

             var index;
             for (index = 0; index < child_print_level1.length; ++index) {
                 start_level1_print(index)
             }
           }
           level1()

           setTimeout(function() {
             $('.child4').remove();
             var child1 = new Child(1,Number(numbers_of_gift[0]),"Ja chcę " + want_gift[Number(numbers_of_gift[0])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child2 = new Child(2,Number(numbers_of_gift[1]),"Ja chcę " + want_gift[Number(numbers_of_gift[0])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child3 = new Child(3,Number(numbers_of_gift[2]),"Ja chcę " + want_gift[Number(numbers_of_gift[0])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child4 = new Child(4,Number(numbers_of_gift[3]),"Ja chcę " + want_gift[Number(numbers_of_gift[0])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             eval(gift_print_level1[0]);
             eval(gift_print_level1[1]);
             eval(gift_print_level1[2]);
             eval(gift_print_level1[3]);
             $(".child_gift_choice").css("margin-left","12%");
             eval(child_level1_array[0]);
             var count = 0;
             $(".snow_efects").append(correct);
             $(".child_gift_choice").on("click",function(){
               if($(this).attr("data-number") == $(".search").attr("data-number") ){
                 $(this).css("border","5px solid green");
                 $(this).off('click');
                 $(".search").remove();
                 count++;
                 eval(child_level1_array[count]);
                 if(count === 4){
                   $(".child_gift_choice").remove();
                   correct.remove();
                   $(".snow_efects").append(success_level_picture);
                   $(".snow_efects").append(success_level_cloud);
                   $(".snow_efects").append(success_level_cloud_text);
                   setTimeout(function() {
                     success_level_picture.remove();
                     success_level_cloud_text.remove();
                     success_level_cloud.remove();
                     levels.append(slider_start_game_button);
                     levels.append(slider_start_game_content);
                     slider_start_game_button.on("click",function(){
                       slider_start_game_content.remove();
                       slider_start_game_button.remove();
                       level_2();
                     })
                   },7000)
                 }
               }
               else{
                 $(".levels__page").remove();
                 $("body").addClass("bg_game_over");
                var game_over = $('<div>',{
                  class:"game_over",
                  html:"Buuu nie udało się hahahaha, spróbuj jeszcze raz :)",
                })
                var game_over_pic = $('<img>',{
                  class:"game_over_pic",
                  src:`./images/santa4.png`,
                })
                body.append(game_over);
                body.append(game_over_pic);
                body.append(slider_start_game_button);
                slider_start_game_button.css("top","70%");
                slider_start_game_button.on("click",function(){
                  location.reload();
                })
               }
             })
           },12000)



         })
       }
     }, index * 6000);
  }

  var index;
  for (index = 0; index < slider_level_1.length; ++index) {
      start_level1(index)
  }

}

}

//LEVEL2

function level_2(){

  var levels = $("<div>",{
    class:"levels__page",
  })
  var levels__background = $("<div>",{
    class:"snow_efects",
  })
  var slider_level2 = $('<div>',{
    class:"slider__level2",
  })
  var slider_level2_text = $('<p>');

  body.addClass("level1");
  $(".snow_efects").append(slider_level2);
  slider_level2.append(slider_level2_text);
  var level2_slider = $(".slider__level2 p");

  function start_level2(index) {
    setTimeout(function() {
       level2_slider.text(slider_level_2[index]);

       if(index == 0){
         changeColorLevels(level2_slider);
         level2_slider.css("transition-duration","3s");
         level2_slider.css("color","black");
       }
       if(index == 1){
         changeColorLevels(level2_slider);
         level2_slider.css("transition-duration","3s");
         level2_slider.css("color","black");
       }
       if(index == 2){
         changeColorLevels(level2_slider);
         level2_slider.css("transition-duration","3s");
         level2_slider.css("color","black");
       }
       if(index == 3){
         changeColorLevels(level2_slider);
         level2_slider.css("transition-duration","3s");
         level2_slider.css("color","black");
       }
       if(index == 4){
         changeColorLevels(level2_slider);
         level2_slider.css("transition-duration","3s");
         level2_slider.css("color","black");
       }
       if(index == 5){
         slider_level2.remove();
         $(".snow_efects").append(slider_start_game_button);
         $(".snow_efects").append(slider_start_game_content);
         slider_start_game_button.on("click",function(){
           slider_start_game_button.remove();
           slider_start_game_content.remove();
           slider_level2.remove();
           function level2(){
             var child5 = new Child(5,Number(numbers_of_gift[4]),"Ja chcę " + want_gift[Number(numbers_of_gift[4])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child6 = new Child(6,Number(numbers_of_gift[5]),"Ja chcę " + want_gift[Number(numbers_of_gift[5])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child7 = new Child(7,Number(numbers_of_gift[6]),"Ja chcę " + want_gift[Number(numbers_of_gift[6])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child8 = new Child(8,Number(numbers_of_gift[7]),"Ja chcę " + want_gift[Number(numbers_of_gift[7])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child9 = new Child(9,Number(numbers_of_gift[8]),"Ja chcę " + want_gift[Number(numbers_of_gift[8])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child10 = new Child(10,Number(numbers_of_gift[9]),"Ja chcę " + want_gift[Number(numbers_of_gift[9])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child11 = new Child(11,Number(numbers_of_gift[10]),"Ja chcę " + want_gift[Number(numbers_of_gift[10])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child12 = new Child(12,Number(numbers_of_gift[11]),"Ja chcę " + want_gift[Number(numbers_of_gift[11])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child_print_level2= ["child5.print()","child6.print()","child7.print()","child8.print()","child9.print()","child10.print()","child11.print()","child12.print()"];
             function start_level2_print(index) {
               setTimeout(function() {
                 eval(child_print_level2[index]);
                 if(index == 0){

                        }
                 if(index == 1){
                   $('.child5').remove();
                        }
                 if(index == 2){
                   $('.child6').remove();
                        }
                 if(index == 3){
                   $('.child7').remove();
                        }
                 if(index == 4){
                   $('.child8').remove();
                        }
                 if(index == 5){
                   $('.child9').remove();
                        }
                 if(index == 6){
                   $('.child10').remove();
                        }
                 if(index == 7){
                   $('.child11').remove();
                        }
               },index * 3000)
             }

             var index;
             for (index = 0; index < child_print_level2.length; ++index) {
                 start_level2_print(index)
             }
           }
           level2()

           setTimeout(function() {
             $('.child12').remove();
             var child5 = new Child(5,Number(numbers_of_gift[4]),"Ja chcę " + want_gift[Number(numbers_of_gift[4])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child6 = new Child(6,Number(numbers_of_gift[5]),"Ja chcę " + want_gift[Number(numbers_of_gift[5])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child7 = new Child(7,Number(numbers_of_gift[6]),"Ja chcę " + want_gift[Number(numbers_of_gift[6])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child8 = new Child(8,Number(numbers_of_gift[7]),"Ja chcę " + want_gift[Number(numbers_of_gift[7])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child9 = new Child(9,Number(numbers_of_gift[8]),"Ja chcę " + want_gift[Number(numbers_of_gift[8])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child10 = new Child(10,Number(numbers_of_gift[9]),"Ja chcę " + want_gift[Number(numbers_of_gift[9])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child11 = new Child(11,Number(numbers_of_gift[10]),"Ja chcę " + want_gift[Number(numbers_of_gift[10])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child12 = new Child(12,Number(numbers_of_gift[11]),"Ja chcę " + want_gift[Number(numbers_of_gift[11])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             eval(gift_print_level2[0]);
             eval(gift_print_level2[1]);
             eval(gift_print_level2[2]);
             eval(gift_print_level2[3]);
             eval(gift_print_level2[4]);
             eval(gift_print_level2[5]);
             eval(gift_print_level2[6]);
             eval(gift_print_level2[7]);
             eval(child_level2_array[0]);
             $(".child_gift_choice").css("margin-left","3.8%");
             var count = 0;
             $(".snow_efects").append(correct);
             $(".child_gift_choice").on("click",function(){
               if($(this).attr("data-number") == $(".search").attr("data-number") ){
                 $(this).css("border","5px solid green");
                 $(this).off('click');
                 $(".search").remove();
                 count++;
                 eval(child_level2_array[count]);
                 if(count === 8){
                   $(".child_gift_choice").remove();
                   correct.remove();
                   $(".snow_efects").append(success_level_picture);
                   $(".snow_efects").append(success_level_cloud);
                   $(".snow_efects").append(success_level2_cloud_text);
                   setTimeout(function() {
                     success_level_picture.remove();
                     success_level2_cloud_text.remove();
                     success_level_cloud.remove();
                     $(".snow_efects").append(slider_start_game_button);
                     $(".snow_efects").append(slider_start_game_content);
                     slider_start_game_button.on("click",function(){
                       slider_start_game_content.remove();
                       slider_start_game_button.remove();
                       level_3();
                     })
                   },7000)
                 }
               }
               else{
                 $(".levels__page").remove();
                 $("body").addClass("bg_game_over");
                var game_over = $('<div>',{
                  class:"game_over",
                  html:"Buuu nie udało się hahahaha, spróbuj jeszcze raz :)",
                })
                var game_over_pic = $('<img>',{
                  class:"game_over_pic",
                  src:`./images/santa4.png`,
                })
                body.append(game_over);
                body.append(game_over_pic);
                body.append(slider_start_game_button);
                slider_start_game_button.css("top","70%");
                slider_start_game_button.on("click",function(){
                  location.reload();
                })
               }
             })
           },24000)


         })
       }
     }, index * 6000);
  }

  var index;
  for (index = 0; index < slider_level_2.length; ++index) {
      start_level2(index)
  }

}

//LEVEL3

function level_3(){

  var levels = $("<div>",{
    class:"levels__page",
  })
  var levels__background = $("<div>",{
    class:"snow_efects",
  })
  var slider_level3 = $('<div>',{
    class:"slider__level3",
  })
  var slider_level3_text = $('<p>');

  $(".snow_efects").append(slider_level3);
  slider_level3.append(slider_level3_text);
  var level3_slider = $(".slider__level3 p");

  function start_level3(index) {
    setTimeout(function() {
       level3_slider.text(slider_level_3[index]);

       if(index == 0){
         changeColorLevels(level3_slider);
         level3_slider.css("transition-duration","3s");
         level3_slider.css("color","black");
       }
       if(index == 1){
         changeColorLevels(level3_slider);
         level3_slider.css("transition-duration","3s");
         level3_slider.css("color","black");
       }
       if(index == 2){
         changeColorLevels(level3_slider);
         level3_slider.css("transition-duration","3s");
         level3_slider.css("color","black");
       }
       if(index == 3){
         changeColorLevels(level3_slider);
         level3_slider.css("transition-duration","3s");
         level3_slider.css("color","black");
       }
       if(index == 4){
         changeColorLevels(level3_slider);
         level3_slider.css("transition-duration","3s");
         level3_slider.css("color","black");
       }
       if(index == 5){
         changeColorLevels(level3_slider);
         level3_slider.css("transition-duration","3s");
         level3_slider.css("color","black");
       }
       if(index == 6){
         changeColorLevels(level3_slider);
         level3_slider.css("transition-duration","3s");
         level3_slider.css("color","black");
       }
       if(index == 7){
         changeColorLevels(level3_slider);
         level3_slider.css("transition-duration","3s");
         level3_slider.css("color","black");
       }
       if(index == 8){
         slider_level3.remove();
         $(".snow_efects").append(slider_start_game_button);
         $(".snow_efects").append(slider_start_game_content);
         slider_start_game_button.on("click",function(){
           slider_start_game_button.remove();
           slider_start_game_content.remove();
           slider_level3.remove();
           function level3(){
             var child13 = new Child(13,Number(numbers_of_gift[12]),"Ja chcę " + want_gift[Number(numbers_of_gift[12])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child14 = new Child(14,Number(numbers_of_gift[13]),"Ja chcę " + want_gift[Number(numbers_of_gift[13])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child15 = new Child(15,Number(numbers_of_gift[14]),"Ja chcę " + want_gift[Number(numbers_of_gift[14])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child16 = new Child(16,Number(numbers_of_gift[15]),"Ja chcę " + want_gift[Number(numbers_of_gift[15])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child17 = new Child(17,Number(numbers_of_gift[16]),"Ja chcę " + want_gift[Number(numbers_of_gift[16])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child18 = new Child(18,Number(numbers_of_gift[17]),"Ja chcę " + want_gift[Number(numbers_of_gift[17])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child19 = new Child(19,Number(numbers_of_gift[18]),"Ja chcę " + want_gift[Number(numbers_of_gift[18])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child20 = new Child(20,Number(numbers_of_gift[19]),"Ja chcę " + want_gift[Number(numbers_of_gift[19])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child21 = new Child(21,Number(numbers_of_gift[20]),"Ja chcę " + want_gift[Number(numbers_of_gift[20])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child22 = new Child(22,Number(numbers_of_gift[21]),"Ja chcę " + want_gift[Number(numbers_of_gift[21])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child23 = new Child(23,Number(numbers_of_gift[22]),"Ja chcę " + want_gift[Number(numbers_of_gift[22])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child24 = new Child(24,Number(numbers_of_gift[23]),"Ja chcę " + want_gift[Number(numbers_of_gift[23])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child25 = new Child(25,Number(numbers_of_gift[24]),"Ja chcę " + want_gift[Number(numbers_of_gift[24])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child26 = new Child(26,Number(numbers_of_gift[25]),"Ja chcę " + want_gift[Number(numbers_of_gift[25])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child27 = new Child(27,Number(numbers_of_gift[26]),"Ja chcę " + want_gift[Number(numbers_of_gift[26])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child28 = new Child(28,Number(numbers_of_gift[27]),"Ja chcę " + want_gift[Number(numbers_of_gift[27])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child_print_level3= ["child13.print()","child14.print()","child15.print()","child16.print()","child17.print()","child18.print()","child19.print()","child20.print()","child21.print()","child22.print()","child23.print()","child24.print()","child25.print()","child26.print()","child27.print()","child28.print()"];
             function start_level3_print(index) {
               setTimeout(function() {
                 eval(child_print_level3[index]);
                 if(index == 0){

                        }
                 if(index == 1){
                   $('.child13').remove();
                        }
                 if(index == 2){
                   $('.child14').remove();
                        }
                 if(index == 3){
                   $('.child15').remove();
                        }
                 if(index == 4){
                   $('.child16').remove();
                        }
                 if(index == 5){
                   $('.child17').remove();
                        }
                 if(index == 6){
                   $('.child18').remove();
                        }
                 if(index == 7){
                   $('.child19').remove();
                        }
                 if(index == 8){
                   $('.child20').remove();
                        }
                 if(index == 9){
                   $('.child21').remove();
                        }
                 if(index == 10){
                   $('.child22').remove();
                        }
                 if(index == 11){
                   $('.child23').remove();
                        }
                 if(index == 12){
                   $('.child24').remove();
                        }
                 if(index == 13){
                   $('.child25').remove();
                        }
                 if(index == 14){
                   $('.child26').remove();
                        }
                 if(index == 15){
                   $('.child27').remove();
                        }
               },index * 3000)
             }

             var index;
             for (index = 0; index < child_print_level3.length; ++index) {
                 start_level3_print(index)
             }
           }
           level3()

           setTimeout(function() {
             $('.child28').remove();
             var child13 = new Child(13,Number(numbers_of_gift[12]),"Ja chcę " + want_gift[Number(numbers_of_gift[12])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child14 = new Child(14,Number(numbers_of_gift[13]),"Ja chcę " + want_gift[Number(numbers_of_gift[13])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child15 = new Child(15,Number(numbers_of_gift[14]),"Ja chcę " + want_gift[Number(numbers_of_gift[14])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child16 = new Child(16,Number(numbers_of_gift[15]),"Ja chcę " + want_gift[Number(numbers_of_gift[15])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child17 = new Child(17,Number(numbers_of_gift[16]),"Ja chcę " + want_gift[Number(numbers_of_gift[16])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child18 = new Child(18,Number(numbers_of_gift[17]),"Ja chcę " + want_gift[Number(numbers_of_gift[17])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child19 = new Child(19,Number(numbers_of_gift[18]),"Ja chcę " + want_gift[Number(numbers_of_gift[18])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child20 = new Child(20,Number(numbers_of_gift[19]),"Ja chcę " + want_gift[Number(numbers_of_gift[19])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child21 = new Child(21,Number(numbers_of_gift[20]),"Ja chcę " + want_gift[Number(numbers_of_gift[20])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child22 = new Child(22,Number(numbers_of_gift[21]),"Ja chcę " + want_gift[Number(numbers_of_gift[21])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child23 = new Child(23,Number(numbers_of_gift[22]),"Ja chcę " + want_gift[Number(numbers_of_gift[22])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child24 = new Child(24,Number(numbers_of_gift[23]),"Ja chcę " + want_gift[Number(numbers_of_gift[23])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child25 = new Child(25,Number(numbers_of_gift[24]),"Ja chcę " + want_gift[Number(numbers_of_gift[24])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child26 = new Child(26,Number(numbers_of_gift[25]),"Ja chcę " + want_gift[Number(numbers_of_gift[25])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child27 = new Child(27,Number(numbers_of_gift[26]),"Ja chcę " + want_gift[Number(numbers_of_gift[26])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             var child28 = new Child(28,Number(numbers_of_gift[27]),"Ja chcę " + want_gift[Number(numbers_of_gift[27])-1],"Poproszę o swój prezent, pamiętasz który to ?");
             eval(gift_print_level3[0]);
             eval(gift_print_level3[1]);
             eval(gift_print_level3[2]);
             eval(gift_print_level3[3]);
             eval(gift_print_level3[4]);
             eval(gift_print_level3[5]);
             eval(gift_print_level3[6]);
             eval(gift_print_level3[7]);
             eval(gift_print_level3[8]);
             eval(gift_print_level3[9]);
             eval(gift_print_level3[10]);
             eval(gift_print_level3[11]);
             eval(gift_print_level3[12]);
             eval(gift_print_level3[13]);
             eval(gift_print_level3[14]);
             eval(gift_print_level3[15]);
             eval(child_level3_array[0]);
             $(".child_gift_choice").css("margin-left","3.8%");
             var count = 0;
             $(".snow_efects").append(correct);
             $(".child_gift_choice").on("click",function(){
               if($(this).attr("data-number") == $(".search").attr("data-number") ){
                 $(this).css("border","5px solid green");
                 $(this).off('click');
                 $(".search").remove();
                 count++;
                 eval(child_level3_array[count]);
                 if(count === 16){
                   $(".levels__page").remove();
                   gameSucces();
                 }
               }
               else{
                 $(".levels__page").remove();
                 $("body").addClass("bg_game_over");
                var game_over = $('<div>',{
                  class:"game_over",
                  html:"Buuu nie udało się hahahaha, spróbuj jeszcze raz :)",
                })
                var game_over_pic = $('<img>',{
                  class:"game_over_pic",
                  src:`./images/santa4.png`,
                })
                body.append(game_over);
                body.append(game_over_pic);
                body.append(slider_start_game_button);
                slider_start_game_button.css("top","70%");
                slider_start_game_button.on("click",function(){
                  location.reload();
                })
               }
             })
           },48000)


         })
       }
     }, index * 6000);
  }

  var index;
  for (index = 0; index < slider_level_3.length; ++index) {
      start_level3(index)
  }

}

class Child{
  constructor(number, giftNumber, text, text2) {
    this._number = number;
    this._giftNumber = giftNumber;
    this._text = text;
    this._text2 = text2;
  }

  print(){
    var child = $("<div>",{
      class:"child"+this._number,
    })
    var child_look = $("<img>",{
      class:"child_look",
      src:`./images/children/child${this._number}.png`,
    })

    var child_gift = $('<img>',{
      class:"child_gift",
      src:`./images/gifts/gift${this._giftNumber}.png`,
    })
    var child_cloud = $("<img>",{
      class:"child_cloud",
      src:"./images/cloud5.png",
    })
    var child_cloud_text = $('<div>',{
      class:"child_cloud_text",
      html:this._text,
    })

    $(".snow_efects").append(child);
    child.append(child_look);
    child.append(child_gift);
    child.append(child_cloud);
    child.append(child_cloud_text) ;

  }

  printOne(){
    var child = $("<div>",{
      class:"search child"+ this._number,
      "data-number":this._giftNumber,
    })
    var child_look = $("<img>",{
      class:"child_look",
      src:`./images/children/child${this._number}.png`,
    })

    var child_cloud = $("<img>",{
      class:"child_cloud",
      src:"./images/cloud5.png",
    })
    var child_cloud_text = $('<div>',{
      class:"child_cloud_text_one",
      html:this._text2,
    })
    $(".snow_efects").append(child);
    child.append(child_look);
    child.append(child_cloud);
    child.append(child_cloud_text) ;
  }

  printGift(){
    var oneGift = $('<img>',{
      class:"child_gift_choice",
      src:`./images/gifts/gift${this._giftNumber}.png`,
      "data-number": this._giftNumber,
    })

    $(".snow_efects").append(oneGift);
  }
}


})
