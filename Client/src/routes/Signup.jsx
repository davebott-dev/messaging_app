import {Link} from 'react-router-dom';
import '../App.css';

const Signup = () => {

    return (
        <div className='pageCont'>
            <div>
                <h2>Create your account</h2>
                <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name ="name"/>

                <label htmlFor="email">Email</label>
                    <input type="email" id="email" name ="email"/>

                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name ="username"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id = "password" name="password" />

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id = "confirm-password" name="confirm-password" />

                    <button>Sign in</button>
                </form>
                <span>Already have an account?<Link to="/login"> Sign in</Link></span>

            </div>
            <div>
                <div className="grey one"></div>
                <div className="title-card">
                    <h1>Welcome to ChatterApp!</h1>
                    <p>The premier anonymous chatroom for web users!</p>
                </div>
                <div className="yellow two"></div>
                <div className="grey three"></div>
                <div className="yellow four"></div>
            </div>
        </div>    )
}

export default Signup;

