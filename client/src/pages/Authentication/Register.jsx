import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setError("");
        setLoading(true);

        try {
            await axios.post(
                "http://localhost:5000/api/auth/register",
                formData,
                {
                    withCredentials: true,
                }
            );
            navigate("/");

        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Registration failed"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">

            <div
                className="card rgb-card shadow-sm w-100" style={{ maxWidth: "30rem" }}>
                <div className="card-body p-4 p-md-5">
                    <h1 className="text-center mb-4"> Create Account </h1>

                    {error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label"> Name </label>

                            <input type="text" name="name" className="form-control" 
                            value={formData.name} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Email
                            </label>

                            <input type="email" name="email" className="form-control" 
                            value={formData.email} onChange={handleChange} required />
                        </div>

                        <div className="mb-4">
                            <label className="form-label"> Password </label>

                            <input type="password" name="password" className="form-control"
                                value={formData.password} onChange={handleChange} 
                                maxLength={15} required />
                        </div>

                        <button type="submit" className="btn btn-primary w-100" 
                        disabled={loading}> {loading ? "Creating Account..." : "Register"}
                        </button>

                    </form>

                    <div className="text-center mt-4">
                        Already have an account?{" "}
                        <button type="button" className="btn btn-link p-0"
                            onClick={() => navigate("/login")}>
                            Login
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Register;