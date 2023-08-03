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

// task two
let $button = "<button class='btn2'>submit</button>";
let $textBox = '<input type="textbox" class="input2">';
$('body').append($textBox);
$('body').append($button);

$('.btn2').on('click', alertF);

function alertF() {
    let element = $('.input2');
    alert(element.val());
}

// numbering third task
$('body').append('<h3># 3</h3>');