const myform = document.getElementById('myform');
const email = document.getElementById('email');

myform.addEventListener('submit', function(e){
    e.preventDefault();
    axios.post('http://13.127.194.106:4000/password/forgot-password', {email: email.value})
    .then(res=>{
        console.log(res.data);
    })
    .catch(err=>{
        console.log(err);
    });
})