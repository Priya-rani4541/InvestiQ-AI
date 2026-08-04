import "./LoginForm.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        email: "",

        password: "",

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await loginUser(formData);

            login(

                response.data.token,

                response.data.user

            );

            navigate("/dashboard");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Login Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="login-card">

            <div className="login-header">

                <h2>

                    Welcome Back 👋

                </h2>

                <p>

                    Login to continue using InvestiQ-AI

                </p>

            </div>

            <form

                className="login-form"

                onSubmit={handleSubmit}

            >

                <div className="form-group">

                    <label>

                        Email Address

                    </label>

                    <input

                        type="email"

                        name="email"

                        placeholder="Enter your email"

                        value={formData.email}

                        onChange={handleChange}

                        required

                    />

                </div>

                <div className="form-group">

                    <label>

                        Password

                    </label>

                    <input

                        type="password"

                        name="password"

                        placeholder="Enter your password"

                        value={formData.password}

                        onChange={handleChange}

                        required

                    />

                </div>

                <button

                    className="login-btn"

                    disabled={loading}

                >

                    {

                        loading

                        ?

                        "Logging In..."

                        :

                        "Login"

                    }

                </button>

            </form>

            <div className="login-footer">

                <p>

                    Don't have an account?

                </p>

                <Link to="/register">

                    Create Account

                </Link>

            </div>

        </div>

    );

};

export default LoginForm;