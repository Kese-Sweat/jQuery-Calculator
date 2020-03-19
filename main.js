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









//Having difficulties trying to add function to button. Found out that i was writing the code wrong in JS





// CREATED A FUNCTION THAT WILL DISPLAY VALUE

function dis(val) 
{ 
    document.getElementById("result").value+=val 
} 

function solve()
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
    // WILL RETURN RESULTS
} 

function clr()
{ 
    document.getElementById("result").value = "" 
} 


// I DO NEED ASSISTANCE WITH USING THE "$()" SELECTOR, TO CALL A FUNCTION THAT WILL DISPLAY A VALUE