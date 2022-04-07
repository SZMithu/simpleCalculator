

  var number = document.querySelectorAll('.number');
  var presentDisplay = document.getElementById('display-present');
  var pastDisplay = document.getElementById('display-past');
  var mathDisplay = document.getElementById('display-math');
  var operator = document.querySelectorAll('.operator');
  var acButton = document.querySelector('#ac');
  var equalButton = document.querySelector('.equal');
  var delButton = document.querySelector('.del');
  var operatorCount = 0;

  acButton.addEventListener('click', () =>{
    presentDisplay.innerText = "";
    pastDisplay.innerText = "";
    mathDisplay.innerText = "";
    operatorCount = 0;
  });
  
  delButton.addEventListener('click', () =>{
    presentDisplay.innerText = presentDisplay.innerText.slice(0,-1);
    operatorCount = 0;
  });

  equalButton.addEventListener('click', () =>{
    calculator();
  });
  


for(var i = 0; i < number.length; i++){

  number[i].addEventListener('click', function() {
   presentDisplay.append(this.innerText);
   operatorCount = 0;
   
     if((presentDisplay.innerText.length > 17)){
      presentDisplay.classList.add("display-present");
        }else{
          presentDisplay.classList.remove("display-present")
        };
   });
}

for(var i=0; i<operator.length; i++){
  operator[i].addEventListener('click', function() {
    operatorCount++;
    
    if((presentDisplay.innerText.length==0)&&(this.innerText=="-")&&(operatorCount == 1)&&(mathDisplay.innerText.length==0)){
      presentDisplay.innerText = this.innerText;
      
    }else if((presentDisplay.innerText.length>0)&&(pastDisplay.innerText.length==0)&&(presentDisplay.innerText!="-")){
      mathDisplay.innerText = this.innerText;
      pastDisplay.append(presentDisplay.innerText);
      presentDisplay.innerText = "  ";
      displayWithOperator();
      
      
    }else if((presentDisplay.innerText.length>0)&&(pastDisplay.innerText.length > 0)){
               calculator();
               mathDisplay.innerText = this.innerText;
               presentDisplay.innerText = "  ";
               displayWithOperator();
               
      }else if((presentDisplay.innerText.length==0)&&(pastDisplay.innerText.length > 0)&&(operatorCount > 0)){
        presentDisplay.innerText = this.innerText;
      }
            
  })
}


function displayWithOperator() {
  pastDisplay.classList.remove("display-past");
  pastDisplay.classList.add("display-past-operator");
  presentDisplay.classList.remove("display-present");
  presentDisplay.classList.add("display-present-operator");
}

function calculator() {
  operatorCount = 0;
  if(mathDisplay.innerText == '+'){
    pastDisplay.innerText = Number(pastDisplay.innerText) + Number(presentDisplay.innerText);
    mathDisplay.innerText = "";
    presentDisplay.innerText = "";
  }
  else if(mathDisplay.innerText == '-'){
    pastDisplay.innerText = Number(pastDisplay.innerText) - Number(presentDisplay.innerText);
  mathDisplay.innerText = "";
  presentDisplay.innerText = "";
  }
  else if(mathDisplay.innerText == '*'){
    pastDisplay.innerText = Number(pastDisplay.innerText) * Number(presentDisplay.innerText);
  mathDisplay.innerText = "";
  presentDisplay.innerText = "";
  }
  else if(mathDisplay.innerText == '/'){
    pastDisplay.innerText = Number(pastDisplay.innerText) / Number(presentDisplay.innerText);
  mathDisplay.innerText = "";
  presentDisplay.innerText = "";
  }
}





