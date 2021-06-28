const btn = document.getElementById('btn')

btn.addEventListener("click",(e) =>{
    document.body.classList.toggle('white', e.target.checked)
})