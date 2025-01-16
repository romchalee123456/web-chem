import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import LoginPage from './components/LoginPage';
    import RegisterPage from './components/RegisterPage';
    import HomePage from './components/HomePage';
    import BorrowEquipmentPage from './components/BorrowEquipmentPage';
    import ReturnEquipmentPage from './components/ReturnEquipmentPage';
    import BorrowingHistoryPage from './components/BorrowingHistoryPage';
    import EditEquipmentPage from './components/EditEquipmentPage';

    function App() {
      return (
        <div className="app-container">
          <nav className="sidebar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/borrow">Borrow Equipment</Link></li>
              <li><Link to="/return">Return Equipment</Link></li>
              <li><Link to="/history">Borrowing History</Link></li>
              <li><Link to="/edit">Edit Equipment</Link></li>
            </ul>
          </nav>
          <div className="content">
            <header className="header">
              <h1>Equipment Borrowing</h1>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
              </nav>
            </header>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/borrow" element={<BorrowEquipmentPage />} />
              <Route path="/return" element={<ReturnEquipmentPage />} />
              <Route path="/history" element={<BorrowingHistoryPage />} />
              <Route path="/edit" element={<EditEquipmentPage />} />
            </Routes>
          </div>
        </div>
      );
    }

    export default App;
