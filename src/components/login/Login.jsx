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
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <input className="form-control" placeholder="username" required={true}
                           autoFocus="" onChange={e => setUsername(e.target.value)}/>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required={true}/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        );
    }
};

export default Login;