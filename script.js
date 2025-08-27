function toggleColor(box, color) {
    box.addEventListener('click', () => {
        console.log(`${box.id} has been clicked`);
        if (box.style.backgroundColor === color) {
            box.style.backgroundColor = "white";  // back to white
        } else {
            box.style.backgroundColor = color;   // change to given color
        }
    });
}

const box1 = document.getElementById('box-1');
toggleColor(box1, "red");

const box2 = document.getElementById('box-2');
toggleColor(box2, "blue");

const box3 = document.getElementById('box-3');
toggleColor(box3, "green");

const box4 = document.getElementById('box-4');
toggleColor(box4, "yellow");

function addText() {
    const input = document.getElementById('name');
    const greetBtn = document.getElementById('greet');
    const head = document.getElementById('h2');

    greetBtn.addEventListener('click', () => {
        console.log('Greet has been clicked');
         if(input.value.trim() == "")
         { head.innerHTML = "Hello";}
        else
         { head.innerHTML = "Hello," + input.value + '!"};
      });
    }

addText();
