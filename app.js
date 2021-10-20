/*----------------- Constants -----------------*/

const backgroundMusic =  new Audio('../audio/arrival-to-carcosa.mp3')
const startMusic = new Audio('../audio/Twilight.mp3')
const graveyardYardMusic = new Audio('../audio/horror-piano.mp3')
const churchMusic = new Audio('../audio/return-to-the-nightmare.mp3')
const deadMusic = new Audio('../audio/reaching-the-event-horizon.mp3')
const winMusic = new Audio('../audio/Extinction.mp3')
const gameOverMusic = new Audio('../audio/they-will-be-here-any-minute.mp3')

// function startMusicStop(){

// }
function backgroundMusicStop(){
  backgroundMusic.pause()
  backgroundMusic.currentTime = 0
}
function graveMusicStop(){
  graveyardYardMusic.pause()
  graveYardMusic.currentTime = 0
}
function churchMusicStop(){
  churchMusic.pause()
  churchMusic.currentTime = 0
}
function deadMusicStop(){
  deadMusic.pause()
  deadMusic.currentTime = 0
}
function winMusicStop(){
  winMusic.pause()
  winMusic.currentTime = 0
}

let demonAttackFrames = ['../images/demon-attack/da1.png', '../images/demon-attack/da2.png', '../images/demon-attack/da3.png', '../images/demon-attack/da4.png', '../images/demon-attack/da5.png', '../images/demon-attack/da6.png', '../images/demon-attack/da7.png', '../images/demon-attack/da8.png', '../images/demon-attack/da9.png', '../images/demon-attack/da10.png', '../images/demon-attack/da11.png']

let skullAttackFrames = ['../images/skull-attack/skull1.png', '../images/skull-attack/skull2.png', '../images/skull-attack/fire1.png', '../images/skull-attack/fire2.png', '../images/skull-attack/fire3.png', '../images/skull-attack/fire4.png', '../images/skull-attack/fire5.png']

let wizardDeathFrames = ['../images/wizard-death/death0.png', '../images/wizard-death/death1.png', '../images/wizard-death/death2.png', '../images/wizard-death/death3.png', '../images/wizard-death/death4.png', '../images/wizard-death/death5.png', '../images/wizard-death/death6.png', ]

let wizardAttackFrames = ['../images/wizard-attack/Attack1.png', '../images/wizard-attack/Attack2.png', '../images/wizard-attack/Attack3.png', '../images/wizard-attack/Attack4.png', '../images/wizard-attack/Attack5.png', '../images/wizard-attack/Attack6.png', '../images/wizard-attack/Attack7.png', '../images/wizard-attack/Attack8.png']

let heroDeathFrames = ['../images/hero-death/herodeath1.png', '../images/hero-death/herodeath2.png', '../images/hero-death/herodeath3.png', '../images/hero-death/herodeath4.png', '../images/hero-death/herodeath5.png', '../images/hero-death/herodeath6.png', '../images/hero-death/herodeath7.png', '../images/hero-death/herodeath8.png', '../images/hero-death/herodeath9.png', '../images/hero-death/herodeath10final.png']

let heroAttackFrames = ['../images/hero-attack/hkattack1.png', '../images/hero-attack/hkattack2.png', '../images/hero-attack/hkattack3.png', '../images/hero-attack/hkattack4.png', '../images/hero-attack/hkattack5.png', '../images/hero-attack/hkattack6.png', '../images/hero-attack/hkattack7.png', '../images/hero-attack/hkattack8.png']

let heroRollFrames = ['../images/hero-roll/hkr1.png', '../images/hero-roll/hkr2.png', '../images/hero-roll/hkr3.png', '../images/hero-roll/hkr4.png', '../images/hero-roll/hkr5.png', '../images/hero-roll/hkr6.png', '../images/hero-roll/hkr7.png', '../images/hero-roll/hkr8.png']

