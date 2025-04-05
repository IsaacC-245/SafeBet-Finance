import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'

const Login = () => {
    return (
        <div className="text-center">
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Log in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="" required=""
                       autoFocus=""/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="" required=""/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;