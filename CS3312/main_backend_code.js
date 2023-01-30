$(document).ready(function() {
    
    $('#b1').click(function() {

        $.ajax({
            url: 'https://api.jsonbin.io/b/6106ce81f098011544a950d8/2',
            type: 'GET',
            dataType: 'json',
            timeout: 2500,
            success: function(result){
                console.log('Completed with success and data: ', result);
            },
            error: function (result){
                console.log('complete with error');
            },
            complete: function () {
                console.log('complete');
            }
        });

    });
});