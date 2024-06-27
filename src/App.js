import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomLayout from './components/Layout';
import Login from './pages/Login';
import Listings from './pages/Listings';
import DetailedListing from './pages/ListingDetails';
import InboxDrawer from './components/InboxDrawer';
import './App.css';

const App = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onClose = () => {
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
        <InboxDrawer visible={isDrawerVisible} onClose={onClose} />
      </CustomLayout>
    </Router>
  );
};

export default App;
