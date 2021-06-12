const opener=document.getElementById('open-modal')
const closer=document.getElementById('close-modal')
const overlayy=document.getElementById('overlay')


opener.addEventListener('click',function(){
overlayy.style.display='block'
})

closer.addEventListener('click',function(){
    overlayy.style.display='none'
})