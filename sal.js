 
     
 var car_prices = new Array();
 car_prices["Hyundai Accent"]=20;
 car_prices["Nissan Versa"]=25;
 car_prices["Toyota Yaris"]=35;
 car_prices["Kia Rio"]=75;
 

 var time_prices= new Array();
 time_prices["None"]=0;
 time_prices["1day"]=5;
 time_prices["2days"]=10;
 time_prices["one week"]=30;
 time_prices["fortnight"]=60;
 time_prices["one month"]=140;
 
   
   

function getCarPrice()
{  
    var carPrice=0;
    
    var theForm = document.forms["carform"];
    
    var selectedCar = theForm.elements["selectedcar"];
   
    for(var i = 0; i < selectedCar.length; i++)
    {
        
        if(selectedCar[i].checked)
        {
            
            carPrice = car_prices[selectedCar[i].value];
            
            break;
        }
    }
    
    return carPrice;
}


function getTimePrice()
{
    var carTimePrice=0;
    
    var theForm = document.forms["carform"];

     var selectedTime = theForm.elements["time"];
     
    
    carTimePrice = time_prices[selectedTime.value];

    
    return carTimePrice;
}


function Insurance()
{
    var insurance=0;
    
    var theForm = document.forms["carform"];
    
    var includeInsurance = theForm.elements["includeinsurance"];

    
    if(includeInsurance.checked==true)
    {
        insurance=10;
    }
    
    return insurance;
}

function Accesories()
{
    
    var accesoriesPrice=0;

    var theForm = document.forms["carform"];
    
    var includeAccesories = theForm.elements["includeaccesories"];
    
    if(includeAccesories.checked==true){
        accesoriesPrice=20;
    }
    
    return accesoriesPrice;
}
        
function calculateTotal()
{
    
    var carPrice = getCarPrice() + getTimePrice() + Insurance() + Accesories();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
   //var divobj = $("#totalPrice");
    divobj.style.display='block';
    divobj.innerHTML = "Final booking cost $"+carPrice;

}

function hideTotal()
{
    //var divobj = document.getElementById('totalPrice');
    var divobj = $("#totalPrice");
    divobj.style.display='none';
}

