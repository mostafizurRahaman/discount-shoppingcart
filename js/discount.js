function getInputValue(inputId){
   const inputField = document.getElementById(inputId); 
   const inputValue = inputField.value; 
   inputField.value = ""; 
  return inputValue; 
}
function checkNan(num){
   num = parseFloat(num); 
   if(isNaN(num)=== true){
      alert("You Cann't get Discount"); 
      return 0; 
   }
   return num; 
}
function getElementValue(inputId){
   const element = document.getElementById(inputId); 
   const elementValueString = element.innerText; 
   const elementValue = parseFloat(elementValueString); 
   return elementValue ; 
}

function calculateDiscount(price , discount){
   regularPrice = price - ((price*discount)/ 100);
   return regularPrice;  
}

function setElementValue(inputId, newValue){
   const inputField = document.getElementById(inputId); 
   inputField.innerText = newValue; 
}

document.getElementById('discount-btn').addEventListener('click', function(){
      const discountCupon = getInputValue('inputField'); 
      const discount    = checkNan(getInputValue("discountField")); 
      const regularPrice = getElementValue("regularPrice");
      if(discountCupon === "DOM"){
         discountPrice = calculateDiscount(regularPrice, discount); 
        setElementValue('discountPrice',discountPrice); 
      }else{
         alert("Cupon not fount !!! Sorry you can't get discount from us"); 
         setElementValue("discountPrice", regularPrice);
          
      }

}); 
