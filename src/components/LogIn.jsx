import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contextApi/context";

const LogIn = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(UserContext); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(""); 
    
    // get users details 
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    console.log("users-login", existingUsers);
    
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setLoggedInUser(user);
      setSuccess("Login successful!");
      navigate("/dashboard");
    } else {
      setError("Credentials do not match.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border-2 border-black-500">
        <h2 className="text-2xl font-serif text-center mb-2">Sign in</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-center mb-4">{success}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!email || !password}
            className="w-full bg-gray-300 text-gray-600 font-semibold py-3 rounded-3xl"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
