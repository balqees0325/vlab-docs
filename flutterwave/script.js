
// this.addEventListener("DOMContentLoaded", () => {
// 	const accounts = document.querySelectorAll(".account");
// 	accounts.forEach((account) =>
// 		account.addEventListener("click", () => {
// 			if (account.parentNode.classList.contains("active")) {
// 				account.parentNode.classList.toggle("active");
// 			} else {
// 				accounts.forEach((account) =>
// 					account.parentNode.classList.remove("active")
// 				);
// 				account.parentNode.classList.add("active");
// 			}
// 		})
// 	);
// }); 

const accounts = document.querySelectorAll('.account');
accounts.forEach((account) => {
  account.addEventListener('click', () => {
  if(account.parentNode.classList.contains('active')) {
    account.parentNode.classList.toggle('active')
  } else {
    accounts.forEach(account => account.parentNode.classList.remove('active'))
    account.parentNode.classList.add('active')
  }
})
});