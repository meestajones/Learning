const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');
let days =
select.onchange = function() {
  const choice = select.value;
    if (choice === 'January' || choice === 'March' || choice === 'May' || choice === 'July' || choice === 'August' || choice ==='October' || choice ==='December') {
      let days = 31;
          createCalendar(days, choice);
    }
    else if (choice ==='April' || choice ==='June' || choice ==='September' || choice ==='November') {
      let days = 30;
          createCalendar(days, choice);
    }
    else {
      let days = 28;
          createCalendar(days, choice);
    }

  }



function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');
