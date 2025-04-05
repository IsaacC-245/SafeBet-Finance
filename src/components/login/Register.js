import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'
import InfiniteSpinner from "../spinner/infiniteSpinner";
import {useContext, useState} from "react"
import { DataContext } from "../../DataProvider"
import {Navigate} from "react-router-dom";

const Register = () => {

    const { user, register } = useContext(DataContext)

    const [username, setUsername] = useState('')

    if (user) {
        return <Navigate to='/dashboard'/>
    } else {
        return (
            <>
                <div>
                    <div className="dashboard-container">
                        {/* Left Box - Log In */}
                        <div className="login-box">
                            <form className="form-signin" onSubmit={(e) => register(username, e)}>
                                <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                                <label htmlFor="inputUsername" className="sr-only">Username</label>
                                <input type="username" id="inputUsername" className="form-control" placeholder=""
                                       autoFocus="" required={true}
                                       onChange={e => setUsername(e.target.value)}/>
                                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                                <input type="email" id="inputEmail" className="form-control" placeholder=""
                                       autoFocus="" required={true}/>
                                <label htmlFor="inputPassword" className="sr-only">Password</label>
                                <input type="password" id="inputPassword" className="form-control" placeholder=""
                                       required={true}/>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Create account
                                </button>
                            </form>
                        </div>

                        {/* Right Box - Gambling Earnings */}
                        <div className="gambling-box">
                            <InfiniteSpinner/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Register;