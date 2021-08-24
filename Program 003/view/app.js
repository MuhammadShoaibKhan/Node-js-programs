var email = document.getElementById('email');
var pass = document.getElementById('pass');

function signIn() {

    var obj = {
        method: "POST",
        headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': "application/json", },
        data: { email: email.value, password: pass.value },
        url: 'http://localhost:5000/auth/signin'
    }
    axios(obj)

    .then((success) => {
            console.log(success, 'success')
        })
        .catch((err) => {
            console.log(err, 'error')
        })




    //     axios.post('http://localhost:5000/auth/signin', { email: email.value, password: pass.value })
    //         .then((success) => {
    //             console.log(success, 'success')
    //         })
    //         .catch((err) => {
    //             console.log(err, 'error')
    //         })


}