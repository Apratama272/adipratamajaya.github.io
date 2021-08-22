// jQuery
$('.menu_hamburger').click(function () {
    $(this).toggleClass('active');
});;

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});