$('document').ready(function () {

    $('#btnSubmit').on("click", function (e) {
        e.preventDefault(); // stops page from refreshing on submit
        var el = $('input:text').val(); // select input with type text
        // let h2 = "<h2>" + el + "</h2>"; // create h2 element w/ el contents
        // $("div").append(h2); // append h2 inside div

        let li = "<li>" + el + "</li>";
        $('ul').append(li);

        alert(el); // alert el contents
    });

    // appending div to end of script
    let div = "<div></div>";
    $("body").append(div);

    var $btn = $('#btnSubmit'); // selecting btn id
    $btn.attr('disabled', true); // defaulting button to diabled

    // listening for input text
    $(document).on('input', 'input:text', function () {
        $('#btnSubmit').removeAttr('disabled'); // remove disabled button if input value is detected
    });

    $('div').on("mouseover", h2UpdateHover);

    function h2UpdateHover(e) {
        var el = e.target;
        if (el.tagName == "H2") {
            $(el).css("background-color", "red").css("border-radius", "5rem");
        }
    };

    let ul = "<ul></ul>";
    $('body').append(ul);


    $('ul').on("click", liChangeColor);

    function liChangeColor(e) {
        var el = e.target;
        if (el.tagName == "LI") {
            $(el).css("color", randomColor);
        }
    };

    function randomColor() {
        let colorArray = ['red', 'yellow', 'blue', 'purple', 'green', 'goldenrod', 'black', 'seafoam'];
        let max = 7;

        let choice = Math.floor(Math.random() * max);
        let color = colorArray[choice];
        return color;
    }

    $('ul').on('dblclick', removeLi);

    function removeLi(e) {
        var el = e.target;
        if(el.tagName == "LI") {
            $(el).remove();
        }
    };
});