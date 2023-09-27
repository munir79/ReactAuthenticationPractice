import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        console.log(form);
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })

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