// numbering first task
$('body').append('<h3># 1</h1>');

// first task
let button = "<button>Submit</button>";
$('body').append(button);
$('button').attr('class', 'btn1');



$('.btn1').on('click', function(e) {
    alert("hi friend :)");
});

// numbering second task
$('body').append('<h3># 2</h3>');