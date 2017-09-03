var messages = ["WISH KATELYN A HAPPY BIRTHDAY", "WE'RE CALLING THE POLICE", "TIME IS TICKING", "WHAT'S TAKING YOU SO LONG", "STEP IT UP, KK"]
var message = messages[Math.floor(Math.random()*messages.length)];
function setup() {
  createCanvas(980,1461);
  
}

function draw() {
  drawText()
  if (mouseIsPressed) {
      clear()
  }
}

function getRandomMessage() {
  
}

function drawText() {
  fill("red")
  textSize(getRandomInt(12, 32))
  text(messages[Math.floor(Math.random()*messages.length)], getRandomInt(0, 850), getRandomInt(0, 1461));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
