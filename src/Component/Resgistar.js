import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Resgistar = () => {
    const {createUSer}=useContext(AuthContext);
    const handleRegistar=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        createUSer(email,password)
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
            <form onSubmit={handleRegistar}>
                <input type="email"  placeholder='enter your email' name="email" id="" /><br />
                <input type="password" placeholder='enter your password' name="password" id="" /><br />
                <button type="submit">Registar</button>
            </form>
        </div>
    );
};

export default Resgistar;