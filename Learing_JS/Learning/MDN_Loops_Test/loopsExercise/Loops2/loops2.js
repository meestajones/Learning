let para = document.createElement('p');
const btn=document.querySelector('button');
const input=document.querySelector('input');

let phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]

btn.addEventListener('click', function() {
  let inputValue=input.value.toLowerCase();
  input.value='';
  input.focus();
  let i=0;

for(let i=0;i<phonebook.length;i++){
  let splitContact=phonebook[i].name.toLowerCase();
    if (splitContact===inputValue) {
      para.textContent=phonebook[i].name + '\'s Phone number is : ' + phonebook[i].number;
    break;
  } else {
      para.textContent='Contact Not Found';
  }
}
});
let section = document.querySelector('section');
section.appendChild(para);

// do {
//   let splitContact=phonebook[i].name.toLowerCase();
//   if (splitContact===inputValue) {
//     para.textContent = phonebook[i].name + '\s Phone Number is : ' + phonebook[i].number;
//     break;
//   } else {
//     para.textContent='Contact Not Found';
//   }
//   i++;
// } while (i<phonebook.length)
// });
//
