import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './VerificationPage.css';

const VerificationPage = () => (
    <div className="section">
        <div className="container">
            <div className="full-height">
                <h6><span>Log In </span><span>Sign Up</span></h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap">
                    <div className="card-3d-wrapper">
                        <div className="card-front">
                            <div className="center-wrap">
                                <SignIn />
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="center-wrap">
                                <SignUp />
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
);

export default VerificationPage;