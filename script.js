
$(document).ready(function () {

    $('.add-row').click(function(){
        console.log("working")
        $('.col').last().clone().appendTo('.row')
    })
    
    $('.del-row').click(function(){
        $('.row').last().remove()
    })
    
    $('.add-col').click(function(){
        console.log("working")
        $('.one').last().clone().appendTo('.row')
    })
    
    
    $('.del-col').click(function(){
        $('.col').last().remove()
    })
    
    $('.changeAll').click(function (){
    let changeColor = $('#changeAll').val()
    $('.row').children().each(function (){
     $(this).css('background-color' , 'blue')
    
    })
    })
    
    
    $('.changeWhite').click(function (){
        let changeColor = $('#changeWhite').val()
        $('.row').children().each(function (){
       //if ($(this).css('background-color') == 'white'){
        $(this).css('background-color' , 'red')
       }
        )
        
        })
        
    
    
    
    
    
        
    
        $('.box').click(function () {
            console.log("Inside one - mouse clicked")
            let red = document.querySelector('.box')
            red.innerText = "Red"
    
            $(this).css('background-color', "red")
            $(this).addClass("red").removeClass('blue')
            
    
        })
    
        $('.py-2').click(function () {
            console.log("Inside one - mouse clicked")
            let blue = document.querySelector('.py-2')
            blue.innerText = "Blue"
    
            $(this).css('background-color', "blue")
            $(this).addClass("blue").removeClass('red')
    
        })
    
       
        $('.change-to-yellow').click(function () {
    
            $('.row').children().each(function () {
                $(this).css('background-color', "yellow")
            })
    
        })
        $('.change-to-blue').click(function () {
    
            $('.row').children().each(function () {
                $(this).css('background-color', "blue")
            })
    
        })
        $('.change-to-red').click(function () {
    
            $('.row').children().each(function () {
                $(this).css('background-color', "red")
            })
    
        })
    
    
        $('.change-to-green').click(function () {
    
            $('.row').children().each(function () {
                $(this).css('background-color', "green")
            })
    
        })
    
    
        $('.change-to-pink').click(function () {
    
            $('.row').children().each(function () {
                $(this).css('background-color', "pink")
            })
    
        })
    
        $('.change-to-white').click(function () {
    
            $('.row').children().each(function () {
                $(this).css('background-color', "white")
            })
    
        })
    
        let isDown = false
        $(document).mousedown(function () {
            isDown = true
        }).mouseup(function () {
            isDown = false
        })
    
    
    
    $('.row').children().mouseover(function (){
        if(isDown){
            $(this).css('background-color', $('#dragColor').val())
        }
    }
    )
    
    $('.row').children().hover(function (){
        $(this).css('background-color', $('#clickColor').val())
    })
    
    
    
    
    
    
    
        $('.row').hover(function () {
            if (isDown) {
                let currentSize = $('.row').css('font-size');
                currentSize = parseFloat(currentSize) * 1.5;
                $(this).css('font-size', currentSize)
            } else {
                let currentSize = $('.row').css('font-size');
                currentSize = 16;
                $(this).css('font-size', currentSize)
            }
        })
    
        $('.row').click(function () {
            let color = document.querySelector("#colors")
            console.log(color.value)
        })
    
    })
    
    
    
    
    
    $('.AddNew').click(function(){
        let row = $(this).closest('tr').clone();
        row.find('input').val('');
        $(this).closest('tr').after(row);
        $('input[type="button"]', row).removeClass('AddNew')
                                      .addClass('RemoveRow').val('Remove item');
     });
     
     $('table').on('click', '.RemoveRow', function(){
       $(this).closest('tr').remove();
     });
    
    
    