const menuIcon = document.querySelector('.menu');

menuIcon.addEventListener("click",function(){
  if(menuIcon.classList.contains('active')){
    menuIcon.classList.remove('active');
  }else{
    menuIcon.classList.add('active');
  }
});