let heroRunFrames = ['../images/hero-run/hkrun1.png', '../images/hero-run/hkrun2.png', '../images/hero-run/hkrun3.png', '../images/hero-run/hkrun4.png', '../images/hero-run/hkrun5.png', '../images/hero-run/hkrun6.png', '../images/hero-run/hkrun7.png', '../images/hero-run/hkrun8.png', '../images/hero-run/hkrun9.png', '../images/hero-run/hkrun10.png']

/*------------- Variables (state) -------------*/

let itemSilverKey = (null)

// Log how many clicks/choice player made and use this to display at end?
let totalChoices = []

/*--------- Cached Element References ---------*/

const winLoseMessage = document.querySelector('#win-lose-message')
const backGround = document.querySelector('#background')
const enemyBox = document.querySelector('#enemy')
const enemyOrItemBox = document.querySelector('#enemy2-or-item')
const dialog = document.querySelector('#dialog-box')

const inventory = document.querySelector('#inventory')
const choice1Btn = document.querySelector('#choice1')
const choice2Btn = document.querySelector('#choice2')

const startBtn = document.querySelector('#start')
const playerStatusText = document.querySelector('#current-status')
const playerStatusImg = document.querySelector('#player-status')

/*-------------- Event Listeners --------------*/

startBtn.addEventListener('click', startGame)
choice1Btn.setAttribute('hidden', true)
choice2Btn.setAttribute('hidden', true)

/*----------------- Functions -----------------*/

// Steps to flesh out functions vvv
// On start, load the game for the first branch, start playing music (make sure the selected audio will loop).
// the dialog box will be changed with every fuction of current branch of the game.
// Change audio depending on startGame, youAreDead, youWin, gameOver.
  // for every story branch function use the removeChoice function ath the bottom, and then update the buttons to lead to the next related branch/story function.
    // choice1Btn.onClick(){load selected function}
// Either add or change background, add or change enemy(if relevant).
  // Depending on branch, animate/run gif of player status(attack, roll, death, etc.)
    // Also animate/run gif of enemy status(on top of background box on the right.)
//At the end, add amount of button clicks or a value of how many choices the player made by using the const totalChoices.


// Animations by set timeout vvv

function attackIterateFrameDemon() {
  let frame = 0
  let frameIterator = setInterval(function() {
    playerStatusImg.src = demonAttackFrames[frame]
    frame++
    if (frame === 11){
      clearInterval(frameIterator)
      enemyBox.src = '../images/demon-idle.gif'
    }
  }, 200);
}
function attackIterateFrameSkull() {
  let frame = 0
  let frameIterator = setInterval(function() {
    enemyBox.src = skullAttackFrames[frame]
    frame++
    if (frame === 7){
      clearInterval(frameIterator)
      enemyBox.src = '../images/fire-skull.gif'
    }
  }, 150);
}
function deathIterateFrameWizard() {
  let frame = 0
  let frameIterator = setInterval(function() {
    enemyBox.src = wizardDeathFrames[frame]
    frame++
    if (frame === 7){
      clearInterval(frameIterator)
    }
  }, 200);
}
function attackIterateFrameWizard() {
  let frame = 0
  let frameIterator = setInterval(function() {
    enemyBox.src = wizardAttackFrames[frame]
    frame++
    if (frame === 8){
      clearInterval(frameIterator)
      enemyBox.src = '../images/wizard-idle.gif'
    }
  }, 250);
}
function deathIterateFrameHero() {
  let frame = 0
  let frameIterator = setInterval(function() {
    playerStatusImg.src = heroDeathFrames[frame]
    frame++
    if (frame === 10){
      clearInterval(frameIterator)
    }
  }, 300);
}
function attackIterateFrameHero() {
  let frame = 0
  let frameIterator = setInterval(function() {
    playerStatusImg.src = heroAttackFrames[frame]
    frame++
    if (frame === 8){
      clearInterval(frameIterator)
      playerStatusImg.src = '../images/hero-idle.gif'
    }
  }, 200);
}
function rollIterateFrameHero() {
  let frame = 0
  let frameIterator = setInterval(function() {
    playerStatusImg.src = heroRollFrames[frame]
    frame++
    if (frame === 9){
      clearInterval(frameIterator)
      playerStatusImg.src = '../images/hero-roll/hkr9.png'
    }
  }, 200);
}
function runIterateFrameHero() {
  let frame = 0
  let frameIterator = setInterval(function() {
    playerStatusImg.src = heroRunFrames[frame]
    frame++
    if (frame === 10){
      //maybe set it to go twice? ^^^
      clearInterval(frameIterator)
      playerStatusImg.src = '../images/hero-idle.gif'
    }
  }, 200);
}

