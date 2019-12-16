$(document).ready(function(){
    $("form#registration").on('submit', function(e){
        e.preventDefault();
        var data = $('input[name=text]').val();
        $.ajax({
            type: 'post',
            url: '/ajax',
            data: data,
            dataType: 'text'
        })
        .done(function(data){
            $('h1').html(data.quote);
        });
    });
});