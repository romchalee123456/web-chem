import React from 'react';

    function RegisterPage() {
      return (
        <div className="form-container">
          <h2>Register</h2>
          <form>
            <label>First Name</label>
            <input type="text" />
            <label>Last Name</label>
            <input type="text" />
            <label>Position</label>
            <select>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            <label>Department</label>
            <input type="text" />
            <label>Year</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
            <button type="submit">Sign In</button>
          </form>
        </div>
      );
    }

    export default RegisterPage;
