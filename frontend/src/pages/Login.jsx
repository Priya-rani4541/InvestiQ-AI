import "./Auth.css";

import LoginForm from "../components/auth/LoginForm";

const Login = () => {
    return (

        <div className="auth-page">

            <div className="auth-left">

                <div className="brand">

                    <h1>InvestiQ-AI</h1>

                    <p>
                        Enterprise AI Investment Research Platform
                    </p>

                </div>

                <div className="feature-list">

                    <div className="feature-item">
                        <span>🚀</span>
                        <p>AI Powered Investment Analysis</p>
                    </div>

                    <div className="feature-item">
                        <span>🤖</span>
                        <p>Multi-Agent Decision Engine</p>
                    </div>

                    <div className="feature-item">
                        <span>📄</span>
                        <p>RAG Based Annual Report Analysis</p>
                    </div>

                    <div className="feature-item">
                        <span>📈</span>
                        <p>Professional Investment Insights</p>
                    </div>

                </div>

            </div>

            <div className="auth-right">

                <LoginForm />

            </div>

        </div>

    );
};

export default Login;