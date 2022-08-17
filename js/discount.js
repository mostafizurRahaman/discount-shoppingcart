function getInputValue(inputId){
   const inputField = document.getElementById(inputId); 
   const inputValue = inputField.value ; 
   inputField.value = ""; 
  return inputValue; 
}

function getElementValue(inputId){
   const element = document.getElementById(inputId); 
   const elementValueString = element.innerText; 
   const elementValue = parseFloat(elementValueString); 
   return elementValue ; 
}

function calculateDiscount(price , percentage){
   regularPrice = price - ((price*percentage)/ 100);
   return regularPrice;  
}

function setElementValue(inputId, newValue){
   const inputField = document.getElementById(inputId); 
   inputField.innerText = newValue; 
}



document.getElementById('discount-btn').addEventListener('click', function(){
      const cupon = getInputValue('inputField'); 
      const regularPrice = getElementValue('regularPrice');      

      if(cupon === "DOM"){
         setElementValue('discountPrice',calculateDiscount(regularPrice,30)); 
      }else{
         alert(`${cupon} is not valid !! you cannot get discount.`)
      }    
      
      
}); 

document.getElementById('discount-btn1').addEventListener('click', function(){
      const cupon = getInputValue('inputField1'); 
      const regularPrice = getElementValue('regularPrice1');      

      if(cupon === "DOM"){
         setElementValue('discountPrice1',calculateDiscount(regularPrice, 20)); 
      }else{
         alert(`${cupon} is not valid !! you cannot get discount.`)
      }    
      
      
}); 