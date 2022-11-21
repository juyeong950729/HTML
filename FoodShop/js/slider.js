
$(function(){

    let slides = $('.slider > article > ul > li');
    let i = 0;

    setInterval(()=>{

        slides.eq(i).animate({'left' : '-100%'}, 1000);
        i++;

        if(i >= 5){
            i=0;
        }

        slides.eq(i).css('left','100%').animate({'left' : '0'}, 1000);
    }, 5000);


    let width1 = $('.vegetable ul > li:first-child').outerWidth();
    let width2 = $('.seafood ul > li:first-child').outerWidth();

    setInterval(function(){
        let list1 = $('.vegetable ul > li');
        let list2 = $('.seafood ul > li');

        list1.each(function(i){
            $(this).animate({'left': (i-1)*width1 + 'px'}, 1000, function(){
                if (i==0){
                    $('.vegetable ul > li:first-child').css('left', '1918px').appendTo('.vegetable ul');
                }
            });
        });

        list2.each(function(i){
            $(this).animate({'left': (i-1)*width2 + 'px'}, 1000, function(){
                if (i==0){
                    $('.seafood ul > li:first-child').css('left', '1918px').appendTo('.seafood ul');
                }
            });
        });
    }, 5000);

});