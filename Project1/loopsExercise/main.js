const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

for (i=0;i<people.length;i++) {
  let names=people[i].split();
  console.log(names);
  if(names[0]==='Lola' || names[0]==='Phil'){
    refused.textContent += names + ', ';
 console.log(refused.textContent.length());

  } else {
    admitted.textContent += names + ', ';
  }
}
refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) +
'.';
