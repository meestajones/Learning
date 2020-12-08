let i = 500;
   let para = document.createElement('p');
   function isPrime(num) {
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
} while (i>1);

   let section = document.querySelector('section');
   section.appendChild(para);
