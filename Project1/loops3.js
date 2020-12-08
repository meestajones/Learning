let i = 500;
   let para = document.createElement('p');
   function isPrime(num) {
     for(let i = 2; i < num; i++) {
       if(num % i === 0) {
         return false;
       }
     }
     return true;
}
do {
  isPrime(i);
  if (isPrime(i)){
    para.textContent+=i + ', ';
  }
i--
console.log(isPrime(i));
} while (i>1);

   let section = document.querySelector('section');
   section.appendChild(para);
