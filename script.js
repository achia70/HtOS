$( function() {
    $('#dialog').load('dialog.html');
    $( "#menu" ).menu();
    $( "#clock-dialog" ).dialog(
        width: 500
        height: 500
    );
    $( "#clock-dialog" ).dialog( "close" );
    $( "#clock-opener" ).on( "click", function() {
        $( "#clock-dialog" ).dialog( "open" );
    });
    $( "#calculator-dialog" ).dialog(
        width: 500
        height: 500
    );
    $( "#calculator-dialog" ).dialog( "close" );
    $( "#calculator-opener" ).on( "click", function() {
        $( "#calculator-dialog" ).dialog( "open" );
    });
} );
