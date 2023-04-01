import { useState } from 'react'

function Login() {

    const getUserToken = async (e) => {
        e.preventDefault()
    
        let { suppername, password } = e.target


        
    
       let data = await fetch("http://localhost:5050/login", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                suppername: suppername.value,
                password: password.value
            })
        })
         .then(res => res.json())
           .then(data => data)

           data.msg && alert(data.msg)


          if(data?.token){
             localStorage.setItem("token", data.token)
              (location.href = '/courses')
          }

    
           suppername.value = ''
           password.value = ''
        }
    

    return (
        <div className="login">
            <h1 align="center">Login</h1>

            <div className='container justify-content-center d-flex mt-5'>

                <form onSubmit={(e) => getUserToken(e)}>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" name='suppername' class="form-control" placeholder="Enter username" id="username"/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" name='password' class="form-control" placeholder="Enter password" id="pwd"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login
