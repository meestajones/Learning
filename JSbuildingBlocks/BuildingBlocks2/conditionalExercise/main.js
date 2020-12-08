let season = prompt('What season is it right now?').toLowerCase();
let response;

if (season.indexOf('summer') !== -1){
  response = "The sun is shining and it's time to hit the water park!";
} else if (season.indexOf('winter') !== -1){
  response = "Baby it's cold outside!";
}

let para1 = document.createElement('p');
para1.textContent = response;
document.body.appendChild(para1);
