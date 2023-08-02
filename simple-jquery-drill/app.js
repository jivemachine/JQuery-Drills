$( 'document' ).ready(function() {

    $( '#btnSubmit' ).on( "click", function() {
        
        var el = $('input[type*="text"]').val() ;
        alert(el);
    });
    
});