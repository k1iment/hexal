document.addEventListener('DOMContentLoaded', function() {
    const linksList = document.querySelectorAll('.gallery-picture-container');
    const picturesList = document.querySelectorAll('.gallery-picture');

    linksList.forEach(item =>{ 

        item.addEventListener('mouseenter', (e) =>{
            picturesList.forEach(el=>{
                let target = el.getAttribute('data-target');
                let path = item.getAttribute('data-path');
                if (path === target) {
                    el.classList.add('gallery_hover')
                }
            });
        })

        item.addEventListener('mouseout', function() {
            picturesList.forEach(el =>{
                el.classList.remove('gallery_hover')
            })
        })
        })

        picturesList.forEach(item =>{ 

            item.addEventListener('mouseenter', (e) =>{
                picturesList.forEach(el=>{
                    let target = el.getAttribute('data-target');
                    let path = item.getAttribute('data-path');
                    if (path === target) {
                        el.classList.add('gallery_hover')
                    }
                });
            })
    
            item.addEventListener('mouseout', function() {
                picturesList.forEach(el =>{
                    el.classList.remove('gallery_hover')
                })
            })

            item.addEventListener('focus', function() {
                picturesList.forEach(el=>{
                    let target = el.getAttribute('data-target');
                    let path = item.getAttribute('data-path');
                    if (path === target) {
                        el.classList.add('gallery_hover')
                    }
                });
            })

            item.addEventListener('blur', function() {
                picturesList.forEach(el =>{
                    el.classList.remove('gallery_hover')
                })
            })
        })

        const items = document.querySelectorAll('.social-item');
        const pictures = document.querySelectorAll('.social-icon');

        items.forEach(item =>{
            item.addEventListener('mouseenter', (e)=>{
                pictures.forEach(el=>{
                    let x = item.getAttribute('data-x')
                    let y = el.getAttribute('data-y');
                    if(x===y) {
                        el.classList.add('social_hover')
                    }
                })
            });
            
            item.addEventListener('mouseout', (e)=>{
                pictures.forEach(el=>{
                    let x = item.getAttribute('data-x')
                    let y = el.getAttribute('data-y');
                    if(x===y) {
                        el.classList.remove('social_hover')
                    }
                })
            });
        })
    })