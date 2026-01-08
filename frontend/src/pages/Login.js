import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import './auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/analytics-hub');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='auth-page'>
      <div className='auth-container'>
        <h2 className='auth-title'>Welcome Back</h2>
        <p className='auth-subtitle'>Sign in to your Smartlytics account</p>

        <input
          type='email'
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />

        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />

        {error && <div style={{color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem'}}>Error: {error}</div>}

        <button onClick={handleLogin} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        <p>
          Don't have an account? <Link to='/register'>Create one</Link>
        </p>
      </div>
    </div>
  );
}