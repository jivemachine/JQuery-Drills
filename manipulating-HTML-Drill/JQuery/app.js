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

// third task
let $div = "<div></div>";
$('body').append($div);
$('div:last').addClass('div3');
$('.div3').css({
    'background-color': 'black',
    'height': '50px',
    'width': '50px',
});

$('.div3').on('mouseenter', changeBg);
$('.div3').on('mouseleave', changeBgBack);

function changeBg() {
    $(this).css('background-color', 'blue');
}

function changeBgBack() {
    $(this).css('background-color', 'black');
}

// numbering fourth task
$('body').append('<h3># 4</h1>');

// fouth task
let p = "<p></p>";
$('body').append(p);
$('p:last').addClass('p4');
$('.p4').append("some text")

$('.p4').on('click', colorChng);

function colorChng() {
    let colorArray = ['orange', 'blue', 'purple', 'pink'];
    let max = 3;
    let choice = Math.floor(Math.random() * max);
    let color = colorArray[choice];

    $(this).css('color', color);
}

// numbering fifth task
$('body').append('<h3># 5</h1>');