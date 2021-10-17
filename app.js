/*----------------- Constants -----------------*/



/*------------- Variables (state) -------------*/

const inventory = []

/*--------- Cached Element References ---------*/

const winLoseMessage = document.querySelector('#win-lose-message')
const backGround = document.querySelector('#background')
const enemyBox = document.querySelector('#enemy')
const dialog = document.querySelector('#dialog-box')

const inventory = document.querySelector('#inventory')
const choice1Btn = document.querySelector('#choice1')
const choice2Btn = document.querySelector('#choice2')

const startBtn = document.querySelector('#start')

const playerStatusText = document.querySelector('#current-status')
const playerStatusImg = document.querySelector('#player-status')

/*-------------- Event Listeners --------------*/

startBtn.addEventListener('click', evt => {

})

choice1Btn.addEventListener('click', evt => {

})
choice2Btn.addEventListener('click', evt => {

})

/*----------------- Functions -----------------*/

// Steps to flesh out functions vvv
// On start, load the game for the first branch, start playing music (make sure the selected audio will loop).
// onclick change the dialog box to the current branch of the game.
// Change audio depending on which branch the player is at.
// Change the text of choice1Btn and choice2Btn to the current options.
// onClick for choice buttons load the related function below it.
// Either add or change background, add or change enemy(if relevant).
// choice1Btn.onClick(){load selected function}
// Depending on branch, animate/run gif of player status(attack, roll, death, etc.)
// Also animate/run gif of enemy status(on top of background box on the right.)
// 


function startGame(){
  startBtn.onclick
}

// Story branch functions for game vvv

// first choice for player
function branchStart(){

}

// Dark path choice
function branch2Dark(){

}

// Player decides to walk back (leads to youAreDead)
function branch2Walkback(){

}

// Player decides to press on through the dark
function branch2PressOn(){

}

// Player enters the graveyard
function branch2Graveyard(){
  
}

// Try the gate (branch1 merges with branch 2 here)
// If player does not have key from branch1, gate === locked/false return to branch2Graveyard
function branchMergeTryGate(){
  
}

// choose church or figure(if key from branch1 === true, leads to church or branchMergeApproachFigure)
function chooseChurchOrGate(){

}

// Choose church
function enterChurch(){

}

// Attack the ghost (leads to youAreDead)
function attackGhost(){

}

// Look for item to remove the ghost (leads to youWin)
function lookForItem(){

}

// Approach the cloaked figure (branch1, branch2, and branchMergeTryGate if the player has key from branch 1 lead to this)
function branchMergeApproachFigure(){

}

// Charge the wizard (leads to youAreDead)
function chargeWizard(){

}

// Find cover behind gravestone
function findCover(){

}

// Keep hiding (leads to youAreDead)
function keepHiding(){

}

// Run for the church (leads to youWin)
function runToChurch(){

}


// Investigate the light/laughter branch
function branch1Skull(){

}

// Ignore the skull and sneak away (leads to youAreDead)
function branch1IgnoreSkull(){

}

// Attack the skull (needs to have html injection to give player the silver key === true), and merge branch1 to branchMergeTryGate // branchMergeApproachFigure.
function branch1AttackSkull(){

}

// END SCREEN FUNCTIONS
// You are dead screen function (leads to gameover or branchStart)
function youAreDead(){

}

// You win screen for player (leads to gameover or branchStart)
function youWin(){

}

// Game over function for end screen
function gameOver(){

}