const mainDiv = document.querySelector('.wrapper');
      mainDiv.style.cssText = 'border: 1px solid black;'
const div = document.createElement('div');
      div.style.cssText = 'border: 1px solid black; display: flex; flex-wrap: wrap; max-width: 700px; max-height: auto; margin-top: 50px; overflow: hidden;';

const black = document.querySelector('#default');
const clear = document.querySelector('#clear');
const erase = document.querySelector('#erase');
const rgb   = document.querySelector('#rgb');

mainDiv.appendChild(div);

for (let i = 0; i<256; i++) {
   const grid = document.createElement('div');
   div.appendChild(grid);
   grid.style.cssText = 'border: 1px solid black; height: 43px; width: 41.5px;'

   black.addEventListener('click', () => {
      grid.addEventListener('mouseover', () => {
         grid.style.cssText = 'background-color: black; border: 1px solid black; height: 43px; width: 41.5px;';
      })
   })
}



