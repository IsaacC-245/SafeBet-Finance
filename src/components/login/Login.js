import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'

const Login = () => {
    return (
        <body className="text-center">
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required=""
                       autoFocus=""/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>


            <div id="hl-aria-live-message-container" aria-live="polite" className="visually-hidden"></div>
            <div id="hl-aria-live-alert-container" role="alert" aria-live="assertive" className="visually-hidden"></div>
        </body>
    );
};

export default Login;