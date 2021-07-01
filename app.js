
window.addEventListener('load', init);

//Avaliable levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
}

const wordInput = document.getElementById('wordInput');
const currentWord = document.querySelector('.word');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector(".time");
const message = document.querySelector('.result');
const seconds = document.querySelector('.second');
const result = document.querySelector('.result');
const gameLevel = document.getElementById('level');

let currentLevel= 0;
 // Choose game level
 gameLevel.addEventListener('change',function selectGameLevel(){
  console.log(gameLevel.value);
  if (gameLevel.value === "easy"){
    //To change level
    currentLevel =  levels.easy; 
    
  }else if(gameLevel.value === "medium"){
    currentLevel =  levels.medium;
  }else if (gameLevel.value === "hard"){
    currentLevel =  levels.hard;
  }else{
    currentLevel = 0;
  }
  seconds.textContent = currentLevel;
  
});


let time = currentLevel;
let score = 0;
let isPlaying;



const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  //Initialize game

  function init(){
      
      //load word from array
      showWord(words);
      //Match on word input
      wordInput.addEventListener('input', startMatch)
      //Call countdown every second
      setInterval(countdown, 1000)
      //Check game status 
      setInterval(checkStatus, 5)
      // Show number of seconds
      seconds.textContent = currentLevel;
  }


  //pick & show random word
    function showWord(words){
      const index = Math.floor(Math.random() * words.length);
      //console.log(currentWord)
      currentWord.textContent = words[index]; 
  }

  //Start match
  function startMatch(){
      if(currentLevel === 0){
      alert("Please choose the level.")
     }
      if(matchWords()){
          isPlaying = true;
          time = currentLevel + 1;
          score++;
          showWord(words);
          wordInput.value = "";
      }
      if(score === -1){
        scoreDisplay.textContent = 0;
        }else{
        scoreDisplay.textContent = score;
      }
  }

  //Match currentWord to wordInput

  function matchWords(){
      if(wordInput.value === currentWord.textContent){
        result.style.display = "block";
        result.style.color = "green";
        message.textContent ="Correct!!!";
        return true;
      }else{
        message.textContent =""
          return false;
      }
  }

  //Countdown timer
   function countdown(){
     //console.log(time);
   
     if(time > 0){
         time--;

     }else if (time === 0){
         isPlaying = false;
     }
     timeDisplay.textContent = time;
  }
  
  //Check game status

  function checkStatus(){
    if(!isPlaying && time === 0){
        result.style.display = "block"
        result.style.color = "red";
        message.textContent = "Game Over!!!"
        score = -1;
    }
    
     
  }