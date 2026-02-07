import '../styles/components.css';
import rampLogo from '../assets/integrations/ramp.svg';
import plaidLogo from '../assets/integrations/plaid.svg';
import gustoLogo from '../assets/integrations/gusto.svg';
import servicenowLogo from '../assets/integrations/servicenow.svg';
import quickbooksLogo from '../assets/integrations/quickbooks.svg';

function Integrations() {
  // Placeholder for integration logos - these will be replaced with actual images
  const integrations = [
    rampLogo,
    plaidLogo,
    gustoLogo,
    servicenowLogo,
    quickbooksLogo
  ];

  return (
    <section className="integrations">
      <div className="integrations-container">
        <div className="integrations-logos">
          {integrations.map((logo, index) => (
            <img 
              key={index}
              src={logo} 
              alt={`Integration logo ${index + 1}`}
              className="integration-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integrations;