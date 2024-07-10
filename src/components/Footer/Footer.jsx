import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logos">
          <img src="/images/logo1.webp" alt="logo-studies" />
          <img src="/images/logo2.jpg" alt="logo-studies" />
          <img src="/images/logo3.png" alt="logo-studies" />
        </div>
        <div className="footer-info">
          <div className="cristina-logo">
            <img src="/images/logoCristina.png" alt="logo-cristina" />
          </div>
          <div className="footer-direction">
            <p>Dirección</p>
            <p>Calle San Vicente Mártir 84, 2ºAB</p>
            <p>46002 Valencia</p>
          </div>
          <div className="footer-social">
            <img src="/images/logo-linkedin.png" alt="logo-linkedin" />
            <img src="/images/logo-instagram.png" alt="logo-instagram" />
            <p className="footer-social-mail">
              cristinariusverduguez@gmail.com
            </p>
            <p className="footer-social-phone">611 851 822</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
