
 const overlayElem = document.querySelector('.overlay')
const loadingWrapperElem = document.querySelector('.loading-wrapper')
const headerElem =document.querySelector('.header')
const landingElem  = document.querySelector('.landing')


 window.addEventListener('load', ()=>{
    overlayElem.style.display = 'none'
    loadingWrapperElem.style.display = 'none'
 })


 

 window.addEventListener('scroll', ()=>{
   if(window.scrollY > 100){
    headerElem.classList.add('sticky')
    landingElem.style.paddingTop = '145px'
   }else if(window.scrollY < 5){
     headerElem.classList.remove('sticky')
    landingElem.style.paddingTop = '45px'
   }
 })