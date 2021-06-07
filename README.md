# Calculator

if (nums == editors[0]|| nums == editors[1]){
        
        editor(nums)
    }

    if (digits.includes(nums)){
        if(isNaN(parseInt(nums))!==true){
        accumulate.push(parseInt(nums))
        }
        else if(isNaN(parseInt(nums))===true){
            accumulate.push(nums)
        }
        console.log(accumulate) 
        input.innerText = accumulate.join('') 
        
    }

    
    else if (operands.includes(nums)){
        operatorCount++//checks how many operators
        operatorArray.push(nums) //tracks which operators were clicked
        
        if(accumulate.length>0){ //joins the accumulating numbers into one number
            finalArray.push(accumulate.join(''))
            parseFloat(finalArray);
            console.log("test "+finalArray)
            accumulate.splice(0,accumulate.length)
        }
        
        
        if(nums== '='){
            accumulate.splice(0,accumulate.length) 
            switchBoard()
        }
        if (operatorArray.length==2){
            operatorArray.splice[0]
            console.log("operators "+operatorArray)
            accumulate.splice(0,accumulate.length)
            switchBoard()
            accumulate.push(input.innerText);
            console.log("final array is "+finalArray)
        }

        
    }








    if (nums!=="="){
            operatorArray.push(nums)
        }

        finalArray.push(parseFloat(accumulate.splice(0,accumulate.length-1.).join('')))
        accumulate.splice(0,accumulate.length)
        console.log(accumulate, finalArray)

        if (nums == "="){
            
            switchBoard()
        }

        if (operatorArray.length==2){
            console.log("operations"+operatorArray)
            console.log(finalArray)
            let test = (switchBoard())
            accumulate.splice(0, accumulate.length)
            accumulate.push(test);

            console.log("nigga "+accumulate)
        }
    }
