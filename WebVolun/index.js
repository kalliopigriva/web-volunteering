$(document).ready(function() {
    // Κρύβει όλες τις περιγραφές
    hideAllDescriptions();

    // Εμφάνιση περιγραφής με hover
    $('#moir').hover(
        function() {
            $('#moir-text').show();
        }, 
        function() {
            if (!$('#moir').hasClass('clicked')) {
                $('#moir-text').hide();
            }
        }
    );

    $('#beach-cleaning').hover(
        function() {
            $('#beach-cleaning-text').show();
        },
        function() {
            if (!$('#beach-cleaning').hasClass('clicked')) {
                $('#beach-cleaning-text').hide();
            }
        }
    );

    $('#help-vulnerable').hover(
        function() {
            $('#help-vulnerable-text').show();
        },
        function() {
            if (!$('#help-vulnerable').hasClass('clicked')) {
                $('#help-vulnerable-text').hide();
            }
        }
    );

    //εμφάνιση περιγραφών με κλικ
    $('#moir').click(function() {
        toggleDescription('#moir-text');
    });

    $('#beach-cleaning').click(function() {
        toggleDescription('#beach-cleaning-text');
    });

    $('#help-vulnerable').click(function() {
        toggleDescription('#help-vulnerable-text');
    });
});

function hideAllDescriptions() {
    $('.action-text').hide(); // Κρύβει όλες τις περιγραφές
}

function toggleDescription(textId) {
    // ορατότητα του κειμενου με κλικ
    $(textId).toggle();
}


