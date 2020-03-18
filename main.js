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
            
             $('.answer').val(total);
            
            
            })









//Having difficulties trying to add function to button







$(".number").click(function(event) {
   $(".calculatorTwo.calcDisplay.value")
   




})


// no clue on how to input the value in my calcDisplay