document.querySelector('.row1').addEventListener('click',function()
                                                    {
    document.getElementById("demo").innerHTML="Silver";
    document.querySelector('.image').src='silver'+'.jpg';
    
});
document.querySelector('.row2').addEventListener('click',function()
                                                    {
    document.getElementById("demo").innerHTML="Blue";
 document.querySelector('.image').src='blue'+'.jpg';});

document.querySelector('.row3').addEventListener('click',function()
                                                    {
    document.getElementById("demo").innerHTML="Black";
 document.querySelector('.image').src='grey'+'.jpg';
});

document.querySelector('.row4').addEventListener('click',function()
                                                    {
    document.getElementById("demo").innerHTML="Red";
 document.querySelector('.image').src='red'+'.jpg';});
document.querySelector('.row5').addEventListener('click',function()
                                                    {
    document.getElementById("demo").innerHTML="Bright-Brown";
 document.querySelector('.image').src='grey'+'.jpg';});

/*------------------------*/
document.querySelector('.bar-5').addEventListener('onload',move1());
document.querySelector('.bar-4').addEventListener('onload',move2());
document.querySelector('.bar-3').addEventListener('onload',move3());
document.querySelector('.bar-2').addEventListener('onload',move4());
document.querySelector('.bar-1').addEventListener('onload',move5());
function move1() {
   
  var elem = document.querySelector('.bar-5');   
  var width = 1;
    
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
       
    }
  }
    
}
function move2() {
   
  var elem = document.querySelector('.bar-4');   
  var width = 1;
    
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
    
}
function move3() {
   
  var elem = document.querySelector('.bar-3');   
  var width = 1;
    
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 15) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
    
}
function move4() {
   
  var elem = document.querySelector('.bar-2');   
  var width = 1;
    
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 66) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
    
}
function move5() {
   
  var elem = document.querySelector('.bar-1');   
  var width = 1;
    
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 20) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
    
}