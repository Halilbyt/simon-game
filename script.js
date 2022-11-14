let lstUser = [];
let counter = 0;
let currentSequence = 0;
let CPUsequence = [];

$("body").keypress(function (event){ 
    $("#header-text").text(`Level ${currentSequence}`);   
    setTimeout(showSequence,5);
        
})

// Play Function for 4 diffirent btn

function playGreen(){
    $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    let audio_green = new Audio("sounds/green.mp3");
    audio_green.play()
}


function playRed(){
    $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    let audio_red = new Audio("sounds/red.mp3");
    audio_red.play()
}

function playYellow(){
    $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    let audio_yellow = new Audio("sounds/yellow.mp3");
    audio_yellow.play()
}

function playBlue(){
    $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    let audio_blue = new Audio("sounds/blue.mp3");
    audio_blue.play()
}

function playWrong(){
    $("#wrong").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    let audio_wrong = new Audio("sounds/wrong.mp3");
    audio_wrong.play()
}


$(".btn").click(function(e){
    
    let clickedId = e.target.id;
    if(clickedId === "green"){
        playGreen();
        lstUser.push(0);                 
    }
    else if(clickedId === "red"){
        playRed();
        lstUser.push(1);              
    }
    else if(clickedId === "yellow"){
        playYellow();
        lstUser.push(2);          
    }
    else if(clickedId === "blue"){
        playBlue();
        lstUser.push(3);           
    }
    counter = lstUser.length-1;
    checkAnswer(); 
    console.log("***********")
    console.log(lstUser)
    console.log("----------")
    console.log(CPUsequence)
    console.log("----------")
    console.log(counter)
    
    
})

// creating sequence for all level
// randomly created sequence every time that press any key to start the game
// let make sure there is only 20 level of the game.


function showSequence(){
    lstUser=[];
    currentSequence++;
    $("#header-text").text(`Level ${currentSequence}`);
    let randomNumber = Math.floor(Math.random() * 4);
    CPUsequence.push(randomNumber);
    switch(randomNumber){
        case 0:
            $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            let audio_green = new Audio("sounds/green.mp3");
            audio_green.play();
            break;
        case 1:
            $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            let audio_red = new Audio("sounds/red.mp3");
            audio_red.play();
            break;
        case 2:
            $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            let audio_yellow = new Audio("sounds/yellow.mp3");
            audio_yellow.play();
            break;
        case 3:
            $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            let audio_blue = new Audio("sounds/blue.mp3");
            audio_blue.play();
            break;
        }
        
    }

// check answer;

function checkAnswer(){
    if(CPUsequence[counter] === lstUser[counter]){
        if(CPUsequence.length === lstUser.length){
            currentSequence=counter+1;                        
            setTimeout(showSequence,1000);
             
        };
    }else{
        playWrong();
        $("body").addClass("game-over");
        $("#header-text").text("Game Over, Prest any Key to Restart");
        setTimeout(function (){
            $("body").removeClass("game-over");
        },100);
        reset();
    }
   
}

function reset(){
    lstUser         =   [];
    CPUsequence     =   [];
    counter         =   0;
    currentSequence =   0;    
}






/*
while(true){
        if(levels[counter]===0){
            $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            let audio_green = new Audio("sounds/green.mp3");
            audio_green.play()
        }
        else if (levels[counter]===1){
            $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            let audio_red = new Audio("sounds/red.mp3");
            audio_red.play()
        }
        else if(levels[counter]===2){
            $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            let audio_yellow = new Audio("sounds/yellow.mp3");
            audio_yellow.play()
        }
        else if(levels[counter]===3){
            $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            let audio_blue = new Audio("sounds/blue.mp3");
            audio_blue.play()
        }
    }


*/






























// learning jquery basic
// $(".footer-area").css("color","red");
// // $("div").addClass("footer-area");

// alert($("div").hasClass("footer-area"))
// // text and html

// $("div").html("<strong>HIB</strong>");
// $("div").html("@Created by Halil İbrahim Bayat");


// alert($("div").attr("class"));

// $("div").click(function(){
//     console.log("Hello World")
// })

// $("body").keypress(function(event){
//     $("div").text(event.key)
// })
// $("div").on("mouseover",()=>{
//     $("div").css("color","purple");
// })
// $("div").on("mouseout",()=>{
//     $("div").css("color","red");
// })

/*
adding html elements

adding element befor the element
$("div").before("<button>Click</button>")

adding element after the element
$("div").after("<button>Click</button>")

adding the element inside the element tag after the element contain
$("div").append("<button>Click</button>")

adding the element inside the element tag before the element contian
$("div").prepend("<button>Click</button>")
*/