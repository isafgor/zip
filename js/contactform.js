$(document).ready(function($) {

    $(".ajax-contact-form").submit(function() {
    var str = $(this).serialize();

    $.ajax({
        type: "POST",
        url: "contact.php",
        data: str,
        success: function() {
            $('.js-overlay-campaing').fadeOut();

            $('.success').fadeIn();
            setTimeout(() => {
                $('.success').fadeOut();
            }, 5000)
        },
        error: function () {
            $('.unsuccess').fadeIn();
            setTimeout(() => {
                $('.unsuccess').fadeOut();
            }, 5000)
        }

    });
        return false;
    });
});