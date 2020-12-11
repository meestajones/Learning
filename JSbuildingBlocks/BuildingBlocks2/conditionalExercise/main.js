let response;
let machineActive = false;
let input = document.querySelector('input');
console.log(input.value);
function run(){
while (input.checked === false) {
  response = alert('You need to turn the machine on first');
   break;
 } if (input.checked === true) {
   let score = prompt('How many points did you score?');
     if (score > 100 || score < 0) {
       response = 'This is not possible, an error has occurred.';
   } else if (score >= 0 && score <= 19) {
       response = 'That was a terrible score -- total fail';
   } else if (score >= 20 && score <= 39) {
       response = 'You know some things, but its a pretty bad score.';
   } else if (score >= 40 && score <= 69) {
       response = 'You did a passable job, not bad';
   } else if (score >= 70 && score <= 89) {
       response = 'That\'s a great score, you really know your stuff'
   } else if (score >= 90 && score <= 100) {
       response = 'What an amazing score! Did you cheat? are you for real?'
   } else if (score == undefined || score == null){
       response = 'It doesn\'t seem like you even played the game! please try again';
}

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ` + score ;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
};
}
