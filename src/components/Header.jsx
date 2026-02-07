import { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/components.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">HG HOGG GROUP</div>
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#resources" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Resources</a>
          <a href="#results" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Results</a>
          <Button 
            variant="contained" 
            className="btn btn-primary"
            sx={{
              backgroundColor: 'var(--color-primary-dark)',
              '&:hover': {
                backgroundColor: 'var(--color-primary-blue)',
              },
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Button>
        </nav>
        <IconButton
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
