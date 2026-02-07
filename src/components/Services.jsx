import { Receipt, AccountBalanceWallet, Gavel } from '@mui/icons-material';
import '../styles/components.css';

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon bookkeeping">
            <Receipt />
          </div>
          <h3 className="service-title">Bookkeeping</h3>
          <ul className="service-checklist">
            <li className="service-checklist-item">Monthly Bookkeeping</li>
            <li className="service-checklist-item">Bills & Credit Payments & invoicing</li>
            <li className="service-checklist-item">Allocate Receivables & Reporting</li>
            <li className="service-checklist-item">Monthly Financial Exports</li>
          </ul>
        </div>
        
        <div className="service-card">
          <div className="service-icon payroll">
            <AccountBalanceWallet />
          </div>
          <h3 className="service-title">Payroll Processing</h3>
          <ul className="service-checklist">
            <li className="service-checklist-item">Payroll Processing</li>
            <li className="service-checklist-item">Payroll Tax Filings</li>
            <li className="service-checklist-item">W2 & 1099 Generation</li>
            <li className="service-checklist-item">Lease & Benefits Tracking</li>
          </ul>
        </div>
        
        <div className="service-card">
          <div className="service-icon compliance">
            <Gavel />
          </div>
          <h3 className="service-title">Business Compliance</h3>
          <ul className="service-checklist">
            <li className="service-checklist-item">New Business Setup</li>
            <li className="service-checklist-item">Compliance Reminders</li>
            <li className="service-checklist-item">Sales Tax Registration Support</li>
            <li className="service-checklist-item">General Admin Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
