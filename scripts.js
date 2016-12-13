//Jquery

$(document).ready(function() {

    // Prevent a the form from refreshing page
    $('form').submit(function() {
        event.preventDefault();

        $('input').each(function() {
            var currentTagId = $(this).attr('id');
            var errorClass = '.' + currentTagId + '-error';
            console.log(errorClass);
            if ($(this).val() === '') {
                $(errorClass).html("Field cannot be empty.");
                $(errorClass).show();
            } else {
                $(errorClass).hide();
            }
        });
    });

});
