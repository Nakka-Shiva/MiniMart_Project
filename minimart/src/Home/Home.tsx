import './Home.css'
function Home() {
    return <div>
        <nav>
            
            <ul className="nav-links">
        <li><a href="/h">Home</a></li>
        <li><a href="/">Login</a></li>
        <li className="center"><a href="/p">Products</a></li>
        <li className="forward"><a href="#abo">About Us</a></li>
        </ul>
            </nav>
    
        <div className="text">
            <a className="linktext textStyle" href="#">
                WELCOME 
               <p className="tp"> TO </p>
                MINI-MART
            </a>
        </div>
        <div className="background1"></div>
      <div className="background2"></div>
      <div className="background3"></div>
      <section id="abo">
        <div className="responsive-container-block bigContainer">
            <div className="responsive-container-block Container">
              <p className="text-blk heading textColour">
                About Us
              </p>
              <p className="text-blk subHeading textColour">
                MINI MART Ltd  (C52279) is a web based ecommerce website founded in Hyderabad in 2024.This is a online website for shopping from home and it has a good interface.
              </p><br />
        <p className="textColour">
        At mini mart we take a proactive approach towards adopting and learning the latest standards in order to create future-proof designs and have developed applications, in-house tools, websites & other software solutions for clients worldwide, ranging from U.S. Senators to local takeaways and multinational corporations.
        </p><br />
        <p className="textColour">
        Mini mart has featured on international publications, presented its work internationally, was nominated for world renowned awards and has contributed to the open-source community.
        </p><br />
        <p className="textColour">
        Mini mart is included in Apple Developer programme and owns a license allowing it to deploy and publish solutions to the Appstore for iPhone, iPad and Apple Watch.
        </p><br />
        <p className="textColour">
        Mini mart is a Google Play publisher allowing development of priced apps, in-­app purchases and/or subscriptions. 
        
              </p><br />
              <div className="social-icons-container">
                <a className="social-icon">
                  <img className="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png" />
                </a>
                <a className="social-icon">
                  <img className="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png" />
                </a>
                <a className="social-icon">
                  <img className="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png" />
                </a>
                <a className="social-icon">
                  <img className="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png" />
                </a>
              </div>
            </div>
          </div>
      </section>
    </div>
}
export default Home;