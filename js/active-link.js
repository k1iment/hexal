document.addEventListener('DOMContentLoaded', function() {

    const list = document.querySelectorAll('.header-link')
    list.forEach(item =>{ 
           item.addEventListener('click', (e) =>{
           list.forEach(el=>{ el.classList.remove('active-link'); });
           item.classList.add('active-link')
       })
   })
})
