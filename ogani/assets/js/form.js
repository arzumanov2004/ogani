const exampleInputName = document.getElementById('exampleInputName')
const exampleInputSurname = document.getElementById('exampleInputSurname')
const exampleInputPassword1 = document.getElementById('exampleInputPassword1')
const exampleInputEmail1 = document.getElementById('exampleInputEmail1')
const form = document.getElementById('form')


function axiosPost(e) {
    e.preventDefault()
    axios.post('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts',{
        name: exampleInputName.value,
        surname: exampleInputSurname.value,
        password: exampleInputPassword1.value,
        email: exampleInputEmail1.value,
    }).then(res =>{
        console.log(res);
        form.reset()
    });
};
form.addEventListener('submit',axiosPost)