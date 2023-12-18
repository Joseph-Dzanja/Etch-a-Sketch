let grid_container = document.querySelector("#grid-container");
let btn0 = document.querySelector("#btn");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let popup = document.querySelector("#popup");
let popup2 = document.querySelector("#popup2");
let numOfSqaures = document.querySelector("#numSquares").value;
let box = document.querySelectorAll('.colBox');
let Scolor;
// if background is blue do this....
let exit = document.getElementById("exit");
let checkBox = document.getElementById("bord");
let checkBoxs = document.getElementById("bord");
function myFunction() {
    // Get the checkbox
    
    // Get the output text
    
    
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      removeborders();
      
    } else {
      addborders();
      
    }
  }
function showpopup()
{
    popup.style.cssText = "display: block";
}

function hidepopup()
{
    popup.style.cssText = "display: none";
}
function showpopup2()
{
    popup2.style.cssText = "display: block";
}

function hidepopup2()
{
    popup2.style.cssText = "display: none";
}
function style()
{
    btn0.style.cssText = "background-color: lightblue";
    btn2.style.cssText = "background-color: white";
    btn1.style.cssText = "background-color: white";
    btn3.style.cssText = "background-color: white";
}
function style2()
{
    btn1.style.cssText = "background-color: lightblue";
    btn2.style.cssText = "background-color: white";
    btn3.style.cssText = "background-color: white";
}
function style3()
{
    btn2.style.cssText = "background-color: lightblue";
    btn1.style.cssText = "background-color: white";
    btn3.style.cssText = "background-color: white";
}
function style4()
{
    btn3.style.cssText = "background-color: lightblue";
    btn2.style.cssText = "background-color: white";
    btn1.style.cssText = "background-color: white";
}
function removestyle()
{
    btn0.style.cssText = "background-color: white";
    btn2.style.cssText = "background-color: lightblue";
}



function boxes(numOfSqaures)
{
    for(let i = 0; i <numOfSqaures; i++)
    {   
        let rowBox = document.createElement('div');
        rowBox.classList.add('rowBox');
        grid_container.appendChild(rowBox);

        for(let j = 0; j <numOfSqaures; j++)
        {
            let colBox = document.createElement('div');
            colBox.classList.add('colBox');
            rowBox.appendChild(colBox);
        }
        
    }
    console.log("it run");
    box = document.querySelectorAll(".colBox");
    console.log(box);
    document.getElementById("bord").checked = false;
}

function remove()
{
    //grid_container.removeChild(grid_container.squares);
    while (grid_container.hasChildNodes()) {
        grid_container.removeChild(grid_container.firstChild);
      }
}

function colorArray()
{
        var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    
        
        var random = Math.floor(Math.random() * colorArray.length);
        return (colorArray[random]);
        
}
function removeborders()
{
    
    for(let i =0; i < squares.length;i++)
    {
        let box = squares[i];
        box.style.cssText = "border: 0.5px solid rgba(0, 0, 0, 0)";
    }
    theColor();
    style3();
}
function addborders()
{
    
    for(let i =0; i < squares.length;i++)
    {
        let box = squares[i];
        box.style.cssText = "border: 0.5px solid rgba(0, 0, 0, 0.2)";
    }
    theColor();
    style3();
}

function theColor()
{
        for (let i = 0; i < squares.length; i++) 
        {
            function mid()
            {
                let co = colorArray();
                colors.style.cssText = `background-color: ${co}`;
            }
        let colors = squares[i];
        colors.addEventListener('mouseover', mid);
        }
        console.log('not again');
} 

function theColor2()
{
        for (let i = 0; i < squares.length; i++) 
        {
            function mid()
            {
                let co = Scolor;
                colors.style.cssText = `background-color: ${co}`;
            }
        let colors = squares[i];
        colors.addEventListener('mouseover', mid);
        }
} 

