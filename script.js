var input = document.getElementById('input').value;

document.getElementById('button').onclick = function() {
    open('http://google.com/search?q='+input, '_self');
};

document.getElementById('input').addEventListener('keypress', function(event) {
        var input = document.getElementById('input').value;
        if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('button').click();
    }
});
