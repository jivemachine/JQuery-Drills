$('document').ready(function () {

    $('#btnSubmit').on("click", function (e) {
        e.preventDefault(); // stops page from refreshing on submit
        var el = $('input:text').val(); // select input with type text
        let h2 = "<h2>" + el + "</h2>"; // create h2 element w/ el contents
        $("div").append(h2); // append h2 inside div

        alert(el); // alert el contents
    });

    // appending div to end of script
    let div = "<div></div>";
    $("body").append(div);

    var $btn = $('#btnSubmit'); // selecting btn id
    $btn.attr('disabled', true); // defaulting button to diabled

    // listening for input text
    $(document).on('input', 'input:text', function() {
        $('#btnSubmit').removeAttr('disabled'); // remove disabled button if input value is detected
    });

    // found this function on stack overflow
    // $input.keyup(function () {
    //     var trigger = false;
    //     $input.each(function () {
    //         if (!$(this).val()) {
    //             trigger = true;
    //         }
    //     });
    //     trigger ? $btn.attr('disabled', true) : $btn.removeAttr('disabled');
    // });




});