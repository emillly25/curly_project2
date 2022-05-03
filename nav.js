
    //고객센터 dropdown menu
    const head_bar3 =document.querySelector('.head_bar3');
    const customerService = document.querySelector('.customer_service');
    head_bar3.addEventListener('mouseenter',function(){
        customerService.style.display = 'block' ;
        customerService.style.zIndex = '1'

    })
    customerService.addEventListener('mouseleave',function(){
        this.style.display= 'none'
    })


    //전체 카테고리 dropdown
    const category =document.querySelector('#dropdown');
    const dropdownContainer = document.querySelector('.dropdown');

    category.addEventListener('mouseenter',function(){
        dropdownContainer.style.display = 'block'
        dropdownContainer.style.zIndex = '1'
    })

    dropdownContainer.addEventListener('mouseleave',function(){
        this.style.display = 'none';
    })