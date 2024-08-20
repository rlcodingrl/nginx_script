console.log(`some info`)
const modalWrap = document.createElement('div')
modalWrap.style="position: fixed; min-height: 100vh; z-index: 100000; display: flex; background-color: rgba(0,0,0,0.3); justify-content: space-around; align-items: center; top: 0px; left: 0px; width: 100%;  backdrop-filter: blur(14px);filter: blur(14px);"
document.body.appendChild(modalWrap);
modalWrap.classList.add('modalWrap')
modalWrap.classList.add('displaynone')
modalWrap.innerHTML=`
    <style>
    .displaynone {
        display: none !important;
    }
    </style>
    <div class="hpModal" style="display:flex; justify-content: space-around;">
        
        <a href="www.google.com" style="display: block; width: 85%; "><img src="https://rlcodingrl.github.io/nginx_script/final_Img.webp"></a>
    </div>
`

function showModal() {
    modalWrap.classList.remove('displaynone')
}
function hideModal() {
    modalWrap.classList.add('displaynone')
}


setTimeout(()=>{
    showModal()
},5000)

modalWrap.addEventListener('click',()=>{
    console.log(`hide modal`)
    hideModal()
})