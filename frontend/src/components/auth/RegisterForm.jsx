import "./RegisterForm.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

const RegisterForm = () => {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        fullName: "",

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

            const response = await registerUser(formData);

            login(

                response.data.token,

                response.data.user

            );

            navigate("/dashboard");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Registration Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="register-card">

            <div className="register-header">

                <h2>Create Account 🚀</h2>

                <p>

                    Join InvestiQ-AI and start AI-powered investment research.

                </p>

            </div>

            <form

                className="register-form"

                onSubmit={handleSubmit}

            >

                <div className="form-group">

                    <label>

                        Full Name

                    </label>

                    <input

                        type="text"

                        name="fullName"

                        placeholder="Enter your full name"

                        value={formData.fullName}

                        onChange={handleChange}

                        required

                    />

                </div>

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

                        placeholder="Create password"

                        value={formData.password}

                        onChange={handleChange}

                        required

                    />

                </div>

                <button

                    className="register-btn"

                    disabled={loading}

                >

                    {

                        loading

                        ?

                        "Creating Account..."

                        :

                        "Create Account"

                    }

                </button>

            </form>

            <div className="register-footer">

                <p>

                    Already have an account?

                </p>

                <Link to="/login">

                    Login

                </Link>

            </div>

        </div>

    );

};

export default RegisterForm;