console.log(`some info`)
const modalWrap = document.createElement('div')
modalWrap.style="position: fixed; min-height: 100vh; z-index: 100000; display: flex; background-color: rgba(0,0,0,0.2); justify-content: space-between; align-items: center"
document.body.appendChild(modalWrap);
modalWrap.classList.add('modalWrap')
modalWrap.innerHTML=`
    <div class="hpModal">
        <img src="https://rlcodingrl.github.io/nginx_script/final_Img.webp">
    </div>
`