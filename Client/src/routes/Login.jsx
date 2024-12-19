import {Link} from 'react-router-dom';
import '../App.css';

const Login = () => {
    return (
        <div className='pageCont'>
            <div>
                <h2>Sign In</h2>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name ="username"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id = "password" name="password" />
                    <button>Sign in</button>
                </form>
                <span>Don't have an account?<Link to="/signup"> Sign up</Link></span>

            </div>
            <div>
                <h1>Welcome to ChatterApp!</h1>
                <p>The premier anonymous chatroom for web users!</p>
            </div>
        </div>
    )
}

export default Login;