// TO DO VVVVV

// add ghost appear frames
// add ghost disappear frames
//add skull death frames


// Button control/wipe function, and then add new function to button vvv
let presentBranch1 = (null)
let presentBranch2 = (null)

function removeChoices(){
  choice1Btn.removeEventListener('click', presentBranch1)
  choice2Btn.removeEventListener('click', presentBranch2)
  presentBranch1 = (null)
  presentBranch2 = (null)
}

function addChoices(){
  choice1Btn.addEventListener('click', presentBranch1)
  choice2Btn.addEventListener('click', presentBranch2)
}

function hideButtons(){
  choice1Btn.setAttribute('hidden', true)
  choice2Btn.setAttribute('hidden', true)
}
function revealButtons(){
  choice1Btn.removeAttribute('hidden', true)
  choice2Btn.removeAttribute('hidden', true)
}


// Game functionality for looping/starting vvv


function tryAgain(){
  // startMusic.volume = 0.1
  // startMusic.play
  backgroundMusicStop()
  removeChoices()
  backGround.setAttribute('hidden', true)
  enemyBox.setAttribute('hidden', true)
  playerStatusImg.src = ''
  playerStatusImg.setAttribute('hidden', true)
  playerStatusText.innerText = ''
  startBtn.removeAttribute('hidden', true)
  hideButtons()
  dialog.innerText = '...'
  winLoseMessage.innerText = ''
  itemSilverKey = (null)
  console.log('Try again function ran')
  startGame()
}

function startGame(){
  startBtn.removeEventListener('click', startGame)
  startBtn.setAttribute('hidden', true)
  revealButtons()
  branchStart()
  console.log('startGame ran')
}


// Story branch functions for game vvv

// first choice for player
function branchStart(){
  backgroundMusic.volume = 0.1
  backgroundMusic.play()
  // figure out how to loop music
  dialog.innerText = `You’ve ventured into the forest of Dim Wood in search of reaching hidden treasure. As you stand before the trees, you see two paths lie in front of you. Choice 1: A dark opening in the trees that has no sound. Choice 2: A faint light dances down a dark path with soft laughter.`
  playerStatusImg.removeAttribute('hidden', true)
  playerStatusImg.src = '../images/hero-idle.gif'
  backGround.removeAttribute ('hidden', true)
  backGround.src = "../images/backgrounds/forest-background.png"
  presentBranch1 = branch2Dark
  presentBranch2 = branch1Skull
  addChoices()
  console.log('branchStart ran')
}

// Dark path choice
function branch2Dark(){
  dialog.innerText = `Deciding the laughter can’t amount to anything good, you head down the dark path. It seems impossible but the forest’s darkness settles around you heavier with every step. Choice 1: You push forward hoping for the darkness to let up. Choice 2: Turn back around deciding the other path was a better choice.`
  runIterateFrameHero()
  removeChoices()
  presentBranch1 = branch2PressOn
  presentBranch2 = branch2Walkback
  addChoices()
  console.log('branch2Dark ran')
}


// Player decides to walk back (leads to youAreDead)
// Need to add a set timeout for this dialog to display before returning to youAreDead
function branch2Walkback(){
  dialog.innerText = `You decide to walk back, you can’t go further if you can’t see. As you turn around, you run headfirst into a wall of razor sharp thorns that seemingly appeared out of nowhere. You are caught on the wall, and slowly lose consciousness as you bleed out. You are dead.`
  hideButtons()
  deathIterateFrameHero()
  setTimeout(youAreDead, 10000);
}

