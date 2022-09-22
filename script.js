const gameContainer = document.getElementById("game");
const hiddenGameContainer = document.getElementsByClassName("hiddenGameWindow");
let start = document.getElementById("start");
const allGameDivs = document.querySelectorAll("#game div");
let restartButton = document.getElementById("restart-button");

restartButton.style.visibility = 'hidden';

/*start.style.backgroundImage = "url('https://images.unsplash.com/photo-1662668862763-dc613ee191ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')";*/
document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/5620839.jpg')";
gameContainer.classList.add("hiddenGameWindow");


function startGame() {
    
    let start = document.getElementById("start");
    let gameBox = document.getElementById("game");
    /*let gameBoxBorder = document.getElementsByClassName("gameWindow");*/
    start.classList.add("playing");
    gameContainer.classList.remove("hiddenGameWindow");
    gameContainer.classList.add("gameWindow");
    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/5620839.jpg')";
    /*gameContainer.style.display = "block";*/
    /*gameBox.style.display = "flex";*/
    
}

function endGame() {
    let start = document.getElementById("start");
    let gameBox = document.getElementById("game");
    let button = document.getElementById("start-button");
    let restartButton = document.getElementById("restart-button");
    /*button.innerText = "Play Again?";*/
    /*document.body.style.backgroundColor = "black";*/
    button.style.visibility = "hidden";
    restartButton.style.visibility = 'visible';
    start.classList.remove("playing");
    gameContainer.classList.remove("gameWindow");
    gameContainer.classList.add("hiddenGameWindow");

    let LineOne = document.querySelector(".one");
    let LineTwo = document.querySelector(".two");
    let LineThree = document.querySelector(".three");
    
    LineOne.innerText = "YOU'RE";
    LineTwo.innerText = "A";
    LineThree.innerText = "WINNER!!!";

}

//const gameBoxBorder = document.getElementsByClassName("gameWindow");
//gameContainer.style.display = "none";
//gameBoxBorder.style.display = "none";

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
      const firstSpan = document.createElement("span");
      const newDiv = document.createElement("div");
      const newerDiv = document.createElement("span");
      const newestDiv = document.createElement("span");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

      

    // append the div to the element with an id of game
      gameContainer.append(newDiv);
      
      


  }
}

//var card = document.querySelectorAll('.color');
//card.addEventListener('click', function () {
//    card.classList.toggle('is-flipped');
//});






// TODO: Implement this function!
let lastClick = {
    green: [],
    blue: [],
    orange: [],
    purple: [],
    red: [],
    pink: [],
    };
/*lastClick.green = 0;*/
let clickedBoxCount = 0;


let startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", startGame);


let correctPairs = [];





function handleCardClick(event) {
  // you can use event.target to see which element was clicked

    //console.log(lastClick.green);
    ////if (lastClick.green !== [] && lastClick.blue !== [] ||
    ////    lastClick.green !== [] && lastClick.orange !== [] ||
    ////    lastClick.green !== [] && lastClick.purple !== [] ||
    ////    lastClick.green !== [] && lastClick.red !== [] ||
    ////    lastClick.blue !== [] && lastClick.orange !== [] ||
    ////    lastClick.blue !== [] && lastClick.purple !== [] ||
    ////    lastClick.blue !== [] && lastClick.red !== [] ||
    ////    lastClick.orange !== [] && lastClick.purple !== [] ||
    ////    lastClick.orange !== [] && lastClick.red !== [] ||
    ////    lastClick.purple !== [] && lastClick.red !== []) {

    //if (lastClick[color.value].indexOf(timer) !== "[]") {
    //    return;
    //}

        

    
   // if (event.target.classList.contains("purple")) {
    let color = event.target.classList;

    

    if (color) {
        
        
        event.target.style.backgroundColor = color.value;

        

        let timer = setTimeout(function (e) {
            event.target.style.backgroundColor = "rgba(230, 15, 201, 0.3)";
            
            lastClick[color.value] = [];
            
            
        }, 2000);


        
        lastClick[color.value].push(timer);
       

        

        let clickedBoxes = document.querySelectorAll("#clicked");


        let clickedBox = event.target;

        clickedBox.id = "clicked";

        setTimeout(function (e) {
            clickedBox.removeAttribute('id');
            clickedBoxCount = 0;
        }, 2000);

        if (clickedBox.id) {

            clickedBoxCount++;
            console.log(clickedBoxCount);

        }

        if (clickedBoxCount > 2) {
            console.log("clicks too high");
            clickedBoxCount = 0;
            alert("You can only turn two cards at once!");
            event.target.style.backgroundColor = "rgba(230, 15, 201, 0.3)";
            //setTimeout(function (e) {

            //    event.target.style.backgroundColor = "bisque";
            //}, 500);






            //setTimeout(function (e) {
            //    console.log("waiting");
            //    /*clickedBoxCount = 0;*/
            //}, 1750);
        }

        if (lastClick[color.value].length >= 2) {
            clickedBoxCount = 0;
            clearTimeout(lastClick[color.value][0]);
            clearTimeout(timer);
            lastClick[color.value] = [];
            correctPairs.push(color.value);
            
        }

 

        //color.add("clicked");

        //setTimeout(function (e) {
        //    color.remove("clicked");
        //}, 2000);

        //let clickCounter = 0;

        //if (color.contains("clicked")) {
        //    clickCounter++
        //    if (clickCounter >= 2) {
        //        console.log(clickCounter);
        //    }
        //}

        if (correctPairs.includes("purple") &&
         correctPairs.includes("pink")     &&
         correctPairs.includes("green")  && 
         correctPairs.includes("blue") &&
         correctPairs.includes("orange") &&
         correctPairs.includes("red")) {
         
            
            console.log("You win!");
            endGame();
        }


        
    } else {
        console.log('that wasnt purple');
    }
    
}



// when the DOM loads
createDivsForColors(shuffledColors);



