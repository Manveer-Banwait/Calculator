# Calculator



body {
    padding: 0;
    margin: 0;
    background: black;

}

.grid-container {
    display: grid;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
}

/* .grid-container > button {
    cursor: pointer;
    height: 7vw;
    width: 7vw;
    border-radius: 50%;
    font-size: 2rem;
    border: 1px;
    outline: none;
} */

.grid-container > button:hover {

 animation: myfirst 1s 0.5;

  
}
.gamboge{
    background-color: #e49b0f;
}

@keyframes myfirst
{
    0%      {background:gray;}
    25%     {background:lightgrey;}
    75%     {background:lightgrey;}
    100%    {background:gray;}
}

------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>calculator</title>
    <link rel="stylesheet" href="styling.css">
    <script src="script.js" defer ></script>
</head>

<body>
    <div class="grid-container">

        <div class ="screen">

            <div class = "history"></div>
            <div class = "current"></div>

        </div>

        
    <button>0</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    <button>8</button>
    <button>1</button>
    <button class= gamboge>←</button>
    <button class= gamboge>÷</button>
    <button class= gamboge>×</button>
    <button class= gamboge>+</button>
    <button class= gamboge>-</button>
    <button class= gamboge>.</button>

    </div>

  
    
</body>

</html>