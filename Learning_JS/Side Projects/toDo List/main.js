const input = document.querySelector('input');
const list = document.querySelector('ol');
const btn = document.querySelector('button');
btn.addEventListener('click', newListItem);

function newListItem() {
    const newItem = document.createElement('li');
    const closeBtn = document.createElement('span');
    newItem.textContent = input.value;
    list.appendChild(newItem);
    input.value = '';
    closeBtn.textContent = 'X';
    newItem.appendChild(closeBtn);
    closeBtn.addEventListener('click', removeItem);
    function removeItem(){
      list.removeChild(this.parentNode);
      newItem.removeChild(this);
}
}
