var input = document.getElementById('input');

document.getElementById('button').onclick = function() {
    open('http://google.com/search?q='+input.value, '_self');
};

document.getElementById('input').addEventListener('keypress', function(event) {\
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('button').click();
    }
});
