import "./FooterSection.css";
import {
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
const FooterSection = () => {
  return (
    <>
      <div className="mt-4 pb-2 pt-2 footcont container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-4 col-xl-4">
            <img
              className="d-none d-md-block d-lg-block d-xl-block"
              src="./images/emojistar.png"
              width="300px"
              height="300px"
              alt="star"
            />
          </div>
          <div className="starp m-auto p-auto col-12 col-sm-12 col-lg-4 col-xl-4">
            <h2>Sign up for free today</h2>
            <p>
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
            <button className="btn btn-dark">Get for free</button>
            <button className="btn rounded btn-sm btnver">
              Learn More
              <FaArrowRight className="ms-2" />
            </button>
          </div>
          <div className="col-12 col-sm-12 col-lg-4 col-xl-4">
            <img
              className="d-none d-md-block d-lg-block d-xl-block"
              src="./images/helix2.png"
              width="300px"
              height="300px"
              alt="helix"
            />
          </div>
        </div>
      </div>
      <div className="footercont2  p-5">
        <footer className="row d-flex justify-content-space-between">
          <div className="col-12 col-sm-12 col-md-4 col-xl-4 col-lg-4">
            <img
              src="./images/ssasimage.png"
              alt="ssaslogo"
              width="50px"
              height="50px"
            />

            <p className="footerp py-4 pe-4">
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website.
            </p>
            <div className=" py-4">
              <img
                className="sociali m-1"
                src="./images/xtwitter.png"
                alt="logo"
                width="20px"
                height="20px"
              />
              <FaInstagram className="sociali m-1" />
              <FaPinterest className="sociali m-1" />
              <FaLinkedin className="sociali m-1" />
              <FaTiktok className="sociali m-1" />
              <FaYoutube className="sociali m-1" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-xl-2 col-lg-2">
            <h4 className="text-light ">Product</h4>
            <p className="footerp">Features</p>
            <p className="footerp">Integrations</p>
            <p className="footerp">Updates</p>
            <p className="footerp">FAQ</p>
            <p className="footerp">Pricing</p>
          </div>
          <div className=" col-12 col-sm-12 col-md-2 col-xl-2 col-lg-2">
            <h4 className="text-light">Company</h4>
            <p className="footerp">About</p>
            <p className="footerp">Blog</p>
            <p className="footerp">Careers</p>
            <p className="footerp">Manifesto</p>
            <p className="footerp">Press</p>
            <p className="footerp">Contact</p>
          </div>
          <div className=" col-12 col-sm-12 col-md-2 col-xl-2 col-lg-2">
            <h4 className="text-light">Resources</h4>
            <p className="footerp">Examples</p>
            <p className="footerp">Community</p>
            <p className="footerp">Guides</p>
            <p className="footerp">Docs</p>
          </div>
          <div className=" col-12 col-sm-12 col-md-2 col-xl-2 col-lg-2">
            <h4 className="text-light">Legal</h4>
            <p className="footerp">Privacy</p>
            <p className="footerp">Terms</p>
            <p className="footerp">Security</p>
          </div>
        </footer>
      </div>
    </>
  );
};
export default FooterSection;
