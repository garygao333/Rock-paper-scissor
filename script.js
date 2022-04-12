let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('button');
let fortune = document.getElementById('fortune');

//xuan ze shang mian de yi ge
function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

//ba ta fangzai ping mu shang
function showFortune(){
  fortune.innerHTML = fortuneSelector();
  
  button.innerHTML = "Cool?";
  img.style.display = 'none';
  yeet.innerHTML = 'Now we just have to eat the cookie!';
button.removeEventListener('click', showFortune);
}

//jiao function
button.addEventListener('click', showFortune);