// Player decides to press on through the dark
function branch2PressOn(){
  backgroundMusicStop()
  graveyardYardMusic.volume = 0.1
  graveyardYardMusic.play()
  dialog.innerText = `You decide to press on further, hoping your eyes might adjust. The forest can only get so dark, it must eventually get lighter. It turns out that was a wise decision. Your optimism pays off as you press forward, and see the a path filled with lanterns leading you to a graveyard. Choice 1: On your right there’s a towering iron gate to the entrance of a church. Try to open the gate. Choice 2: On your left you see a cloaked figure on the edge of the graveyard shrouded in mist.`
  runIterateFrameHero()
  removeChoices()
  presentBranch1 = branchMergeTryGate
  presentBranch2 = branchMergeApproachFigure
  addChoices()
}

// Try the gate (branch1 merges with branch 2 here)
// If player does not have key from branch1, gate === locked/false return to branch2Graveyard
function branchMergeTryGate(){
  if (itemSilverKey === true){
    dialog.innerText = `You pull the silver key from you pocket and see it glow as you hold it to the gate’s lock. The key and the gate seem to shimmer into nothingness. Choice 1: Enter and explore the church. Choice 2: Approach the cloaked figure?`
    removeChoices()
    presentBranch1 = enterChurch
    presentBranch2 = branchMergeApproachFigure
    addChoices()
  } else if (itemSilverKey === false){
    dialog.innerText = `The gate is locked and will not budge. You don't have a key. Choice 1: On your right there’s a towering iron gate to the entrance of a church. Try to open the gate. Choice 2: On your left you see a cloaked figure on the edge of the graveyard shrouded in mist.`
    removeChoices()
    presentBranch1 = branchMergeTryGate
    presentBranch2 = branchMergeApproachFigure
    addChoices()
  }
}

// Choose church
function enterChurch(){
  graveMusicStop()
  churchMusic.volume = 0.1
  churchMusic.play()
  dialog.innerText = `You decide whatever the cloaked figure is doing, if it’s in a graveyard it can’t be good. You walk to the church doors and heave them open. You see a ghost hovering in front of a gilded chest. Choice 1: Attack the ghost to get to the gilded chest. Choice 2: Silently look around for something to get rid of the ghost, and hope it doesn’t hear or see you moving about.`
  runIterateFrameHero()
  enemyBox.removeAttribute('hidden', true)
  
  // add ghost src
  removeChoices()
  presentBranch1 = attackGhost
  presentBranch2 = lookForItem
  addChoices()
}

// Attack the ghost (leads to youAreDead)
// Need to add a set timeout for this dialog to display before returning to youAreDead
function attackGhost(){
  dialog.innerText = `You swing your sword at the ghost, and it passes right through the form of the specter. It finds your advance very rude, and returns the favor in kind. You feel it get very cold and your vision blurs as the ghost grabs your helmet. You are frozen in a block of ice. You are dead.`
  hideButtons()
  attackIterateFrameHero()
  // add ghost attack
  setTimeout(deathIterateFrameHero, 100)
  setTimeout(youAreDead, 10000);
}

// Look for item to remove the ghost (leads to youWin)
// Need to add a set timeout for this dialog to display before returning to youWin
function lookForItem(){
  dialog.innerText = `You find a bowl of what you hope is holy water, and throw it on the ghost. The ghost burns up in otherworldly blue flame. You now can open the chest. Inside you find the treasure of Dim Wood, an eternal flame held within an ancient amulet. You need never fear the dark now what things it may hold.`
  hideButtons()
  setTimeout(youWin, 15000);
}

