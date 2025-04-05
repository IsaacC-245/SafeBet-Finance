import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import {useContext, useState} from "react"
import { DataContext } from "../../DataProvider"
import {Navigate, useNavigate} from 'react-router-dom'

const Login = () => {

    const { user, login } = useContext(DataContext)
    const [username, setUsername] = useState('')
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/register");
    };

    if (user) {
        return <Navigate to='/dashboard'/>
    } else {
        return (
            <div className="text-center">
                <div className="form-signin">
                    <form className="" onSubmit={(e) => login(username, e)}>
                        <h1 className="h3 mb-3 font-weight-normal">Log in</h1>
                        <label className="sr-only">Username</label>
                        <input className="form-control" required={true}
                               onChange={e => setUsername(e.target.value)} />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" required={true} />
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                    </form>
                    <button className="btn btn-lg btn-primary btn-block" onClick={handleRegister}>Register</button>
                </div>
            </div>
        );
    }
};

export default Login;