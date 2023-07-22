import { Link } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        const userData = JSON.parse(localStorage.getItem('userData'));

        for (let index = 0; index < userData.length; index++) {

        if (userData && userData[index].email === email && userData[index].password === password) {
            console.log('valid')
        } else {
            console.log('notvalid')
        }

    }
    };

    return (

        <div className="mainpage">


            <div className="form form_2">

                <h2 className='Head'> Login Page</h2>
                <div className='middle middle_2 '>
                    <h4>Email</h4>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <h4>Password</h4>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="bottom">

                    <Link to='/' className='link'>Don't have an account? Register</Link>

                    <Link to='/Login/HomePage'><button className='button' onClick={handleLogin}>Login</button></Link>
                </div>

            </div>
        </div>)
}

export default LoginPage;