import React, { useState, useEffect } from 'react';
import { FaHome, FaStore, FaHeadset, FaRocketchat, FaBars, FaTimes, FaUserShield } from 'react-icons/fa';
import { auth } from '../firebase';
import AdminDashboard from './AdminDashboard';
import './dashboard.css';

// Placeholder components for the different pages
const HomePage = () => <div><h2>Home</h2><p>Welcome to your dashboard!</p></div>;
const StorePage = () => <div><h2>Store</h2><p>Browse our products.</p></div>;
const SupportPage = () => <div><h2>Support</h2><p>Get help and support.</p></div>;
const LiveChatPage = () => <div><h2>Live Chat</h2><p>Chat with us live.</p></div>;

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAdmin(user.email === 'rijanjoshi66@gmail.com');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const renderContent = () => {
    if (activeTab === 'Admin') {
      return <AdminDashboard />;
    }
    switch (activeTab) {
      case 'Home': return <HomePage />;
      case 'Store': return <StorePage />;
      case 'Support': return <SupportPage />;
      case 'Live Chat': return <LiveChatPage />;
      default: return <HomePage />;
    }
  };

  const handleLinkClick = (tab) => {
    setActiveTab(tab);
    setSidebarOpen(false); // Always close sidebar on mobile after a click
  };

  const Sidebar = () => (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">Nexza Store</div>
      <ul className="sidebar-links">
        <li><a href="#" onClick={() => handleLinkClick('Home')} className={activeTab === 'Home' ? 'active' : ''}><FaHome className="icon"/>Home</a></li>
        <li><a href="#" onClick={() => handleLinkClick('Store')} className={activeTab === 'Store' ? 'active' : ''}><FaStore className="icon"/>Store</a></li>
        <li><a href="#" onClick={() => handleLinkClick('Support')} className={activeTab === 'Support' ? 'active' : ''}><FaHeadset className="icon"/>Support</a></li>
        <li><a href="#" onClick={() => handleLinkClick('Live Chat')} className={activeTab === 'Live Chat' ? 'active' : ''}><FaRocketchat className="icon"/>Live Chat</a></li>
        {isAdmin && (
          <li className="hide-on-mobile"><a href="#" onClick={() => handleLinkClick('Admin')} className={activeTab === 'Admin' ? 'active' : ''}><FaUserShield className="icon"/>Admin</a></li>
        )}
      </ul>
    </div>
  );

  if (loading) {
    return <div className="loading-screen"><h2>Loading...</h2></div>;
  }

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        {/* Header for mobile view */}
        <header className="top-nav">
          <div className="menu-icon" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </div>
          <div className="mobile-header-title">Nexza Store</div>
        </header>

        <div className="dashboard-content">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
