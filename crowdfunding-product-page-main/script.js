const modal = document.querySelector('#modal');
const close = document.querySelector("#close");

// window.addEventListener('click', (event) =>{
//   if(event.target === modal){
//     modal.style.display = 'none';
//   } else {
//     modal.style.display = 'block';
//   }
// });
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
};

close.addEventListener("click", () => {
  modal.style.display = 'none';
});