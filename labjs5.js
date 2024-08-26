
    


function Login(){


    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
 var data ={
username:username,
password:password
 }
 localStorage.setItem("user", JSON.stringify(data)  );
}

// function getCart() {
//     var cart = JSON.parse(localStorage.getItem('cart'));
//     console.log(cart);
//     for (var i = 0; i < cart.length; i++) {
//         draw(cart[i]);
//     }

// }







// function draw(data) {
//     var div = document.createElement("div");
//     var img = document.createElement('img');
//     var price = document.createElement('h4');
//     var title = document.createElement("h4");
//     var but = document.createElement('button');
//     but.innerText = "remove";
//     but.onclick = function () {
//         alert('remove');
//     }
//     div.classList.add('card');
//     img.src = data.images[0];
//     img.style.width = "20%"
//     price.innerText = data.price + "$";
//     title.innerText = data.title;
//     div.append(img, price, title, but);
//     var parent = document.getElementById('div');
//     parent.appendChild(div);
// }

 