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
// count control which sentence will display at top of screen
sentenceCount = 0;
letterCount = 0;
sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
$('#sentence').text(sentences[sentenceCount]);

// displays expected letter of first sentence in #target-letter div
$('#target-letter').text(sentences[sentenceCount][letterCount]);

// most of whats going on is in this keypress event listener
$(document).keypress(function (e) {
    letter = sentences[sentenceCount][letterCount];
    letterCode = letter.charCodeAt();
    key = e.keyCode;

    // if match display green check in the .feedback div
    // else display red x in the .feedback div
    if (letterCode == key) {
        feedback = $('')
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        letterCount++;
    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        letterCount++;
    }

    // highlight next letter in sentence
    if (letterCount < 18) {
        mover = 18 * (1 + letterCount);
    } else {
        mover = 18 * letterCount;
    }
    let $pixels = (mover) + 'px';
    $('#yellow-block').css('left', $pixels);

    // display next letter in sentence in target-letter
    expected = sentences[sentenceCount][letterCount];
    $('#target-letter').text(expected);

    sentenceLength = sentences[sentenceCount].length;
    // if sentenceLength = lettCount move to next sentence 
    // reset letterCount & reset yellow-block & feedback glyphicons
    if (sentenceLength === letterCount) {
        sentenceCount++;
        letterCount = 0;
        $('#sentence').text(sentences[sentenceCount]);
        $('#target-letter').text(sentences[sentenceCount][letterCount]);
        $('#yellow-block').css('left', '10px');
        $('.glyphicon-remove').remove();
        $('.glyphicon-ok').remove();
        sentenceLength = sentences[sentenceCount].length - 1;
    }


    // if correct lett
});
