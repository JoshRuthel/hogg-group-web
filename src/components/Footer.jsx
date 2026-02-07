import '../styles/components.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-logo">H5 HOGG GROUP</h4>
            <p className="footer-description">
              Finance expertise, led by US professionals. Trusted outsourced bookkeeping, 
              payroll, and business compliance services.
            </p>
          </div>
          
          <div className="footer-section">
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-links">
              <li><a href="#services">Bookkeeping</a></li>
              <li><a href="#services">Payroll Processing</a></li>
              <li><a href="#services">Business Compliance</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h5 className="footer-heading">Company</h5>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#results">Results</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-links">
              <li>+1 (423) 113 3567</li>
              <li>cameron@hogggroup.com</li>
              <li>www.hogggroup.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Hogg Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
