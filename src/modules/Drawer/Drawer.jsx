import React from "react";
import { Grid } from "@material-ui/core";
import {FaBars} from 'react-icons/fa';
import './DrawerStyles.css';

const Drawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }}>
        <div className="top_section">
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }}>
           <button className="cat-toggle" onClick={toggle}> Categories <FaBars/></button>
          </div>
          <h3 style={{ display: isOpen ? "block" : "none" } }className='Cat'>All Categories</h3>
        </div>
      </div>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <button className="cat-selector">Electronics</button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <button className="cat-selector">Toys</button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <button className="cat-selector">Garments</button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <button className="cat-selector">Medicines</button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <button className="cat-selector">Crockery</button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <button className="cat-selector">Mobile Accessories</button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <button className="cat-selector">Computers</button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <button className="cat-selector">Gardening</button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <button className="cat-selector">House Hold</button>
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
};

export default Drawer;
