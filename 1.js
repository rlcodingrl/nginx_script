console.log(`some info`)
const modalWrap = document.createElement('div')
modalWrap.style="position: fixed; min-height: 100vh; z-index: 100000; display: flex; background-color: rgba(0,0,0,0.2); justify-content: space-between; align-items: center; top: 0px; left: 0px; width: 100%"
document.body.appendChild(modalWrap);
modalWrap.classList.add('modalWrap')
modalWrap.innerHTML=`
    <div class="hpModal">
        <a href="www.google.com"><img src="https://rlcodingrl.github.io/nginx_script/final_Img.webp"></a>
        
    </div>
`