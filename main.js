$('.buttonOne').click(function (){

var num1 =  parseInt($('.numOne').val());
var num2 =  parseInt($('.numTwo').val());
var total= (num1 + num2) ;

 $('.answer').val(total);


})


$('.buttonTwo').click(function (){

    var num1 =  parseInt($('.numOne').val());
    var num2 =  parseInt($('.numTwo').val());
    var total= (num1 - num2) ;
    
     $('.answer').val(total);
    
    
    })


    $('.buttonThree').click(function (){

        var num1 =  parseInt($('.numOne').val());
        var num2 =  parseInt($('.numTwo').val());
        var total= (num1 * num2) ;
        
         $('.answer').val(total);
        
        
        })

        $('.buttonFour').click(function (){

            var num1 =  parseInt($('.numOne').val());
            var num2 =  parseInt($('.numTwo').val());
            var total= (num1 / num2) ;
            
             $('.calcDisplay').val(total);
            
            
            })



//I was having difficulties trying to add function to buttons. Found out that i was writing the code wrong in JS.







//CALCULATOR 2

// CREATED A FUNCTION THAT WILL DISPLAY A VALUE

function dis(val) 
{ 
    document.getElementById("result").value+=val 
} 

function solve()
{ 
    let a = document.getElementById("result").value 
    let b = eval(a) 
    document.getElementById("result").value = b
    // WILL RETURN RESULTS
} 

function clr()
{ 
    document.getElementById("result").value = "" 
} 


// I DO NEED ASSISTANCE WITH USING THE "$()" SELECTOR, TO CALL A FUNCTION THAT WILL DISPLAY A VALUE