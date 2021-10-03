$( function() {
    $('#dialog').load('dialog.html');
    $( "#menu" ).menu();
    $( "#clock-dialog" ).dialog();
    $( "#clock-dialog" ).dialog( "close" );
    $( "#clock-opener" ).on( "click", function() {
        $( "#clock-dialog" ).dialog( "open" );
    });
    $( "#calculator-dialog" ).dialog();
    $( "#calculator-dialog" ).dialog( "close" );
    $( "#calculator-opener" ).on( "click", function() {
        $( "#calculator-dialog" ).dialog( "open" );
    });
} );
