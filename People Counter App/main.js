

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0;

function increment(){
    console.log("clicked");
    // count = count + 1;
    count += 1;
    countEl.textContent = count ;
    console.log(count); 
}


function save(){
    let saveCount = count + " - ";
    console.log(saveCount);
    saveEl.textContent += saveCount;
    countEl.textContent = 0;
    count = 0; 
}

