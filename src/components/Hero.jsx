import { Button } from '@mui/material';
import dashboardImage from '../assets/pngs/dashboard.png';
import '../styles/components.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Finance expertise, led by US professionals.</h1>
          <p>
            Trusted outsourced bookkeeping, payroll, and business compliance services, 
            powered by modern technology.
          </p>
          <Button 
            variant="contained" 
            className="btn btn-primary btn-large"
            sx={{
              backgroundColor: 'var(--color-white)',
              color: 'var(--color-primary-dark)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                transform: 'translateY(-2px)',
                boxShadow: 'var(--shadow-md)',
              },
            }}
          >
            Get Started
          </Button>
        </div>
        <div className="dashboard-mockup">
          <img 
            src={dashboardImage} 
            alt="Dashboard preview" 
            className="dashboard-image-background"
          />
          <img 
            src={dashboardImage} 
            alt="Dashboard preview" 
            className="dashboard-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
