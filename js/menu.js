document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.dropdown-list').classList.toggle('dropdown-active');
        document.querySelector('.burger').classList.toggle('burger-active')
    })
})