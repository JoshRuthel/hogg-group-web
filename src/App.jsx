import Header from './components/Header';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import Tagline from './components/Tagline';
import Services from './components/Services';
import DashboardShowcase from './components/DashboardShowcase';
import Integrations from './components/Integrations';
import IntegrationsDivider from './components/IntegrationsDivider';
import BrandingContact from './components/BrandingContact';
import Footer from './components/Footer';
import './styles/variables.css';
import './styles/main.css';
import './styles/components.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SectionDivider />
      <Tagline />
      <Services />
      <DashboardShowcase />
      <Integrations />
      <IntegrationsDivider />
      <BrandingContact />
      <Footer />
    </div>
  );
}

export default App;
