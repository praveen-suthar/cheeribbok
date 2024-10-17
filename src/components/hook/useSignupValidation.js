import { useState } from 'react';

const useValidation = () => {
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; // At least 8 characters, one letter with capital and one number
        return regex.test(password);
    };

    const validateName = (name) => {
        return name.length >= 3; // minimum 3 characters 
    };

    const validateForm = (name, email, password) => {

        if (!validateName(name)) {
            setError("Name is required.");
            return false;
        }
        if (!validateEmail(email)) {
            setError("Invalid email format.");
            return false;
        }
        if (!validatePassword(password)) {
            setError("Password must be at least 8 characters long and include one Capital letters and numbers.");
            return false;
        }
        setError('');
        return true;
    };
    return { error, validateForm, setError};
};
export default useValidation;
