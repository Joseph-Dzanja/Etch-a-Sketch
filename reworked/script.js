let grid = document.querySelector('.grid');
let pickedColor = document.querySelector('#color');
let boxNum = document.querySelector('#boxNumber');
let multi = document.querySelector('#multi');
let erase = document.querySelector('#erase');
let clear = document.querySelector('#clear');
let shade = document.querySelector('#shade');
let label = document.querySelector('label');
label.innerText = `${boxNum.value} by ${boxNum.value}`;
let mycolor = 'rgb(255,255,255)';


function darkenOpacity() {
    if (opacity > 0) {
        opacity -= 0.1; // Decrease opacity by 0.1
    }
    box.style.opacity = opacity.toFixed(1); // Update opacity and round to 1 decimal place
}

function colorArray()
{
        var colorsArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    
        
        var random = Math.floor(Math.random() * colorsArray.length);
        return (colorsArray[random]);
        
}

    pickedColor.addEventListener('change', () => {
        // pickedColor.classList.add('active');
        multi.classList.remove('active');
        erase.classList.remove('active');
        shade.classList.remove('active');
        mycolor = pickedColor.value;
    })
    pickedColor.addEventListener('click', () => {
        mycolor = pickedColor.value;
        multi.classList.remove('active');
        erase.classList.remove('active');
        shade.classList.remove('active');
        pickedColor.classList.add('activeToo');
    })
    multi.addEventListener('click', () => {
        pickedColor.classList.remove('activeToo');
        multi.classList.add('active');
        erase.classList.remove('active');
        shade.classList.remove('active');
    })
    erase.addEventListener('click', () => {
        pickedColor.classList.remove('activeToo');
        multi.classList.remove('active');
        erase.classList.add('active');
        shade.classList.remove('active');
        mycolor = 'rgb(255,255,255)';
    })
    shade.addEventListener('click' , () => {
        pickedColor.classList.remove('activeToo');
        multi.classList.remove('active');
        erase.classList.remove('active');
        shade.classList.add('active');
        mycolor = 'opacity';
    })
    clear.addEventListener('click', () => {
        while(grid.lastChild){
            grid.removeChild(grid.lastChild);
        }
        createGrid()
    })


boxNum.addEventListener('change', () => {
    while(grid.lastChild){
        grid.removeChild(grid.lastChild);
    }
    label.innerText = `${boxNum.value} by ${boxNum.value}`;
    createGrid()
})

boxNum.addEventListener('input', () => {
    label.innerText = `${boxNum.value} by ${boxNum.value}`;
})

let isMouseDown = false;
function createGrid(){
    for(let i = 0; i < boxNum.value; i++){
        let rowBox = document.createElement('div');
        rowBox.classList.add('row')
        for(let j = 0; j < boxNum.value; j++){
            let colBox = document.createElement('div');
            colBox.classList.add('col');
            colBox.style.backgroundColor = 'rgb(255,255,255)';
            colBox.addEventListener('mousedown', () => {
                isMouseDown = true;
            })
            colBox.addEventListener('mouseup', () => {
                isMouseDown = false;
            })
            colBox.addEventListener('mousemove', () => {
                if(multi.classList.contains('active')){
                    if(isMouseDown){
                        colBox.style.cssText = `background-color: ${colorArray()}`;
                    }
                }
                else if(shade.classList.contains('active')){
                    if(isMouseDown){
                        
                        var currentColor = colBox.style.backgroundColor;
                        var rgbValues = currentColor.match(/\d+/g); // Extract RGB values from current color
                        var r = parseInt(rgbValues[0]);
                        var g = parseInt(rgbValues[1]);
                        var b = parseInt(rgbValues[2]);
            
                        // Increase shade towards black
                        if (r > 0 || g > 0 || b > 0) {
                            r = Math.max(r - 1, 0);
                            g = Math.max(g - 1, 0);
                            b = Math.max(b - 1, 0);
                        }
            
                        // Update the background color
                        colBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                    }
                }
                else if(isMouseDown){
                    colBox.style.cssText = `background-color: ${mycolor}`;
                }
                
            })

            function getTouchedElement(x, y) {
                return document.elementFromPoint(x, y);
              }

            function handleTouchMove(event) {
                
                const touch = event.touches[0];
                const touchedElement = getTouchedElement(touch.clientX, touch.clientY);
          
                if (touchedElement && touchedElement.classList.contains('col') && multi.classList.contains('active')) {
                    event.preventDefault();
                  // Trigger the event (e.g., change background color)
                  touchedElement.style.backgroundColor = `${colorArray()}`;
                }
                
                else if (touchedElement && touchedElement.classList.contains('col') && erase.classList.contains('active')) {
                    event.preventDefault();
                    // Trigger the event (e.g., change background color)
                    touchedElement.style.backgroundColor = 'rgb(255,255,255)';
                  }

                else if (touchedElement && touchedElement.classList.contains('col') && pickedColor.classList.contains('activeToo')) {
                    event.preventDefault();
                  // Trigger the event (e.g., change background color)
                  touchedElement.style.backgroundColor = `${mycolor}`;
                }
                
              }

            grid.addEventListener('touchstart', handleTouchMove)
            grid.addEventListener('touchmove', handleTouchMove)
            colBox.addEventListener('click', () => {
                if(multi.classList.contains('active')){
                    colBox.style.cssText = `background-color: ${colorArray()}`;
                }
                else if(shade.classList.contains('active')){
                    
                        var currentColor = colBox.style.backgroundColor;
                        var rgbValues = currentColor.match(/\d+/g); // Extract RGB values from current color
                        var r = parseInt(rgbValues[0]);
                        var g = parseInt(rgbValues[1]);
                        var b = parseInt(rgbValues[2]);
            
                        // Increase shade towards black
                        if (r > 0 || g > 0 || b > 0) {
                            r = Math.max(r - 15, 0);
                            g = Math.max(g - 15, 0);
                            b = Math.max(b - 15, 0);
                        }
            
                        // Update the background color
                        colBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                    
                }
                else{
                colBox.style.cssText = `background-color: ${mycolor}`;
                }
            })
            document.addEventListener('mouseup', () => {
                isMouseDown = false;
            })
            rowBox.appendChild(colBox);
        }
        grid.appendChild(rowBox);
    }
}
createGrid();



