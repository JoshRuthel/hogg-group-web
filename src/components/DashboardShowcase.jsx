import mockupImage from '../assets/pngs/mockup.png';
import '../styles/components.css';

function DashboardShowcase() {
  return (
    <section className="dashboard-showcase">
      <div className="dashboard-showcase-container">
        <div className="dashboard-showcase-content">
          <h2>Client Dashboard</h2>
          <p>Modern interface for your customers.</p>
        </div>
        <div className="device-mockups">
          <img 
            src={mockupImage} 
            alt="Device mockups showing laptop and phone" 
            className="mockup-image"
          />
        </div>
      </div>
    </section>
  );
}

export default DashboardShowcase;
