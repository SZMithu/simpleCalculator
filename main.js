

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
    calculator();
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
               
               calculator();
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

function calculator() {
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





