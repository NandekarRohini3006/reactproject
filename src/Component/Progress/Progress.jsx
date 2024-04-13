import "./Progress.css";
import { FaArrowRight, FaBell, FaLeaf, FaLock } from "react-icons/fa";

const Progress = () => {
  return (
    <>
      <div className="track">
        <div className="m-auto  py-5 container-fluid">
          <div className="row d-flex justify-content-center">
            <button className="btn  btnpro">Boost your productivity</button>

            <h2 className="headpro text-center ">
              A more effective way <br />
              to track progress
            </h2>
            <p className="text-center">
              Effortlessly turn your ideas a fully functional,
              <br /> responsive, no-code SaaS website in just minutes with
              <br />
              the set of free components for Framer.
            </p>
            <div className="d-flex">
              <img
                className="imgleft d-none d-md-block d-lg-block d-xl-block"
                src="./images/tortus.png"
                alt="logo"
                width="180px"
                height="180px"
              />
              <img src="./images/AppDay@2.png" alt="data" width="88%" />
              <img
                className="imgright d-none d-md-block d-lg-block d-xl-block"
                src="./images/pyramid.png"
                alt="logo"
                width="180px"
                height="180px"
              />
            </div>
            <div className="row ms-auto p-auto d-flex justify-content-center mt-2">
              <div className="m-auto px-0 py-0 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div class="card bg-transparent border-0">
                  <div class="card-body">
                    <FaLeaf />
                    <h5 class="card-title">Integration ecosystem</h5>
                    <p class="card-text">
                      Track your progress and motivate <br /> your effort
                      everyday.
                    </p>
                    <button className="btn rounded btn-sm btnver">
                      Learn More
                      <FaArrowRight className="ms-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="m-auto px-0 py-0 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div class="card bg-transparent border-0">
                  <div class="card-body ">
                    <img
                      className="bg-transparent"
                      src="./images/goallogo.png"
                      alt="logo"
                      width="25px"
                      height="25px"
                    />
                    <h5 class="card-title">Goal setting and tracking</h5>
                    <p class="card-text">
                      Set and track goals with <br /> manageable task
                      breakdowns.
                    </p>
                    <button className="btn rounded btn-sm btnver">
                      Learn More
                      <FaArrowRight className="ms-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="m-auto px-0 py-0 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div class="card bg-transparent border-0">
                  <div class="card-body">
                    <FaLock />
                    <h5 class="card-title">Secure data encryption </h5>
                    <p class="card-text">
                      Ensure your data's safety with top-
                      <br />
                      tier encryption.
                    </p>
                    <button className="btn rounded btn-sm btnver">
                      Learn More
                      <FaArrowRight className="ms-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-0 py-0 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div class="card bg-transparent border-0">
                  <div class="card-body">
                    <FaBell />
                    <h5 class="card-title">Customizable notifications</h5>
                    <p class="card-text">
                      Get alerts on tasks and deadlines that matter most.
                    </p>
                    <button className="btn rounded btn-sm btnver">
                      Learn More
                      <FaArrowRight className="ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Progress;
