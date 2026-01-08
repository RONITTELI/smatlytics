import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/analytics-hub');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='auth-page'>
      <div className='auth-container'>
        <h2 className='auth-title'>Get Started</h2>
        <p className='auth-subtitle'>Create your Smartlytics account</p>

        <form onSubmit={handleRegister}>
          <input
            type='email'
            placeholder='Email Address'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <input
            type='password'
            placeholder='Password (min 6 chars)'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />

          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={loading}
          />

          {error && <div style={{color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem'}}>Error: {error}</div>}

          <button type='submit' disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </div>
    </div>
  );
}