// Approach the cloaked figure (branch1, branch2, and branchMergeTryGate if the player has key from branch 1 lead to this)
function branchMergeApproachFigure(){
  dialog.innerText = `You decide to approach the cloaked figure, and as you draw near, you see it’s a dark wizard with yellowed skin drawn taught against his sallow bones. The wizard begin to gather oily black light atop his staff. Choice 1: Charge the wizard, hoping to reach him before he finishes casting his spell. Choice 2: Find a grave stone to take cover behind.`
  enemyBox.removeAttribute('hidden', true)
  enemyBox.src = '../images/wizard-idle.gif'
  removeChoices()
  presentBranch1 = chargeWizard
  presentBranch2 = findCover
  addChoices()
}

// Charge the wizard (leads to youAreDead)
// Need to add a set timeout for this dialog to display before returning to youAreDead
function chargeWizard(){
  dialog.innerText = `You get within a few feet of the wizard as his oily flames explode into the shape of a looming skeleton of black oily fire. The skeleton charges you and explodes over you, covering you in the dark oily flame. You burn to nothing but a handful of ashes as the wizard watches. You are Dead.`
  hideButtons()
  runIterateFrameHero()
  setTimeout(attackIterateFrameWizard, 100)
  setTimeout(deathIterateFrameHero, 200)
  setTimeout(youAreDead, 15000);
}

// Find cover behind gravestone
function findCover(){
  dialog.innerText = `You take cover behind the closet gravestone as the wizard finishes his spell and aims it at you. The black oily flame bursts against the gravestone and you see it turn to snow. A ghost comes screaming out of the church above, throwing the iron gate wide open as its wail fills the sky. The wizard has angered the specter by attacking its final resting place. The ghost turns the wizard to a solid block of ice as you watch hidden behind the grave. Choice 1: Run for the church. Choice 2: You continue to keep hiding, and wait for the ghost to leave.`
  //add ghost enter/idle
  rollIterateFrameHero()
  // add gravestone here in front of hero
  setTimeout(attackIterateFrameDemon, 100)
  setTimeout(deathIterateFrameWizard, 200)
  removeChoices()
  presentBranch1 = runToChurch
  presentBranch2 = keepHiding
  addChoices()
}

// Keep hiding (leads to youAreDead)
// Need to add a set timeout for this dialog to display before returning to youAreDead
function keepHiding(){
  dialog.innerText = `The ghost turn and sees you laying down behind it’s grave. The ghost doesn’t take kindly to your use of its final resting place as a shield. You feel yourself get very cold and your vision blurs as the ghost grabs your helmet. You are frozen in a block of ice. You are dead.`
  hideButtons()
  attackIterateFrameDemon()
  setTimeout(deathIterateFrameHero, 150)
  setTimeout(youAreDead, 10000);
}

// Run for the church (leads to youWin)
// Need to add a set timeout for this dialog to display before returning to youWin
function runToChurch(){
  dialog.innerText = `You run for the church, not waiting to be the next victim of the ghost.You reach the church and enter, leaving the grisly scene behind. As you walk down the aisle, you see a gilded chest on an altar. You move to it and open the chest. Inside you find the treasure of Dim Wood, an eternal flame held within an ancient amulet. You need never fear the dark now what things it may hold.`
  hideButtons()
  runIterateFrameHero()
  enemyBox.src = ''
  // change enemyBox to chest?? ^^^
  setTimeout(youWin, 15000);
}


// BRANCH 1 STARTS HERE

// Investigate the light/laughter branch
function branch1Skull(){
  dialog.innerText = `As you walk down the path, deciding to investigate what the light is, you see it turns out to be a flaming skull hovering in a clearing of the woods laughing to itself. Choice 1: Try to ignore the skull, and sneak away hoping it hasn’t seen you. Choice 2: Attack the skull, hoping you might catch it by surprise.`
  enemyBox.removeAttribute('hidden', true)
  enemyBox.src = '../images/fire-skull.gif'
  removeChoices()
  presentBranch1 = branch1IgnoreSkull
  presentBranch2 = branch1AttackSkull
  addChoices()
}

