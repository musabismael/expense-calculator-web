import { useState } from 'react';
import { resetPassword } from '../api/auth'; // Import your API functions

function PasswordResetForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      // Handle successful password reset request (e.g., show success message)
    } catch (error) {
      // Handle error (show error message, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Reset Password</button>
    </form>
  );
}

export default PasswordResetForm;
