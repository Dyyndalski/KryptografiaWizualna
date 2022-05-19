const originalContainer = document.querySelector(".original");


for (let i = 0; i<100; i++){
  for(let j = 0; j < 100; j++){
    const div = document.createElement("div");
    div.classList.add("pixel");
    
    if(j > 5 && j < 50 && i > 10 && i < 30) 
      div.classList.add("black");

    if(j > 40 && j < 50 && i > 60 && i < 90 ) 
      div.classList.add("black");

    if(j > 80 && j < 100 && i > 0 && i < 20 ) 
      div.classList.add("black");


    if(j < 50 && i > 40)
      div.classList.add("white");

    div.classList.add("white");
    originalContainer.appendChild(div);
  }
}

let udzialOneArray = []
let udzialTwoArray = []

const originalPixels = document.querySelectorAll(".original .pixel")
originalPixels.forEach((child) =>{
    let childColor;
    if (child.classList.contains("white")){
        childColor = "white";
    }
    if (child.classList.contains("black")){
        childColor = "black";
    }

    udzialOneArray.push(childColor);
})

const udzialOneContainer = document.querySelector(".udzial-one");
const udzialTwoContainer = document.querySelector(".udzial-two");

udzialOneArray.forEach((color)=>{
    const divUdzialOne = document.createElement("div");
    const divUdzialTwo = document.createElement("div");
    const divUdzialOneLeft = document.createElement("div");
    const divUdzialOneRight = document.createElement("div");
    const divUdzialTwoLeft = document.createElement("div");
    const divUdzialTwoRight = document.createElement("div");

    divUdzialOne.classList.add("pixel");
    divUdzialTwo.classList.add("pixel");
    
    divUdzialOneLeft.classList.add("pixel-udzial")
    divUdzialOneRight.classList.add("pixel-udzial")
    divUdzialTwoLeft.classList.add("pixel-udzial")
    divUdzialTwoRight.classList.add("pixel-udzial")

    if (color == "white"){
        if(Math.random() > 0.5){
            divUdzialOneLeft.classList.add("black");
            divUdzialOneRight.classList.add("white");
            divUdzialTwoLeft.classList.add("black");
            divUdzialTwoRight.classList.add("white");
        } else{
            divUdzialOneLeft.classList.add("white");
            divUdzialOneRight.classList.add("black");
            divUdzialTwoLeft.classList.add("white");
            divUdzialTwoRight.classList.add("black");
        }

        divUdzialOne.appendChild(divUdzialOneLeft);
        divUdzialOne.appendChild(divUdzialOneRight);
        divUdzialTwo.appendChild(divUdzialTwoLeft);
        divUdzialTwo.appendChild(divUdzialTwoRight);
    } 

    if(color == "black"){
        if(Math.random() > 0.5){
            divUdzialOneLeft.classList.add("black");
            divUdzialOneRight.classList.add("white");
            divUdzialTwoLeft.classList.add("white");
            divUdzialTwoRight.classList.add("black");
        } else{
            divUdzialOneLeft.classList.add("white");
            divUdzialOneRight.classList.add("black");
            divUdzialTwoLeft.classList.add("black");
            divUdzialTwoRight.classList.add("white");
        }

        divUdzialOne.appendChild(divUdzialOneLeft);
        divUdzialOne.appendChild(divUdzialOneRight);
        divUdzialTwo.appendChild(divUdzialTwoLeft);
        divUdzialTwo.appendChild(divUdzialTwoRight);
    }

    udzialOneContainer.appendChild(divUdzialOne);
    udzialTwoContainer.appendChild(divUdzialTwo);
})