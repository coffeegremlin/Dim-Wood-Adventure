/*----------------- Constants -----------------*/



/*------------- Variables (state) -------------*/

const inventoryBag = []

const totalChoices = []

/*--------- Cached Element References ---------*/

const winLoseMessage = document.querySelector('#win-lose-message')
const backGround = document.querySelector('#background')
const enemyBox = document.querySelector('#enemy')
const dialog = document.querySelector('#dialog-box')

const inventory = document.querySelector('#inventory')
const choice1Btn = document.querySelector('#choice1')
const choice2Btn = document.querySelector('#choice2')

const startBtn = document.querySelector('#start')
console.log(startBtn)
const playerStatusText = document.querySelector('#current-status')
const playerStatusImg = document.querySelector('#player-status')

/*-------------- Event Listeners --------------*/

startBtn.addEventListener('click', startGame)

choice1Btn.addEventListener('click', btnPress)
choice2Btn.addEventListener('click', btnPress)

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

function btnPress(){
  choice1Btn.value = 1
  choice2Btn.value = 2
  console.log('working')
}

function startGame(){
  startBtn.innerText = ''
  branchStart()
  startBtn.
  console.log('hello world')
}

// Story branch functions for game vvv

// first choice for player
function branchStart(){
  dialog.innerText = `You’ve ventured into the forest of Dim Wood in search of reaching hidden treasure. As you stand before the trees, you see two paths lie in front of you. Choice 1: A dark opening in the trees that has no sound. Choice 2: A faint light dances down a dark path with soft laughter.`
  if (btnPress === 1){
    console.log('button1 has been pressed')
    branch2Dark()
  } else if (btnPress === 2){
    console.log('button2 has been pressed')
    branch1Skull()
  }
}

// // Dark path choice
// function branch2Dark(){
//   dialog.innerText = `Deciding the laughter can’t amount to anything good, you walk down the dark path. It seems impossible but the forest’s darkness settles around you heavier with every step. Choice 1: You push forward hoping for the darkness to let up. Choice 2: Turn back around deciding the other path was a better choice.`
//   if (btnPress = 1){
//     return 
//   } else if (btnPress = 2){
//     return
//   }
// }

// // Player decides to walk back (leads to youAreDead)
// function branch2Walkback(){
// dialog.innerText = `You decide to walk back, you can’t go further if you can’t see. As you turn around, you run headfirst into a wall of razor sharp thorns that seemingly appeared out of nowhere. You are caught on the wall, and slowly lose consciousness. You are dead.`
// return youAreDead()
// }

// // Player decides to press on through the dark
// function branch2PressOn(){
//   dialog.innerText = `You decide to press on further, hoping your eyes might adjust. The forest can only get so dark, it must eventually get lighter. It turns out that was a wise decision. Your optimism pays off as you press forward, and see the a path filled with lanterns leading you to a graveyard. Choice 1: On your right there’s a towering iron gate to the entrance of a church. Try to open the gate. Choice 2: On your left you see a cloaked figure on the edge of the graveyard shrouded in mist.)`
//   if (btnPress = 1){
//     return 
//   } else if (btnPress = 2){
//     return
//   }
// }

// // Try the gate (branch1 merges with branch 2 here)
// // If player does not have key from branch1, gate === locked/false return to branch2Graveyard
// function branchMergeTryGate(){
//   // if (key === true){}
//   dialog.innerText = `You pull the silver key from you pocket and see it glow as you hold it to the gate’s lock. The key and the gate seem to shimmer into nothingness. Do you explore the church or the cloaked figure?`
//   //else
//   dialog.innerText = `The gate is locked and will not budge. You don't have a key. Choice 1: On your right there’s a towering iron gate to the entrance of a church. Try to open the gate. Choice 2: On your left you see a cloaked figure on the edge of the graveyard shrouded in mist.`
//   if (btnPress = 1){
//     return 
//   } else if (btnPress = 2){
//     return
//   }
// }

// // Choose church
// function enterChurch(){
//   dialog.innerText = `You decide whatever the cloaked figure is doing, if it’s in a graveyard it can’t be good. You walk to the church doors and heave them open. You see a ghost hovering in front of a gilded chest. Choice 1: Attack the ghost to get to the gilded chest. Choice 2: Silently look around for something to get rid of the ghost, and hope it doesn’t hear or see you moving about.`
//   if (btnPress = 1){
//     return 
//   } else if (btnPress = 2){
//     return
//   }
// }

// // Attack the ghost (leads to youAreDead)
// function attackGhost(){
//   dialog.innerText = `You swing your sword at the ghost, and it passes right through the form of the specter. It finds your advance very rude, and returns the favor in kind. You feel it get very cold and your vision blurs as the ghost grabs your helmet. You are frozen in a block of ice. You are dead.`
//   return youAreDead()
// }

// // Look for item to remove the ghost (leads to youWin)
// function lookForItem(){
//   dialog.innerText = `You find a bowl of what you hope is holy water, and throw it on the ghost. The ghost burns up in otherworldly blue flame. You now can open the chest. Inside you find the treasure of Dim Wood, an eternal flame held within an ancient amulet. You need never fear the dark now what things it may hold.`
//   return youWin()
// }

