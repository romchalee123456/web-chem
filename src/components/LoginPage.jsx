import React from 'react';

    function LoginPage() {
      return (
        <div className="form-container">
          <h2>Login</h2>
          <form>
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
            <label>
              <input type="checkbox" /> Remember password
            </label>
            <button type="submit">Login</button>
            <p>
              Don't have an account? <a href="/register">Sign Up</a>
            </p>
            <p>
              <a href="/forgot-password">Forgot your password?</a>
            </p>
          </form>
        </div>
      );
    }

    export default LoginPage;
