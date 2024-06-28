// Version: 1
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomLayout from './components/Layout';
import InboxDrawer from './components/InboxDrawer';
import Listings from './pages/Listings';
import Login from './pages/Login';
import DetailedListing from './pages/ListingDetails';
import './App.css';

const App = () => {
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <Router>
      <CustomLayout showDrawer={showDrawer}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:slug" element={<DetailedListing />} />
        </Routes>
        <InboxDrawer visible={isDrawerVisible} onClose={closeDrawer} />
      </CustomLayout>
    </Router>
  );
};

export default App;