function theColor3()
{
    if(checkBox.checked == true)
    {
        for (let i = 0; i < squares.length; i++) 
        {
            function mid()
            {
                let co = "#ffffff";
                
                colors.style.cssText = `background-color: ${co}`;
                colors.style.cssText = "border: 0.5px solid rgba(0, 0, 0, 0)";
            }
        let colors = squares[i];
        colors.addEventListener('mouseover', mid);
        }
    }
    else{
        for (let i = 0; i < squares.length; i++) 
        {
            function mid()
            {
                let co = "#ffffff";
                colors.style.cssText = `background-color: ${co}`;
            }
        let colors = squares[i];
        colors.addEventListener('mouseover', mid);
        }
    }

} 

let form = document.getElementById("form1");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    hidepopup();
    // handle submit
    numOfSqaures = document.getElementById("numSquares").value;
    remove();
    boxes(numOfSqaures);
    squares = document.querySelectorAll('.colBox');
    theColor();
    removestyle();

});

let form2 = document.getElementById("form2");

  form2.addEventListener("submit", (e) => {
    e.preventDefault();
    hidepopup2();
    // handle submit
    Scolor = document.getElementById("onecolor").value;
    console.log(Scolor);
    squares = document.querySelectorAll('.colBox');
    theColor2();
    
});

//start
btn0.addEventListener('click', showpopup);
btn1.addEventListener('click', showpopup2);
btn2.addEventListener('click', theColor);
btn3.addEventListener('click', theColor3);

boxes(50);
checkBox.addEventListener('click', myFunction);
style3();
let squares = document.querySelectorAll('.colBox');

theColor();
btn0.addEventListener('click', style);
btn1.addEventListener('click', style2);
btn2.addEventListener('click', style3);
btn3.addEventListener('click', style4);
































































































































/*

let grid_container = document.getElementById("grid-container");
keep = 16;
let colorz;

function boxes()
{
    for(let i = 0; i <keep; i++)
    {   
        let div = document.createElement('div');
        div.classList.add('squares');
        grid_container.appendChild(div);

        for(let j = 0; j <keep; j++)
        {
            let divs = document.createElement('div');
            divs.classList.add('squarez');
            div.appendChild(divs);
        }
        
    }
    console.log("it run");

}
boxes();

function changeboxes()
{
    let numBoxes = document.getElementById("numsquares").value;
    console.log(numBoxes);

}

changeboxes();

function colorchanger()
{
        var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    
        
        var random = Math.floor(Math.random() * colorArray.length);
        return (colorArray[random]);
        
}

function remove()
{
    //grid_container.removeChild(grid_container.squares);
    while (grid_container.hasChildNodes()) {
        grid_container.removeChild(grid_container.firstChild);
      }
}
let color = document.querySelectorAll('div.squarez');
function theColor()
{
    

    
        for (let i = 0; i < color.length; i++) 
        {
            
            function mid()
            {
                let co = colorchanger();
                console.log(co);
                colors.style.cssText = `background-color: ${co}`;
            }
        let colors = color[i];
        colors.addEventListener('click', mid);
        console.log("am running");
        }
    } 

function theColor2()
{
        

        for (let i = 0; i < color.length; i++) 
        {
            function mid2()
            {
                let co = colorz;
                console.log(co);
                colors.style.cssText = `background-color: ${co}`;
            }
        let colors = color[i];
        colors.addEventListener('click', mid2);
        console.log("am running2");
        }
    
}

function theColor3()
{
    
        for (let i = 0; i < color.length; i++) 
        {
            
            function mid3()
            {
                let co = "white";
                console.log(co);
                colors.style.cssText = `background-color: ${co}`;
            }
        let colors = color[i];
        colors.addEventListener('click', mid3);
        }
    
}




let btn1 = document.getElementById("btn1");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", theColor);
btn1.addEventListener("click", theColor2);
btn2.addEventListener("click", theColor3);













let btn = document.querySelector("#btn");
let popup = document.querySelector("#popup");
btn.addEventListener("click", show);
function show()
{
    popup.style.cssText = "display: block";
}
let submit = document.querySelector("#submit")
submit.addEventListener("click", dontshow);
function dontshow()
{
    popup.style.cssText = "display: none";
}

*/