// Ignore the skull and sneak away (leads to youAreDead)
// Need to add a set timeout for this dialog to display before returning to youAreDead
function branch1IgnoreSkull(){
  dialog.innerText = `You try to slip away to a side path but step on a branch. The skull hears the snap of the fallen branches. It turns and sees you trying to slink away into the darkness of the wood. The skull rushes you, breathing hellfire over you. The flames envelope you in a horrible burning embrace. You are dead.`
  hideButtons()
  rollIterateFrameHero()
  setTimeout(attackIterateFrameSkull, 150)
  setTimeout(deathIterateFrameHero, 200)
  setTimeout(youAreDead, 10000);
}

// Attack the skull (needs to have html injection to give player the silver key === true), and merge branch1 to branchMergeTryGate // branchMergeApproachFigure.
function branch1AttackSkull(){
  dialog.innerText = `You manage to get behind the skull quietly unseen and unheard. You raise your sword and cleave the skull in half with a mighty swing. You see something shining inside one of the halves of the split skull. You found a silver key!`
  runIterateFrameHero()
  setTimeout(attackIterateFrameHero, 150)
  //add skull death vvvvv
  enemyBox.src = '../images/fire-skull-no-fire.gif'
  itemSilverKey = (true)
  skullDeadMoveOn()
}

function skullDeadMoveOn (){
  backgroundMusicStop()
  graveyardYardMusic.volume = 0.1
  graveyardYardMusic.play()
  dialog.innerText = `As you press forward, leaving the now ashen skull behind you, you see a path leading to a graveyard with a church looming over the grounds. The church has an iron gate, and further in the distance you see a cloaked figure shrouded in mist at the edge of the graveyard. Choice 1: Try to open the iron gate to the entrance of a church. Choice 2: On your left you see a cloaked figure on the edge of the graveyard shrouded in mist.`
  runIterateFrameHero()
  enemyBox.src = ''
  // make enemybox iron gate?
  removeChoices()
  presentBranch1 = branchMergeTryGate
  presentBranch2 = branchMergeApproachFigure
  addChoices()
}


// END SCREEN FUNCTIONS

// You are dead screen function (leads to gameover or branchStart)
function youAreDead(){
  // add stop functions for all possible music tracks here
  deadMusic.volume = 0.1
  deadMusic.play()
  winLoseMessage.innerText = `YOU LOSE`

  //set backround to fade to black
  //add game over 10,9,8... countdown timer

  playerStatusImg.src = '../hero-death/herodeath10final.png'
  enemyBox.src = ''
  dialog.innerText = `YOU ARE DEAD. Choice 1: TRY AGAIN? Choice 2: NO.`
  removeChoices()
  presentBranch1 = tryAgain
  presentBranch2 = gameOver
  addChoices()
  revealButtons()
  console.log('youaredead ran')
}

// You win screen for player (leads to gameover or branchStart)
function youWin(){
  // add stop functions for all possible music tracks here
  winMusic.volume = 0.1
  winMusic.play()
  enemyBox.src = ''
  //set backround to fade to black
  //add game over 10,9,8... countdown timer
  //add triumphant hero src frame
  winLoseMessage.innerText = `YOU WIN`
  dialog.innerText = `Choice 1: TRY AGAIN? Choice 2: NO.`
  removeChoices()
  presentBranch1 = tryAgain
  presentBranch2 = gameOver
  addChoices()
  revealButtons()
  console.log('youWin ran')
}

// Game over function for end screen
// Need to add remove attributes and hidden for every element except background box, and dialog
function gameOver(){
  deadMusicStop()
  winMusicStop()
  gameOverMusic.volume = 0.1
  gameOverMusic.play()
  dialog.innerText = `GAME OVER. THANK YOU FOR PLAYING.`
  enemyBox.setAttribute('hidden', true)
  removeChoices()
  hideButtons()
  winLoseMessage.setAttribute('hidden', true)
  //set background black
  enemyBox.setAttribute('hidden', true)
  enemyOrItemBox.setAttribute('hidden', true)
  inventory.setAttribute('hidden', true)
  playerStatusText.setAttribute('hidden', true)
}
