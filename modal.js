const buton = document.querySelector(".a-whatsapp");
const modal= document.querySelector(".modal");
const cerrar = document.querySelector(".modal-close");
buton.addEventListener("click",(e)=>{
    e.preventDefault();
   modal.classList.add('modal-show');
});

cerrar.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.classList.remove("modal-show");
});