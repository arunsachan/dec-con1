import React, { useState } from 'react';

const SignUpForm = () => {
  // State variables for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State variables for input validation
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  // Event handler for email input
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    // Validate email format
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    setEmail(newEmail);
    setEmailValid(isValid);
  };

  // Event handler for password input
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    // Validate password length
    const isValid = newPassword.length >= 8;
    setPassword(newPassword);
    setPasswordValid(isValid);
  };

  // Event handler for confirm password input
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    // Validate password match
    const isValid = newConfirmPassword === password;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordValid(isValid);
  };

  // Event handler for form submission
  const handleSubmit = () => {
    // Check if all inputs are valid
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can\'t submit the form');
    }
  };

  return (
    <div>
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        style={{ border: emailValid ? '1px solid green' : '1px solid red' }}
      />
      {!emailValid && <p>Error: Enter a valid email address</p>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ border: passwordValid ? '1px solid green' : '1px solid red' }}
      />
      {!passwordValid && <p>Error: Password must be at least 8 characters long</p>}

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        style={{ border: confirmPasswordValid ? '1px solid green' : '1px solid red' }}
      />
      {!confirmPasswordValid && <p>Error: Passwords do not match</p>}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUpForm;