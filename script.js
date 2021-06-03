const numButtons = document.getElementsByTagName('button');
const input = document.getElementsByClassName('current')
const output = document.getElementsByClassName('output')


let operands = ['×','÷','+','-','='];
let digits = ['1','2','3','4','5','6','7','8','9','0','.'];
let accumulate = [];

let finalArray=[];

let operatorCount=0;
let operatorArray = [];

Array.from(numButtons).forEach((button) => {
    button.addEventListener('click', ()=>{
        calculate(button.innerText)
    });
    
});

function calculate(input){

    if (digits.includes(input)){
        accumulate.push(parseInt(input))
        console.log(accumulate) //when you get rid of this line, it doesn't work anymore.
    }

    
    else if (operands.includes(input)){
        operatorCount++//checks how many operators
        operatorArray.push(input) //tracks which operators were clicked
        
        if(accumulate.length>0){
            finalArray.push(parseInt(accumulate.join('')))
            
            accumulate.splice(0,accumulate.length)
            
            console.log(finalArray);
        }
        
        
        if(operatorCount==2|| input== '='){
            console.log(finalArray);

            switch(operatorArray[0]){
                case "-":
                    subtract(finalArray)
                    break;
                case '+':
                    add(finalArray)

            }
        }

        
        


        
    }
}



function add (addd){
    console.log(addd[0]+addd[1]) //NOTE: this is where we left off.
}

function subtract(yaddaz){
    console.log(yaddaz[0]-yaddaz[1])
}

function multiply(a,b){
    console.log(a*b)

}

function divide(a,b){
    console.log(Math.floor(a/b))

}