// // Approach the cloaked figure (branch1, branch2, and branchMergeTryGate if the player has key from branch 1 lead to this)
// function branchMergeApproachFigure(){
//   dialog.innerText = `You decide to approach the cloaked figure, and as you draw near, you see it’s a dark wizard with yellowed skin drawn taught against his sallow bones. The wizard begin to gather oily black light atop his staff. Choice 1: Charge the wizard, hoping to reach him before he finishes casting his spell. Choice 2: Find a grave stone to take cover behind.`
//   if (btnPress = 1){
//     return 
//   } else if (btnPress = 2){
//     return
//   }
// }

// // Charge the wizard (leads to youAreDead)
// function chargeWizard(){
//   dialog.innerText = `You get within a few feet of the wizard as his oily flames explode into the shape of a looming skeleton of black oily fire. The skeleton charges you and explodes over you, covering you in the dark oily flame. You burn to nothing but a handful of ashes as the wizard watches. You are Dead.`
//   return youAreDead()
// }

// // Find cover behind gravestone
// function findCover(){
//   dialog.innerText = `You take cover behind the closet gravestone as the wizard finishes his spell and aims it at you. The black oily flame bursts against the gravestone and you see it turn to snow. A ghost comes screaming out of the church above, throwing the iron gate wide open as its wail fills the sky. The wizard has angered the specter by attacking its final resting place. The ghost turns the wizard to a solid block of ice as you watch hidden behind the grave. Choice 1: Run for the church. Choice 2: You continue to keep hiding, and wait for the ghost to leave.`
//   if (btnPress = 1){
//     return 
//   } else if (btnPress = 2){
//     return
//   }
// }

// // Keep hiding (leads to youAreDead)
// function keepHiding(){
//   dialog.innerText = `The ghost turn and sees you laying down behind it’s grave. The ghost doesn’t take kindly to your use of its final resting place as a shield. You feel yourself get very cold and your vision blurs as the ghost grabs your helmet. You are frozen in a block of ice. You are dead.`
//   return youAreDead()
// }

// // Run for the church (leads to youWin)
// function runToChurch(){
//   dialog.innerText = `You run for the church, not waiting to be the next victim of the ghost.You reach the church and enter, leaving the grisly scene behind. As you walk down the aisle, you see a gilded chest on an altar. You move to it and open the chest. Inside you find the treasure of Dim Wood, an eternal flame held within an ancient amulet. You need never fear the dark now what things it may hold.`
//   return youWin()
// }


// // Investigate the light/laughter branch
// function branch1Skull(){
//   dialog.innerText = `As you walk down the path, deciding to investigate what the light is, you see it turns out to be a flaming skull hovering in a clearing of the woods laughing to itself. Choice 1: Try to ignore the skull, and sneak away hoping it hasn’t seen you. Choice 2: Attack the skull, hoping you might catch it by surprise.`
//   if (btnPress = 1){
//     return 
//   } else if (btnPress = 2){
//     return
//   }
// }

// // Ignore the skull and sneak away (leads to youAreDead)
// function branch1IgnoreSkull(){
//   dialog.innerText = `You try to slip away to a side path but step on a branch. The skull hears the snap of the fallen branches. It turns and sees you trying to slink away into the darkness of the wood. The skull rushes you, breathing hellfire over you. The flames envelope you in a horrible burning embrace. You are dead.`
//   return youAreDead()
// }

// // Attack the skull (needs to have html injection to give player the silver key === true), and merge branch1 to branchMergeTryGate // branchMergeApproachFigure.
// function branch1AttackSkull(){
//   dialog.innerText = `You manage to get behind the skull quietly unseen and unheard. You raise your sword and cleave the skull in half with a mighty swing. You see something shining inside one of the halves of the split skull. You found a silver key! As you press forward, leaving the now ashen skull behind you, you see a path leading to a graveyard with a church looming over the grounds. The church has an iron gate, and further in the distance you see a cloaked figure shrouded in mist at the edge of the graveyard. Choice 1: Try to open the iron gate to the entrance of a church. Choice 2: On your left you see a cloaked figure on the edge of the graveyard shrouded in mist.`
//   if (btnPress = 1){
//     return 
//   } else if (btnPress = 2){
//     return
//   }
// }

// // END SCREEN FUNCTIONS
// // You are dead screen function (leads to gameover or branchStart)
// function youAreDead(){
//   dialog.innerText = `YOU ARE DEAD. Choice 1: TRY AGAIN? Choice 2: NO.`
// }

// // You win screen for player (leads to gameover or branchStart)
// function youWin(){
//   dialog.innerText = `YOU WIN! Choice 1: TRY AGAIN? Choice 2: NO.`
// }

// // Game over function for end screen
// function gameOver(){
//   dialog.innerText = `GAME OVER. THANK YOU FOR PLAYING.`
// }