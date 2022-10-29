import React from 'react';
import plane from '../assets/airplane.png';
import Person2Icon from '@mui/icons-material/Person2';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const go = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-light" style={{ backgroundColor: '#eee' }}>
        <Box><Person2Icon onClick={() => {
          go('/login')
        }} /></Box>
        <div
          className="navbar-brand"
          style={{ fontWeight: 'bold', fontSize: '25px' }}
        >
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
