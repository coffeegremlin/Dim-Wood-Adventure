/*----------------- Constants -----------------*/



/*------------- Variables (state) -------------*/

const inventory = []

/*--------- Cached Element References ---------*/

const backGround = document.querySelector('#background')
const dialog = document.querySelector('#dialog-box')
// add background image display

// add inventory dropdown here
// const upBtn = document.querySelector('#up')
// const rightBtn = document.querySelector('#right')
// const downBtn = document.querySelector('#down')
// const leftBtn = document.querySelector('#left')

const choice1Btn = document.querySelector('#choice1')
const choice2Btn = document.querySelector('#choice2')

const startBtn = document.querySelector('#start')

const playerStatus = document.querySelector('#current-status')
// add status image/gif box

/*-------------- Event Listeners --------------*/

// upBtn.addEventListener('click', )
// rightBtn.addEventListener('click', )
// downBtn.addEventListener('click', )
// leftBtn.addEventListener('click', )

startBtn.addEventListener('click', evt => {

})

choice1Btn.addEventListener('click', evt => {

})
choice2Btn.addEventListener('click', evt => {

})

// status.addEventListener('click')
// statusImg.addEventListener('click', )
// maybe add some status message? ^^^
// or item animation

/*----------------- Functions -----------------*/

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


//Structure example vvvvv
// function start(){
//   dialogBox.innerText = `It's a dark and stormy night. There's two paths to get into the castle before you.`
//   button1.innerText = `Climb the gate (risky but fast)`
//   button2.innerText = `Walk to the back (safe but slow)`
// }

// function button2Step1(){
//   button2.eventListener('click'){
//     dialogBox.innerText = `You lost 10 minutes but got to the back door safely. It's locked.`
//   }
// }
