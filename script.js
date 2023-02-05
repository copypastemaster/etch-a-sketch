const mainDiv = document.querySelector('.wrapper');

const div = document.createElement('div');
      div.style.cssText = 'display: flex; flex-wrap: wrap; max-width: 700px; max-height: auto; margin-top: 20px; overflow: hidden; border: 2px solid black; ';

const black = document.querySelector('#default');
const clear = document.querySelector('#clear');
const erase = document.querySelector('#erase');
const rgb   = document.querySelector('#rgb');

const color = () => {
   let n = (Math.random() * 0xfffff * 1000000).toString(16);
   return '#' + n.slice(0, 6);
 };
 
console.log(color());

mainDiv.appendChild(div);


function defaults () {

   for (let i = 0; i<256; i++) {
      const grid = document.createElement('div');
      div.appendChild(grid);
      grid.style.cssText = 'height: 43px; width: 41.5px; border: 1px solid white;'

      black.addEventListener('click', () => {
         grid.addEventListener('mouseover', () => {
            grid.style.cssText = 'background-color: black; height: 43px; width: 41.5px; border: 1px solid white;';
         })
      })

      clear.addEventListener('click', () => {
         grid.style.cssText = 'background-color: white; height: 43px; width: 41.5px; border: 1px solid white;';
         
      })

      erase.addEventListener('click', () => {
         grid.addEventListener('mouseover', () => {
         grid.style.cssText = 'background-color: white; height: 43px; width: 41.5px; border: 1px solid white;'
      })})

      
      rgb.addEventListener('click', () => {
         grid.addEventListener('mouseover', () => {
            grid.style.cssText = `background-color: ${color()};height: 43px; width: 41.5px; border: 1px solid white;`
            
         })
      })
}
}

function newGrid () {
   for (let i = 0; i<1024; i++) {
      const grid = document.createElement('div');
      div.appendChild(grid);
      grid.style.cssText = 'height: 20px; width: 19.8px; border: 1px solid white;'

      black.addEventListener('click', () => {
         grid.addEventListener('mouseover', () => {
            grid.style.cssText = 'background-color: black; height: 20px; width: 19.8px; border: 1px solid white;';
         })
      })

      clear.addEventListener('click', () => {
         grid.style.cssText = 'background-color: white; height: 20px; width: 19.8px; border: 1px solid white;';
         
      })

      erase.addEventListener('click', () => {
         grid.addEventListener('mouseover', () => {
         grid.style.cssText = 'background-color: white; height: 20px; width: 19.8px; border: 1px solid white;'
      })})


      rgb.addEventListener('click', () => {
         grid.addEventListener('mouseover', () => {
            grid.style.cssText = `background-color: ${color()};height: 20px; width: 19.8px; border: 1px solid white;`
            
         })
      })
}
}


const sixteen = document.querySelector('#sixteen');
sixteen.addEventListener('click', defaults, {once: true});

const thirty = document.querySelector('#thirty-two');
thirty.addEventListener('click', newGrid, {once: true});


