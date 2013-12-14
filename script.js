$(document).ready(function () {
    $('button').click(function () {
        $('#todos').append("<ul>" + $("input[name=task]").val() + " <a href='#'>[X]</a></ul>");
    });
    $("body").on('click', '#todos a', function () {
        $(this).closest("ul").remove();
    });
});
