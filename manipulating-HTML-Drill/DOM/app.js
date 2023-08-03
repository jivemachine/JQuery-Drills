// numbering first task
let one = document.createElement('h3');
let oneTxt = document.createTextNode('# 1');
one.append(oneTxt);

document.body.append(one);

// first task
let btn = document.createElement('button');
let btnTxt = document.createTextNode('Submit');
btn.append(btnTxt);

document.body.append(btn);

// num 2nd task
let two = document.createElement('h3');
let twoTxt = document.createTextNode('# 2');
two.append(twoTxt);
document.body.append(two);

// second task
let textBox = document.createElement('input');
let textBoxButton = document.createElement('button');
let textBoxButtonText = document.createTextNode("Submit");
textBoxButton.append(textBoxButtonText);
textBoxButton.className = "2Btn";
textBox.className = "2Input";

document.body.append(textBox);
document.body.append(textBoxButton);

document.addEventListener('click', function(e) {
    if(e.target.className === "2Btn" && textBox.value != '') {
        alert(textBox.value);
    }
});

// numbering third task
let three = document.createElement('h3');
let threeTxt = document.createTextNode('# 3');
three.append(threeTxt);

document.body.append(three);

// task three
let div = document.createElement('div');
div.style.height = "50px";
div.style.width = "50px";
div.style.backgroundColor = "black";
document.body.append(div);

document.addEventListener('mouseover', function(e) {
    if(e.target.tagName === "DIV") {
        e.target.style.backgroundColor = "goldenrod";
    }
});

document.addEventListener('mouseout', function(e) {
    if(e.target.tagName === "DIV") {
        e.target.style.backgroundColor = "black";
    }
});

// numbering fourth task
let four = document.createElement('h3');
let fourTxt = document.createTextNode('# 4');
four.append(fourTxt);

document.body.append(four);

// fourth task
let p = document.createElement('p');
let pTxt = document.createTextNode('Lorem ipsum');
p.append(pTxt);

document.body.append(p);

document.addEventListener('click', function(e) {
    if(e.target.tagName === "P") {
        e.target.style.color = randomColor();
    }
});

function randomColor() {
    let colorArray = ['aqua', 'orange', 'blue', 'purple', 'pink'];
    let max = 4;

    let choice = Math.floor(Math.random() * max);

    let color = colorArray[choice];
    return color;
}

// numbering fifth task
let five = document.createElement('h3');
let fiveTxt = document.createTextNode('# 5');
five.append(fiveTxt);

document.body.append(five);

// fifth task
let btn5 = document.createElement('button');
let btn5Txt = document.createTextNode('add span to div');
btn5.append(btn5Txt);
btn5.className = "btn5";
document.body.append(btn5);

let div5 = document.createElement('div');
div5.className = "div5";
document.body.append(div5);

document.addEventListener('click', function(e) {
    if(e.target.className === "btn5") {
        let element = document.getElementsByClassName('div5');
        let span = document.createElement('span');
        let spanTxt = document.createTextNode('Jeremy');
        span.appendChild(spanTxt);

        document.getElementsByClassName('div5')[0].append(span);
    }
});

// numbering sixth task
let six = document.createElement('h3');
let sixTxt = document.createTextNode('# 6');
six.append(sixTxt);

document.body.append(six);