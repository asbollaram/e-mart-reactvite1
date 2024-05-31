import React from 'react';
import './App.css';
import LandingPage from './e-Mart/pages/LandingPage';
import { Routes, Route } from 'react-router';
import Mobilepage from './e-Mart/pages/Mobilepage';
import ComputerPage from './e-Mart/pages/ComputerPage';
import WatchesPage from './e-Mart/pages/WatchesPage';
import MenFusionPage from './e-Mart/pages/MenFusionPage';
import WomenFushionPage from './e-Mart/pages/WomenFushionPage';
import FurnituresPage from './e-Mart/pages/FurnituresPage';
import AirConditionPage from './e-Mart/pages/AirConditionPage';
import KitchenPage from './e-Mart/pages/KitchenPage';
import CartProductDetails from './detailscart/CartProductDetails';
import UserCart from './e-Mart/UserCart';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mobile" element={<Mobilepage />} />
          <Route path="/computers" element={<ComputerPage />} />
          <Route path="/watches" element={<WatchesPage />} />
          <Route path="/menfashion" element={<MenFusionPage />} />
          <Route path="/womanfashion" element={<WomenFushionPage />} />
          <Route path="/furniture" element={<FurnituresPage />} />
          <Route path="/ac" element={<AirConditionPage />} />
          <Route path="/kitchen" element={<KitchenPage />} />
          <Route path="/mobile/:id" element={<CartProductDetails />} />
          <Route path="/cart" element={<UserCart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
