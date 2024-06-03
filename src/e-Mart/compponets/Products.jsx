import React from 'react';
import Mobile from './Mobile';
import Computers from './Computers';
import Watches from './Watches';
import MenFushion from './MenFushion';
import WomenDress from './WomenDress';
import Furnitures from './Furnitures';
import Aircondition from './Aircondition';
import Kitchen from './Kitchen';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <Mobile />
      <Computers />
      <Watches />
      <MenFushion />
      <WomenDress />
      <Furnitures />
      <Aircondition />
      <Kitchen />
    </div>
  );
};

export default Products;
