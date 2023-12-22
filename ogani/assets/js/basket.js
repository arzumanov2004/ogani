const div = document.getElementById('myDiv')

function getBasket() {
    div.innerHTML = ''
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) =>{
        const box = document.createElement('div')
        box.className = 'myBox col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'
        box.innerHTML = `
            <img src="${item.image}" alt="">
            <h5>${item.name}</h5>
            <h6>$${item.price}</h6>
            <button onclick="Remuve(${index})">Delete -></button>
        `;
        div.appendChild(box);
    });
};
function Remuve(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getBasket()
}




const sortbtn = document.getElementById('sortbtn')
const sortDiv = document.getElementById('sortDiv')

function getSort() {
    div.style.display = 'none'
    sortDiv.style.display = 'block'

    axios.get('https://655c81de25b76d9884fd6913.mockapi.io/products')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => a.price - b.price)
        sortData.map(item =>{
            const box = document.createElement('div')
            box.className = 'myBox col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <div class="boxDiv">
            <img src="${item.image}" alt="">
            <div>
            <h4>${item.title}</h4>
            <h4>${item.price}</h4>
            </div>
            </div>
        
        `;
        sortDiv.appendChild(box)
        });
    });
};

sortbtn.addEventListener('click',getSort)


window.onload = () =>{
    getBasket()
}