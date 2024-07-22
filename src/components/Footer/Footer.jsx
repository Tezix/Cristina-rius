import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logos">
          <img src="/images/logo1.webp" alt="logo-studies" />
          <img src="/images/logo2.webp" alt="logo-studies" />
          <img src="/images/logo3.avif" alt="logo-studies" />
        </div>
        <div className="footer-info">
          <div className="cristina-logo">
            <img src="/images/logoCristinaFooter.avif" alt="logo-cristina" />
          </div>
          <div className="footer-direction">
            <p style={{ marginBottom: "1.5vw" }}>Dirección</p>
            <p>Calle San Vicente Mártir 84, 2ºAB</p>
            <p>46002 Valencia</p>
          </div>
          <div className="footer-social">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/cristina-rius-verd%C3%BAguez"
                target="_blank"
                rel="noopener"
                tabIndex="0"
                style={{
                  backgroundColor: "rgb(134, 50, 229)",
                  width: "3vw",
                  height: "3vw",
                  borderRadius: "2.3vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/images/instagram.svg" alt="logo-instagram" />
              </a>

              <a
                href="#"
                style={{
                  backgroundColor: "rgb(134, 50, 229)",
                  width: "3vw",
                  height: "3vw",
                  borderRadius: "2.3vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/images/linkedin.svg" alt="logo-linkedin" />
              </a>
            </div>

            <a className="footer-social-mail">
              cristinariusverduguez@gmail.com
            </a>
            <p className="footer-social-phone">611 851 822</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
