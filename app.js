let navbar = document.querySelector(".navbar");

// show navBar 
document.querySelector("#menu-btn").onclick = () => { 
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItems.classList.remove("active")
};

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = ()  =>{
  cartItem.classList.toggle('active');
}