let slider = document.querySelector('.slider');
let slides = slider.querySelector('.slides');
let slide = slides.querySelectorAll('.slide');
let num_start = document.querySelector('#num_start');

let curPos = 0;
let positionValue = 0;
const img_width = 100;
const first_w = 0;

const btn_prev = document.querySelectorAll('button')[0]
const btn_next = document.querySelectorAll('button')[1]

//btn slider

function next(){
    if(curPos < 5){   
        positionValue -= img_width;
        slides.style.transform = `translateX(${positionValue}vw )`;
    }
    curPos++
    if(curPos == 6){  
        curPos = 0
        positionValue = 0;
        slides.style.transform = `translateX(${positionValue}vw )`;
    }
}

function prev(){
    if(curPos > 0){
        positionValue += img_width;
        slides.style.transform = `translateX(${positionValue}vw )`;
    }
    curPos--
    if(curPos == -1){
        curPos = 5  
        positionValue = -500;  
        slides.style.transform = `translateX(${positionValue}vw )`
    }
}

btn_next.addEventListener('click',next);
btn_prev.addEventListener('click',prev);





// auto slider 작동

    let setId = setInterval(() => {
        positionValue -=img_width;
        slides.style.transform = `translateX(${positionValue}vw)`
        curPos ++
    
        if(curPos == 6){
            slides.style.transform = `translateX(${first_w}vw)`
            curPos = 0;
            positionValue = 0;
        }
    
        num_start.innerText = `${Number(num_start.textContent) + 1}`
        if(Number(num_start.textContent) === 6){
            setTimeout(()=>{
                num_start.innerText = 1
            },3000)
        }
        return setId
    },3000)



    slider.addEventListener('mouseenter',function(){
        slider.style.cursor = 'pointer'
        btn_prev.style.display = 'block'
        btn_next.style.display = 'block'
        clearInterval(setId)
    })

    slider.addEventListener('mouseleave',function(){
        setId = setInterval(() => {
            positionValue -=img_width;
            slides.style.transform = `translateX(${positionValue}vw)`
            curPos ++
        
            if(curPos == 6){
                slides.style.transform = `translateX(${first_w}vw)`
                curPos = 0;
                positionValue = 0;
            }
        
            num_start.innerText = `${Number(num_start.textContent) + 1}`
            if(Number(num_start.textContent) === 6){
                setTimeout(()=>{
                    num_start.innerText = 1
                },3000)
            }
            return setId
        },3000)
        btn_prev.style.display = 'none';
        btn_next.style.display = 'none';
    })



