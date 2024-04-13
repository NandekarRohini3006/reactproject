import "./HeadSection.css";
import { FaArrowRight } from "react-icons/fa";
const HeadSection = () => {
  return (
    <>
      <div className="row bg-black d-flex justify-content-center">
        <div className="d-flex justify-content-center  col-sm-12 col-lg-6 col-md-6 col-12">
          <p className="bartext mt-1 fs-6 d-none d-lg-block d-xl-block">
            This page is included in a free SaaS Website Kit.
          </p>
          <a className="link fs-6" href="#">
            View the complete Kit
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="headdiv container-fluid ">
        <div>
          <nav class="bg-transparent navbar navbar-expand-lg navbar-expand-md ">
            <div class="container-fluid ">
              <div className="d-flex  ">
                <img
                  src="./images/ssasimage.png"
                  alt="logo"
                  width="40px"
                  height="40px"
                />
                <h6 className="text-dark p-2 d-none d-md-block d-lg-block d-xl-block">
                  made by
                </h6>
                <img
                  className="d-none d-md-block d-lg-block d-xl-block"
                  src="./images/framer.png"
                  width="70px"
                  height="42px"
                  alt="logo"
                />
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav px-4 ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Customers
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Update
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Help
                    </a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <button class="btn btn-dark btn-sm rounded" type="submit">
                    Get for Free
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="row d-flex">
          <div className=" col-12 col-sm-12 col-md-4 col-lg-4">
            <div>
              <button className="btn rounded-pill btn-sm btnver">
                Version 2.0 is here
              </button>
              <h1 className="mainh">Pathway to productivity</h1>
              <p className="conthead headpara">
                Celebrate the joy of accomplishment with an app designed to
                track your progress, motivate your efforts, and celebrate your
                successes.
              </p>
              <div className="d-flex p-2">
                <button class="btn btn-dark btn-sm rounded" type="submit">
                  Get for Free
                </button>
                <button className="btn rounded btn-sm btnver">
                  Learn More
                  <FaArrowRight className="ms-2" />
                </button>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-8 col-lg-8">
            <div className="d-flex ms-auto">
              <img
                className="cylimg d-none d-md-block d-lg-block d-xl-block"
                src="./images/cylinder.png"
                alt="cylinder"
              />
              <img className="imghead" src="./images/vurtel.png" alt="vurtel" />
              <img
                className="halfimg  d-none d-md-none d-lg-block d-xl-block"
                src="./images/half-tortus.png"
                alt="vurtel"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="logosection d-flex justify-content-evenly ">
        <img className="logos opacity-25" src="./images/acme.png" alt="logos" />
        <img
          className="logos opacity-50"
          src="./images/quantum.png"
          alt="logos"
        />
        <img className="logos" src="./images/echo.png" alt="logos" />
        <img
          className="logos opacity-50"
          src="./images/celestia.png"
          alt="logos"
        />
        <img
          className="logos opacity-25"
          src="./images/pulse.png"
          alt="logos"
        />
        <img className="logos opacity-25" src="./images/apex.png" alt="logos" />
      </div>
    </>
  );
};
export default HeadSection;
