$(document).ready(function(){
    $('.right').click(function(){
        $('#box').css(
            { left: '+=10px'}
        );
    })
})
$(document).ready(function(){
    $('.left').click(function(){
        $('#box').css(
            { left: '-=10px'}
        );
    })
})
$(document).ready(function(){
    $('.up').click(function(){
        $('#box').css(
            { top: '-=10px'}
        );
    })
})
$(document).ready(function(){
    $('.down').click(function(){
        $('#box').css(
            { top: '+=10px'}
        );
    })
})