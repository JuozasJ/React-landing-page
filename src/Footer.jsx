import email from "./assets/Icon feather-mail.svg"
import instagram from "./assets/Icon awesome-instagram.svg"
import facebook from "./assets/Icon awesome-facebook-f.svg"
import linkedin from "./assets/Icon awesome-linkedin-in.svg"
import twitter from "./assets/Icon awesome-twitter.svg"
import tiktok from "./assets/Icon simple-tiktok.svg"

function About() {
    return (
        <div className="about">
            <a className="logo" href="#">COMPANY</a>
            <p>Company compares hotel room prices across the major online travel agencies. When you 
                search for a room, Company extension scans the top booking sites and runs a price 
                comparison, so you can be confident in knowing you’re getting the best deal!</p>
        </div>
    )
}

function QuickLinks() {
    return (
        <div className="quick-links">
            <h2>QUICK LINKS</h2>
            <ul>
                <li><a href="#">Price Comparison</a></li>
                <li><a href="#">Chrome Extension</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Company Blog</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
    )
}

function Contact() {
    return (
        <div className="contact">
            <h2>CONTACT</h2>
            <a href="#">
                <img src={email} alt="Email:" />
                <span>hi@Company.com</span>
            </a>
        </div>
    )
}

function Social() {
    return (
        <div className="social">
            <h2>SOCIAL</h2>
            <ul>
                <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
                <li><a href="#"><img src={facebook} alt="Facebook" /></a></li>
                <li><a href="#"><img src={linkedin} alt="Linkedin" /></a></li>
                <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
                <li><a href="#"><img src={tiktok} alt="tiktok" /></a></li>
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <div className="foo">
                <About />
                <QuickLinks />
                <div>
                    <Contact />
                    <Social />
                </div>
                <div className="copyright"><p>© 2022 Company. All Rights Reserved.</p></div>
            </div>
        </footer>
    )
}

export default Footer
