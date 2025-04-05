import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'

const Register = () => {
    return (
        <>
            <body>
                {/*<div className="text-center">*/}
                {/*    <form className="form-signin">*/}
                {/*        <h1 className="h3 mb-3 font-weight-normal">Register</h1>*/}
                {/*        <label htmlFor="inputUsername" className="sr-only">Username</label>*/}
                {/*        <input type="username" id="inputUsername" className="form-control" placeholder="" required=""*/}
                {/*               autoFocus=""/>*/}
                {/*        <label htmlFor="inputEmail" className="sr-only">Email address</label>*/}
                {/*        <input type="email" id="inputEmail" className="form-control" placeholder="" required=""*/}
                {/*               autoFocus=""/>*/}
                {/*        <label htmlFor="inputPassword" className="sr-only">Password</label>*/}
                {/*        <input type="password" id="inputPassword" className="form-control" placeholder="" required=""/>*/}
                {/*        <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>*/}
                {/*    </form>*/}
                {/*</div>*/}
                {/*<div className="text-center">*/}
                {/*    <button className="btn btn-primary btn-block" type="submit"></button>*/}
                {/*</div>*/}

                <div className="dashboard-container">
                    {/* Left Box - Log In */}
                    <div className="login-box">
                        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                        <label htmlFor="inputUsername" className="sr-only">Username</label>
                        <input type="username" id="inputUsername" className="form-control" placeholder="" required=""
                               autoFocus=""/>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="" required=""
                               autoFocus=""/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="" required=""/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Create account</button>
                    </div>

                    {/* Right Box - Gambling Earnings */}
                    <div className="gambling-box">

                    </div>
                </div>
            </body>
        </>
    );
};

export default Register;