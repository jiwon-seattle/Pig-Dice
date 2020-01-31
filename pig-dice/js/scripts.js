
$(document).ready(function(){
  $("#dice1").submit(function(event){
    event.preventDefault();

    var dice = Math.floor(Math.random() * 6) + 1

    if (dice == 1) {
      dices1 = []
      $("#result1Dice").text('Number 1, Zero score!')
    } else {
      dices1.push(dice)
      $("#result1Dice").text(dice)
    }

    if (currentScore.score > 10) {
      console.log('hi')
    } else if (currentScore2.score > 10) {
      console.log('hello')
    }

})

   $("#hold1").click(function(event) {
     event.preventDefault();

     sum = 0
     for (var i =0; i< dices1.length; i++){
       sum = dices1[i] + sum
     }
     sumDice1.push(sum)
     user1Score.addScores(sumDice1[sumDice1.length -1])
     dices1 = []
     var currentScore = user1Score.score
     $("#result1Hold").text(currentScore)

     })

   $("#dice2").submit(function(event){
     event.preventDefault();

     var dice = Math.floor(Math.random() * 6) + 1

     if(dice == 1) {
       dices2 = []
       $("#result2Dice").text('Number1, Zero score!')
     } else {
       dices2.push(dice)
       $("#result2Dice").text(dice)
     }

   })

   $("#hold2").click(function(event){
     event.preventDefault();

     sum = 0
     for (var x=0; x< dices2.length; x++) {
       sum = dices2[x] + sum
     }
     sumDice2.push(sum)
     user2Score.addScores(sumDice2[sumDice2.length -1])
     dices2 = []

     var currentScore2 = user2Score.score

     $("#result2Hold").text(currentScore2)

   })
});

dices1 = []
dices2 = []
sumDice1 = []
sumDice2 = []
totalSumDice1 = []
totalSumDice2 = []

var user1Score = new Score
var user2Score = new Score

function Score() {
  this.dices = []
  this.currentRound = 0;
  this.score = 0
}

Score.prototype.addScores = function(dice) {
  dice.round = this.assignRound();
  this.dices.push(dice);
  this.score += dice
}

Score.prototype.assignRound = function() {
  this.currentRound += 1;
  return this.currentRound;
}

function Winner(currentScore, currentScore2) {
  if (currentScore > 10) {
    $(".row").hide();
    $(".winner1").show();
  } else if (currentScore2 > 10){
    console.log('hello')
  }
}

var winner = new Winner
