const QUOTES = {
  1: "“Whether you think you can or think you can't, your right.” — Henry Ford",
  2: "“He who dares not offend, cannot be honest” — Thomas Paine",
  3: "“If the truth shall kill them, let them die” — Immanuel Kant",
  4: "“A salary is the drug they give you to forget your dreams.” — Kevin O'Leary",
  5: "“No one is more hated than he who speaks the truth.” — Plato",
  6: "“The way to get started is to quit talking and begin doing.” — Walt Disney",
  7: "“If you set your goals ridiculously high and it's a failure, you will fall above everyone else's success.” — James Cameron",
  8: "“The only impossible journey is the one you never begin.” — Tony Robbins",
  9: "“Life is really simple, but we insist on making it complicated.” — Confucius",
  10: "“Life itself is the most wonderful fairy tale.” — Hans Christian Andersen",
  11: "“Life is a long lesson in humility.” — James M. Barrie",
  12: "“The road to success and the road to failure are almost exactly the same.” — Colin R. Davis",
  13: "“You miss 100% if the shots you don't take.” — Wayne Gretzky",
  14: "“The question isn't who is going to let me; it's is who going to stop me.” — Ayn Rand",
  15: "“Everything you've ever wanted is on the other side of fear.” — George Addair",
  16: "“Dream big and dare to fail.” — Norman Vaughan",
  17: "“Nothing is impossible, the word itself says, ‘I'm possible!’” — Audrey Hepburn",
  18: "“I would rather die of passion than of boredom.” — Vincent van Gogh",
  19: "“Dreaming, after all, is a form of planning.” — Gloria Steinem"
};






const Quote_Txt = document.getElementById('Quotes');




START();

function START() {
    Quote();
}


function JSON_Length(Arr) {
  return Object.keys(Arr).length;
}


function Quote() {
  let ranNum = randomInt(1, JSON_Length(QUOTES));
  let txt = QUOTES[ranNum];

  Quote_Txt.innerText = txt;
}





function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
