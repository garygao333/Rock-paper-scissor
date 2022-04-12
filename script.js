let y = Math.floor(Math.random()*3);

var x = '';

let bool = true;

b1 = document.getElementById('b1');
b2 = document.getElementById('b2');
b3 = document.getElementById('b3');

b1.innerHTML = "<img id='h1' src='https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3bdb2575-9a92-42f8-8472-bb78c7bd118a_720x405.jpeg' height = 20% width: 50%/>";

b2.innerHTML = "<img id='h2' src='https://collections.ushmm.org/iiif-b/assets/772934'/>";

b3.innerHTML = "<img id = 'h3' src='https://i.ebayimg.com/images/g/8TsAAOSwXQJgLGhl/s-l400.jpg'/>";

b1.addEventListener('click', function onClick() {
  x = 0;
  gameFunc();
  bool = false;
  b1.removeEventListener('click', onClick);
  var newb2 = b2.cloneNode(true);
  b2.parentNode.replaceChild(newb2, b2);
  var newb3 = b3.cloneNode(true);
  b3.parentNode.replaceChild(newb3, b3);
});
b2.addEventListener('click', function onClick() {
  x=1;
  gameFunc();
  bool = false;
  b2.removeEventListener('click', onClick);
  var newb1 = b1.cloneNode(true);
  b1.parentNode.replaceChild(newb1, b1);
  var newb3 = b3.cloneNode(true);
  b3.parentNode.replaceChild(newb3, b3);
})
b3.addEventListener('click', function onClick() {
  x=2;
  gameFunc();
  bool = false;
  b3.removeEventListener('click', onClick);
  var newb1 = b1.cloneNode(true);
  b1.parentNode.replaceChild(newb1, b1);
  var newb2 = b2.cloneNode(true);
  b2.parentNode.replaceChild(newb2, b2);
})

function gameFunc() {
  if (x === y) {
    p.innerHTML = 'draw';
  } else if (x === 0 && y === 1) {
    p.innerHTML = 'You Loose, paper beats rock';
  } else if (x === 0 && y===2) {
    p.innerHTML = 'You Win rock beats scissor';
  } else if (x===1 && y===0) {
    p.innerHTML = 'Congrats, you win! paper beats rock';
  } else if (x===1 && y===2) {
    p.innerHTML = 'sry, you lose, scissor beats paper';
  } else if (x===2 && y===0) {
    p.innerHTML = 'you lose, rock beats scissors'
  } else if (x===2 && y===1) {
    p.innerHTML = 'congrats, you win, scissors beats paper';
  }
}

p = document.getElementById('p');
