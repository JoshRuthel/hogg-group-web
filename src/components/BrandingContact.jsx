import { TextField, Button } from '@mui/material';
import cardsImage from '../assets/pngs/cards.png';
import '../styles/components.css';

function BrandingContact() {
  return (
    <section className="branding-contact">
      <div className="branding-contact-container">
        <div className="business-cards">
          <img 
            src={cardsImage} 
            alt="Business cards" 
            className="business-cards-image"
          />
        </div>
        <div className="contact-form">
          <h3>Easy Designs.</h3>
          <p>
            Dedicated interface for all your accounting needs. Empowered Platform, 
            designed for modern businesses.
          </p>
          <TextField
            fullWidth
            label="Send us your email"
            variant="outlined"
            className="form-input"
            sx={{
              marginBottom: '1.5rem',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'var(--color-gray)',
                },
                '&:hover fieldset': {
                  borderColor: 'var(--color-accent-blue)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'var(--color-accent-blue)',
                },
              },
            }}
          />
          <Button 
            variant="contained" 
            fullWidth
            className="btn btn-primary btn-large"
            sx={{
              backgroundColor: 'var(--color-primary-dark)',
              '&:hover': {
                backgroundColor: 'var(--color-primary-blue)',
              },
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BrandingContact;
