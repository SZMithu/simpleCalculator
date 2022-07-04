

  var number = document.querySelectorAll('.number');
  var presentDisplay = document.getElementById('display-present');
  var pastDisplay = document.getElementById('display-past');
  var mathDisplay = document.getElementById('display-math');
  var operator = document.querySelectorAll('.operator');
  var acButton = document.querySelector('#ac');
  var equalButton = document.querySelector('.equal');
  var delButton = document.querySelector('.del');
  

  acButton.addEventListener('click', () =>{
    presentDisplay.innerText = "";
    pastDisplay.innerText = "";
    mathDisplay.innerText = "";
    
  });
  
  delButton.addEventListener('click', () =>{
    presentDisplay.innerText = presentDisplay.innerText.slice(0,-1);
    
  });

  equalButton.addEventListener('click', () =>{
    calculator.calculate();
  });
  


for(var i = 0; i < number.length; i++){

  number[i].addEventListener('click', function() {
   presentDisplay.append(this.innerText);
   
   
     if((presentDisplay.innerText.length > 17)){
      presentDisplay.classList.add("display-present");
        }else{
          presentDisplay.classList.remove("display-present")
        };
   });
}

for(var i=0; i<operator.length; i++){
  operator[i].addEventListener('click', function() {
    
    
    if(presentDisplay.innerText.length == 0 && mathDisplay.innerText.length == 0 && pastDisplay.innerText.length == 0 && this.innerText=="-" ){
       
               presentDisplay.innerText = this.innerText;

    }else if(presentDisplay.innerText.length>0 && presentDisplay.innerText != "-" && pastDisplay.innerText.length==0){
      
               mathDisplay.innerText = this.innerText;
               pastDisplay.append(presentDisplay.innerText);
               presentDisplay.innerText = "  ";
               displayWithOperator();
      
      
    }else if((presentDisplay.innerText.length>0)&&(pastDisplay.innerText.length > 0)){
               
               calculator.calculate();
               mathDisplay.innerText = this.innerText;
               presentDisplay.innerText = "  ";
               displayWithOperator();
               
    }else if(presentDisplay.innerText.length==0 && pastDisplay.innerText.length > 0 &&this.innerText=="-" && mathDisplay.innerText.length>0){

              presentDisplay.innerText = this.innerText;
      
    }else if(presentDisplay.innerText.length==0 && pastDisplay.innerText.length > 0 && mathDisplay.innerText.length == 0){

              mathDisplay.innerText = this.innerText;
    }
            
  })
}

function displayWithOperator() {
    pastDisplay.classList.remove("display-past");
    pastDisplay.classList.add("display-past-operator");
    presentDisplay.classList.remove("display-present");
    presentDisplay.classList.add("display-present-operator");
  }

class Calculator {
    constructor(presentDisplay, mathDisplay, pastDisplay) {
        this.display1 = presentDisplay
        this.display2 = mathDisplay
        this.resultDisplay = pastDisplay
    }
    calculate () {
        var display1 = Number(pastDisplay.innerText)
        var display2 = Number(presentDisplay.innerText)
    if(mathDisplay.innerText == '+'){
        pastDisplay.innerText = display1 + display2;
        mathDisplay.innerText = "";
        presentDisplay.innerText = "";
    }
    else if(mathDisplay.innerText == '-'){
        pastDisplay.innerText = display1 - display2;
        mathDisplay.innerText = "";
        presentDisplay.innerText = "";
    }
    else if(mathDisplay.innerText == '*'){
        pastDisplay.innerText = display1 * display2;;
        mathDisplay.innerText = "";
        presentDisplay.innerText = "";
    }
    else if(mathDisplay.innerText == '/'){
        pastDisplay.innerText = display1 / display2;;
        mathDisplay.innerText = "";
    presentDisplay.innerText = "";
    }
 }
}
 var calculator = new Calculator(presentDisplay, mathDisplay, pastDisplay)






