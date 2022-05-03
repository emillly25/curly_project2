
    //고객센터 dropdown menu
    const head_bar3 =document.querySelector('.head_bar3');
    const customerService = document.querySelector('.customer_service');
    head_bar3.addEventListener('mouseenter',function(){
        customerService.style.display = 'block' ;
        customerService.style.zIndex = 1

    })
    customerService.addEventListener('mouseleave',function(){
        this.style.display= 'none'
    })


    //전체 카테고리 dropdown
    const category =document.querySelector('.category');
    const dropdownContainer = document.querySelector('.dropdown');

    category.addEventListener('mouseenter',function(){
        dropdownContainer.style.display = 'block'
        dropdownContainer.style.zIndex = 300
    })

    dropdownContainer.addEventListener('mouseleave',function(){
        this.style.display = 'none';
    })


    const menu = document.querySelector('.menu')
    window.addEventListener('scroll', function(){
        let y = window.scrollY
        if(y>116){
            menu.style.position = 'fixed'
            menu.style.top = 0
            menu.style.zIndex = 100
            dropdownContainer.style.left = '450px'
            dropdownContainer.style.top = '50px'





        }else{
            menu.style.position = 'static'
            dropdownContainer.style.left = '140px'
            dropdownContainer.style.top = '175px'
        }

    })

