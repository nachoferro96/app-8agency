import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./Menu.css";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="total">
      <button onClick={handleClick} className="letra">
        Menu
      </button>

      <Menu
        className="menu-opciones"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <a href="#home" className="link">
          <MenuItem onClick={handleClose}>Inicio</MenuItem>
        </a>
        <a href="#about" className="link">
          <MenuItem onClick={handleClose}>Sobre nosotros</MenuItem>
        </a>
        <a href="#proyecto" className="link">
          <MenuItem onClick={handleClose}> Proyectos</MenuItem>
        </a>

        <MenuItem onClick={handleClose}>
          <a href="#contact" className="link">
            Contacto
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
