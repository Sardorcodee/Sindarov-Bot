import { useState } from 'react'

function Register() {


   const getUserInfo = async(e) => {
   try {
    e.preventDefault()

    let { username, email, password } = e.target
    

   let data = await fetch("http://localhost:5050/register", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value
        })
    })
     .then(res => res.json())
       .then(data => data)

       if(data?.msg) {
         location.href = '/login'

       }

       username.value = ''
       email.value = ''
       password.value = ''



      
    
   } catch (error) {
    
   }
    }

    return (
        <div className="register">
                <h1 align="center">Register</h1>

            <div className='container justify-content-center d-flex mt-5'>
                <form onSubmit={(e) => getUserInfo(e)}>
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" name='email' class="form-control" placeholder="Enter email" id="email"/>
                    </div>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" name='username' class="form-control" placeholder="Enter username" id="username"/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" name='password' class="form-control" placeholder="Enter password" id="pwd"/>
                    </div>
                    <button type="submit" class="btn btn-primary">register</button>
                </form>
            </div>

        </div>
    )
}

export default Register
