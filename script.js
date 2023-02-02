const div = document.createElement('div');
div.style.cssText = "border: 1px solid black; display: flex; flex-wrap: wrap; max-width: 352px; max-height: 320px;"
document.body.appendChild(div);

const div1 = document.createElement('div');
div1.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div1);

const div2 = document.createElement('div');
div2.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div2);

const div3 = document.createElement('div');
div3.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div3);

const div4 = document.createElement('div');
div4.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div4);

const div5 = document.createElement('div');
div5.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div5);

const div6 = document.createElement('div');
div6.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div6);

const div7 = document.createElement('div');
div7.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div7);

const div8 = document.createElement('div');
div8.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div8);

const div9 = document.createElement('div');
div9.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div9);

const div10 = document.createElement('div');
div10.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div10);

const div11 = document.createElement('div');
div11.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div11);

const div12 = document.createElement('div');
div12.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div12);

const div13 = document.createElement('div');
div13.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div13);

const div14 = document.createElement('div');
div14.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div14);

const div15 = document.createElement('div');
div15.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div15);

const div16 = document.createElement('div');
div16.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div16);

const div17 = document.createElement('div');
div17.style.cssText = "border: 1px solid black; height: 20px; width: 20px;";
div.appendChild(div17);


const test = div.children;


const test2 = [...test];
console.log(test2);


function changeColor () {
   test2.forEach((div) => {
      div.addEventListener('mousedown', () => {
         div.classList.add('box');
      })
   })
}

changeColor();

