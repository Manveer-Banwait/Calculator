const numButtons = document.getElementsByTagName('button');
const input = document.getElementById('input')
const output = document.getElementsByClassName('output')


let operators = ['×','÷','+','-','='];

let digits = ['1','2','3','4','5','6','7','8','9','0'];
let editors = ['AC','←'];

let point = '.';
let pointCount = 0;

let accumulate = [];
let finalArray=[];

let holder = 0;

let operatorCount=0;
let operatorArray = [];

let answer = 0;

let flag=false;

Array.from(numButtons).forEach((button) => {
    button.addEventListener('click', ()=>{
        calculate(button.innerText)
    });
    
});

function calculate(nums){
    if (nums == editors[0]|| nums == editors[1]){
        
        editor(nums)
        return
    }

    if (nums!=="="){
        if(digits.includes(nums)){
            accumulate.push(parseInt(nums))
        }

        if(nums == point && pointCount == 0){
            pointCount++
            accumulate.push(nums)
        }
       
    }
    console.log(accumulate)
    input.innerText= accumulate.join('')

    
    if(operators.includes(nums)){


        if(nums !== '='){
            operatorCount++
            console.log(operatorCount)
        }
        
        if(accumulate.length!=0){
        finalArray.push(parseFloat(accumulate.join("")))
        }
        finalArray.push(nums)
        accumulate.splice(0,accumulate.length)
        console.log(finalArray)

        

        
        
        if (nums == "="){
            holder = finalArray.indexOf('=')
            finalArray.splice(holder)
            console.log(finalArray)
            switchBoard()
            accumulate.splice(0, accumulate.length)

        }

        
        if (operatorCount==2){
            flag = true;
            console.log(flag)
            console.log(finalArray)
            let test=(switchBoard());
            accumulate.splice(0, accumulate.length)
            console.log(finalArray)
            console.log(operatorCount)
        }
    }

}



function switchBoard(){

    
    if(finalArray[1]=='-'){
        input.innerText=(subtract(finalArray))

        if(flag==false){
        finalArray.splice(0,finalArray.length)
        finalArray.unshift(parseFloat(input.innerText))
        console.log(finalArray, accumulate.length)
        operatorCount--
        }

        if(flag==true){
           finalArray.splice(0, finalArray.length-1)
           finalArray.unshift(parseFloat(input.innerText))
           operatorCount--
           flag=false
       }
        return input.innerText;
      }  


    
    if(finalArray[1]=='+'){
        input.innerText=(add(finalArray))

        if(flag==false){
        finalArray.splice(0,finalArray.length)
        finalArray.unshift(parseFloat(input.innerText))
        console.log(finalArray, accumulate.length)
        operatorCount--
        }

        if(flag==true){
           finalArray.splice(0, finalArray.length-1)
           finalArray.unshift(parseFloat(input.innerText))
           operatorCount--
           flag=false
       }
        return input.innerText;
      }  
    
    if(finalArray[1]=='×'){
        input.innerText=(multiply(finalArray))

        if(flag==false){
        finalArray.splice(0,finalArray.length)
        finalArray.unshift(parseFloat(input.innerText))
        console.log(finalArray, accumulate.length)
        operatorCount--
        }

        if(flag==true){
           finalArray.splice(0, finalArray.length-1)
           finalArray.unshift(parseFloat(input.innerText))
           operatorCount--
           flag=false
       }
        return input.innerText;
      }  
    
   
    if(finalArray[1]=='÷'){
        input.innerText=(divide(finalArray))

        if(flag==false){
        finalArray.splice(0,finalArray.length)
        finalArray.unshift(parseFloat(input.innerText))
        console.log(finalArray, accumulate.length)
        operatorCount--
        }

        if(flag==true){
           finalArray.splice(0, finalArray.length-1)
           finalArray.unshift(parseFloat(input.innerText))
           operatorCount--
           flag=false
       }
        return input.innerText;
      }  

}




function add (adding){
    return (parseFloat(adding[0])+parseFloat(adding[2]))

}

function subtract(subtracting){
    return(parseFloat(subtracting[0])-parseFloat(subtracting[2]))
    
}

function multiply(multiplying){
    console.log("here")
   return multiplying[0]*multiplying[2]

}

function divide(dividing){
    return dividing[0]/dividing[2]

}

function editor(selection){
    if(selection == '←'){
        accumulate.splice(accumulate.length-1)
        console.log(accumulate)
        console.log('success')
        input.innerText = accumulate.join('')
    }

    if(selection == 'AC'){
        accumulate.splice(0,accumulate.length)
        finalArray.splice(0, finalArray.length)
        input.innerText = accumulate.join('')

    }



}