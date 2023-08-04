// default hide upper keyboard
$('#keyboard-upper-container').hide();

// keyboard toggling: hold down shift hides lower keyboard
// displays upper keyboard
$(document).on('keyup keydown', function (e) {
    shifted = e.shiftKey;
    if (shifted === true) {
        $('#keyboard-lower-container').hide();
        $('#keyboard-upper-container').show();
    } else {
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();
    }
});

// when a key is pressed it will highlight in browser
$(document).keypress(function (e) {
    let key = "#" + e.keyCode;
    $(key).css({
        'background': '#FFC107',
        'color': '#ffffff',
    });

    // highlight times out after 200 ms
    setTimeout(function () {
        $(key).css({
            'background': 'whitesmoke',
            'color': 'black',
        });
    }, 200);
});

// display sentences at top of page one sentence at a time
// count control which sentence will display at tope of screen
let sentenceCount = 0;
let letterCount = 0;
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
$('#sentence').append(sentences[sentenceCount]);

// match key pressed to text in sentence
// correct input = green css check below letter
// incorrect input = red x below letter
$(document).keypress(function (e) {
    let letter = sentences[sentenceCount][letterCount];
    let letterCode = letter.charCodeAt();
    key = e.keyCode;

    if (letterCode == key) {
        console.log("match");
        letterCount++;
    } else {
        console.log('no fucking match');
        console.log(letterCode);
        console.log(key);
        letterCount++;
    }

    // highlight next letter in sentence
    if(letterCount < 18) {
        mover = 18 * (1+letterCount);
    } else {
        mover = 18 * letterCount;
    }
    let $pixels = (mover) + 'px';
    $('#yellow-block').css('left', $pixels);
});



