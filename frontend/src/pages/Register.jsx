import "./Auth.css";

import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {

    return (

        <div className="auth-page">

            <div className="auth-left">

                <div className="brand">

                    <h1>InvestiQ-AI</h1>

                    <p>
                        Join the next generation AI investment research platform.
                    </p>

                </div>

                <div className="feature-list">

                    <div className="feature-item">
                        <span>🚀</span>
                        <p>AI Powered Investment Analysis</p>
                    </div>

                    <div className="feature-item">
                        <span>🤖</span>
                        <p>Enterprise Multi-Agent System</p>
                    </div>

                    <div className="feature-item">
                        <span>📄</span>
                        <p>Upload Annual Reports</p>
                    </div>

                    <div className="feature-item">
                        <span>📊</span>
                        <p>Professional Dashboard</p>
                    </div>

                </div>

            </div>

            <div className="auth-right">

                <RegisterForm />

            </div>

        </div>

    );

};

export default Register;