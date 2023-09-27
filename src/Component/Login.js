import React from 'react';

const Login = () => {
    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        console.log(form);
        const email=form.email.value;
        const password=form.password.value;
      //  console.log(email,password);

    }
    return (
        <div>
            <form onSubmit={handleLogin} >
                <input type="email" placeholder='enter your email' name="email" id="" /><br />
                <input type="password" placeholder='enter your password' name="password" id="" /><br />
                <button type="submit">Login </button>
            </form>
        </div>
    );
};

export default Login;