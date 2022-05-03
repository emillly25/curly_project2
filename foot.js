const side_banner = document.querySelector('.side_banner')

window.addEventListener('scroll',function(){
    let y = Number(window.pageYOffset)
    console.log(y)
   if(y > 570){
    side_banner.style.top = y +'px' 
   }else{
    side_banner.style.top = '580px'
   }
})



window.addEventListener("scroll", function(event){
  let y = window.pageYOffset;
  let num = Number(y) + 180
  if(y > 570){
    sideBar.style.top = num + "px";
    sideBar.style.display = "block";
  }else{
    sideBar.style.top = "580px"
  }
})
