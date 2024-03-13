import "./Footer.css"
import React from "react"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-logos">
                    <img src="/images/logo1.png" alt="logo-studies" />
                    <img src="/images/logo2.png" alt="logo-studies" />
                    <img src="/images/logo3.png" alt="logo-studies" />
                </div>
                <div className="footer-info">
                    <div className="cristina-logo">
                        <img src="/images/logoCristina.png" alt="logo-cristina" />
                    </div>
                    <div className="footer-direction">
                        <p>direccion</p>
                    </div>
                    <div className="footer-social">
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Footer