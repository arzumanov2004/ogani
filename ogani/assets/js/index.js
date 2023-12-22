const div = document.getElementById('myDiv')
const btn = document.getElementById('btn')

let page = 1
let limit = 8

async function getProducts() {
    let skip = (page - 1) * limit

    try{
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`)
        const data = response.data
        db = data
        db.forEach(item => {
            const box = document.createElement('div')
            box.className = 'myBox col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <h5>${item.name}</h5>
                <h6>$${item.price}</h6>
                <button onclick="addToCart(${item.id})">Add To Basket -></button>
            `;
            div.appendChild(box);
        });
        page++;
    }catch(error){
        console.error("xeta:",error);
    }
}
btn.addEventListener('click',getProducts)

function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart',JSON.stringify(cart))
}

const inp = document.getElementById('inp')
const search = document.getElementById('search')
const divSearch = document.getElementById('divSearch')

function getsearch() {
    div.style.display = 'none'
    divSearch.style.display = 'block'
    btn.style.display = 'none'
    axios.get('https://655c81de25b76d9884fd6913.mockapi.io/products')
    .then(res =>{
        db = res.data
        const filterData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
        filterData.map(item =>{
            const box = document.createElement('div')
            box.className = 'myBox col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <div class="boxDiv">
            <img src="${item.image}" alt="">
            <h4>${item.title}</h4>
            </div>
        
        `;
            divSearch.appendChild(box)
        });
    });
};
search.addEventListener('click',getsearch)

window.onload = () =>{
    getProducts()
}