import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { setCredentials } from "../../features/auth/authSlice";
import { loginUser } from "../../features/auth/authAPI";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        setError("");
        setLoading(true);

        try {
            const user = await loginUser(
                email,
                password
            );

            // Update Redux with the real authenticated user
            dispatch(setCredentials(user));

            const destination =
                location.state?.from?.pathname || "/";

            navigate(destination, {
                replace: true,
            });

        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Login failed"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">

            <div className="card rgb-card shadow-sm w-100"
                style={{ maxWidth: "30rem" }}>
                <div className="card-body p-4 p-md-5">

                    <p className="text-center mb-4 display-4"> Login </p>

                    {error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label"> Email </label>

                            <input type="email" className="form-control"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)}
                                required />
                        </div>

                        <div className="mb-4">
                            <label className="form-label"> Password </label>

                            <input type="password" className="form-control"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)}
                                required />
                        </div>

                        <button type="submit" className="btn btn-primary w-100"
                            disabled={loading} >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                    </form>

                    <div className="text-center mt-4">
                        <span>
                            Don't have an account?{" "}
                        </span>

                        <button
                            type="button"
                            className="btn btn-link p-0"
                            onClick={() =>
                                navigate("/register")
                            }
                        >
                            Create one
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Login;