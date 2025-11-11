import React, { useState } from 'react';
import './admindashboard.css';

// Placeholder components for different admin sections
const UserManagement = () => <div><h3>User Management</h3><p>Here you can manage all users.</p></div>;
const AppSettings = () => <div><h3>App Settings</h3><p>Here you can configure the application settings.</p></div>;
const Analytics = () => <div><h3>Analytics</h3><p>Here you can view the application analytics.</p></div>;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Users');

  const renderContent = () => {
    switch (activeTab) {
      case 'Users':
        return <UserManagement />;
      case 'Settings':
        return <AppSettings />;
      case 'Analytics':
        return <Analytics />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>Admin Control Panel</h2>
      </div>
      <div className="admin-tabs">
        <div
          className={`admin-tab ${activeTab === 'Users' ? 'active' : ''}`}
          onClick={() => setActiveTab('Users')}
        >
          Users
        </div>
        <div
          className={`admin-tab ${activeTab === 'Settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('Settings')}
        >
          Settings
        </div>
        <div
          className={`admin-tab ${activeTab === 'Analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('Analytics')}
        >
          Analytics
        </div>
      </div>
      <div className="admin-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;