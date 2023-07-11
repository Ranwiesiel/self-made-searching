var input = document.getElementById('input');

document.getElementById('button').addEventListener("click", function() {
    open('http://google.com/search?q='+input.value, '_self');
});

document.getElementById('input').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('button').click();
    }
});
