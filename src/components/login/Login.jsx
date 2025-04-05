import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import {useContext, useState} from "react"
import { DataContext } from "../../DataProvider"
import { Navigate } from 'react-router-dom'

const Login = () => {

    const { user, login } = useContext(DataContext)

    const [username, setUsername] = useState('')

    if (user) {
        return <Navigate to='/test'/>
    } else {
        return (
            <div className="text-center">
                <form className="form-signin" onSubmit={(e) => login(username, e)}>
                    <h1 className="h3 mb-3 font-weight-normal">Log in</h1>
                    <label className="sr-only">Username</label>
                    <input className="form-control" required={true}
                           onChange={e => setUsername(e.target.value)} />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" required={true} />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                </form>
            </div>
        );
    }
};

export default Login;