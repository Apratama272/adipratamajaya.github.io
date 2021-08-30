// jQuery
$('.Hamburger_menu').click(function () {
    $(this).toggleClass('active');
});;

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});