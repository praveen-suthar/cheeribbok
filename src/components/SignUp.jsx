import { useState, useContext } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contextApi/context'; 
import useValidation from './hook/useSignupValidation'; 

const SignUp = () => {
  const { setLoggedInUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const { error, setError, validateForm} = useValidation();
  const navigate = useNavigate(); 
  
  console.log(' From SignUp',formData)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, password } = formData;
    
    if (!validateForm(name, email, password)) {
      return; 
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some(user => user.email === email);
    if (userExists) {
      setError("This email is already registered.");
      return;
    }

    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setLoggedInUser(formData);
    
    // Show success message
    setSuccessMessage("Sign up successful!");
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-serif text-center mb-2">Create an account</h2>
        <p className="text-center text-gray-500 mb-6">
          Already have an account?{" "}
          <Link to='/login' className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
        
        {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">What should we call you?</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your profile name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">What&apos;s your email?</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2">Create a password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
            >
              <Icon icon={showPassword ? eye : eyeOff} />
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-300 text-gray-600 font-semibold py-3 rounded-3xl hover:bg-gray-400"
          >
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

