
window.addEventListener('load', function() {
    let loadBtn = document.querySelector('#SearchBtn');

    loadBtn.addEventListener('click', function(element) {
        element.preventDefault();

        fetch('/superheroes.php')
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                alert(data);
            })
            .catch(error => console.log('There was an error: ' + error));
    });
});


$(document).ready(function(){
    $('#searchdata').click(function(e){
        e.preventDefault();
        var id = $('input[name = ID]').val();
        $.ajax({
            type: "POST",
            url: "superheroes.php",
            data: {
                "search_post_btn":1,
                "id": ID,
            },
            dataType:"text",
            success: function(response){
                $("#searchform").html(response);
            }

        });
    });
});