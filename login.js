document.querySelector('.log_btn').addEventListener('click', function(event) {
    const inputValue = document.querySelector('.log_int').value;
    if (!inputValue) {
        event.preventDefault();
        alert('Заполните поле ');
    } 
});