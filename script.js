const div = document.createElement('div');
div.style.cssText = "border: 1px solid black; display: flex; flex-wrap: wrap; max-width: 352px; max-height: 350px; margin: auto;"
document.body.appendChild(div);



function test () {
   const eraseButton = document.createElement('button');
      document.body.insertBefore(eraseButton, div);
      eraseButton.textContent = 'Erase';
      eraseButton.style.cssText = 'margin-bottom: 20px; margin-left: 48%';



   for (let i = 0; i<256; i++) {
      const anotherDiv = document.createElement('div');
      div.appendChild(anotherDiv);
      anotherDiv.style.cssText = "border: 1px solid black; height: 20px; width: 20px;"
      anotherDiv.addEventListener('mouseover', () => {
         anotherDiv.style.background = 'black';

         eraseButton.addEventListener('click', () => {
            anotherDiv.style.background = 'white';
         })
      })
   }

   
}


   


test();
