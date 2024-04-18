import React from 'react';

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      <div>
      <button onClick={handleMenu}></button>
      <button onClick={handleClose}></button>
      <button onClick={handleLogout}></button>
      </div>
      <h1>Welcome user</h1>
    </>
  );
}