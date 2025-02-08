import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BaseComponent from "../BaseComponent";

class AppBarComponent extends BaseComponent {
  createAppBar(title, menuItems, anchorEl, handleMenu, handleClose) {
    const id = this.generateId();
    return {
      id,
      element: (
        <AppBar position="static" id={id}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            {title}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      )
    };
  }
}

export default AppBarComponent;
