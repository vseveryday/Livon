
$(function(){
$('.ipv4').ipAddress();
});


/* Реле */
$('.parameters-container').on('keyup change', 'input[name=x]', function(event) {
    var inp = $(event.target);
    CheckInputByInt(inp);
    setCheckBox(inp.val(), $('.indicator > input'));
    // $('input[name=Результат]').val(perevod());
});

$('.LED-working-relay').on('change', 'input', function(event) {
    setRelayDigit();
    // $('input[name=Результат]').val(perevod());
});
/* Перевод из числа в сигналы чекбоксам */
/* Перевод из нажатий чекбоксов в число */
function setRelayDigit() {
    var dig = 0;
    $('.indicator > input').each(function(indx, elem) {
        if ( $(this).is(':checked') ) 
            dig += (1 << indx);
    });
    $('input[name=x]').val(dig);
}

function CheckInputByInt (el){
    if ( el.val() < 0 )
        el.val(0);
    if ( el.val() > 255 )
        el.val(255);
}

function setCheckBox(value, el) {
    el.each(function(indx, elem) {
        if ( (value >> indx) & 1 ) 
            $(this).attr('checked', true);
        else
            $(this).attr('checked', false);
    });
}

/* Датчики */
$('.parameters-container').on('keyup change', 'input[name=y]', function(event) {
    var inp = $(event.target);
    CheckInputByInt(inp);
    setCheckBox(inp.val(), $('.sensor-indicator > input'));
    // $('input[name=Результат]').val(perevod());
});

$('.LED-working-sensor').on('change', 'input', function(event) {
    setSensorDigit();
    // $('input[name=Результат]').val(perevod());
});
/* Перевод из числа в сигналы чекбоксам */
/* Перевод из нажатий чекбоксов в число */
function setSensorDigit() {
    var dig = 0;
    $('.sensor-indicator > input').each(function(indx, elem) {
        if ( $(this).is(':checked') ) 
            dig += (1 << indx);
    });
    $('input[name=y]').val(dig);
}

function ResetBlock(el) {
    var Parent = $(el).parents('fieldset');
    Parent.find('input').each(function() {
        $(this).val(this.defaultValue);
    });
    Parent.find('input[type=checkbox]:checked').prop('checked', false);
}