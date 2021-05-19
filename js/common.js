$(document).ready(function(){
    // parallax
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    // accordeon plus minus

    $('.accordeon-title').click(function(){
        $('.accordeon-title').not($(this)).removeClass('minus');
        $(this).toggleClass('minus');
    });

    // to top
    $('.totop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });


});