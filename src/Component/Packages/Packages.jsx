import "./Packages.css";
import { FaCheck } from "react-icons/fa";

const Packages = () => {
  return (
    <>
      <div>
        <div className="ms-auto px-2  py-5 container-fluid">
          <div className="row ms-auto px-auto py-2 text-center d-flex justify-content-center">
            <button className="btn  btnpro">Boost your productivity</button>

            <h2 className="headpro text-center ">
              A more effective way <br />
              to track progress
            </h2>
            <p className="text-center">
              Effortlessly turn your ideas a fully functional,
              <br /> responsive, no-code SaaS website in just minutes with{" "}
              <br />
              the set of free components for Framer.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-end  mt-2">
          <div className="  col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="packcard d-flex justify-content-center p-4 card ">
              <h5 className="packheading">Free</h5>

              <h2>
                $0
                <span className="packheading">
                  <h5>/monthly</h5>
                </span>
              </h2>
              <div className="card-content">
                <button className="btn btn-dark px-5 w-100">
                  Get started for free
                </button>
                <br />

                <p>
                  <FaCheck className="m-2" />
                  Up to 5 project members
                </p>

                <p>
                  <FaCheck className="m-2" />
                  Unlimited tasks and projects
                </p>

                <p>
                  <FaCheck className="m-2" />
                  2GB storage
                </p>

                <p>
                  <FaCheck className="m-2" />
                  Integrations
                </p>

                <p>
                  <FaCheck className="m-2" />
                  Basic support
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="packcard card bg-dark text-light d-flex justify-content-center p-4 ">
              <div className="card-body ">
                <div className="row justify-content-between">
                  <h5 className=" packheading col-4">Pro </h5>
                  <button className="cardbutton col-5">Most Popular</button>
                </div>

                <h2>
                  $9
                  <span className="packheading">
                    <h5>/monthly</h5>
                  </span>
                </h2>
                <div className="card-content">
                  <button className="btn btn-light px-5 ms-auto w-100">
                    Sign up now
                  </button>
                  <br />

                  <p>
                    <FaCheck className="m-2" />
                    Up to 5 project members
                  </p>

                  <p>
                    <FaCheck className="m-2" />
                    Unlimited tasks and projects
                  </p>

                  <p>
                    <FaCheck className="m-2" />
                    50GB storage
                  </p>

                  <p>
                    <FaCheck className="m-2" />
                    Integrations
                  </p>

                  <p>
                    <FaCheck className="m-2" />
                    Priority support
                  </p>
                  <p>
                    <FaCheck className="m-2" />
                    Advanced support
                  </p>
                  <p>
                    <FaCheck className="m-2" />
                    Export support
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="  col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="packcard d-flex justify-content-center p-4 card ">
              <div className="card-body">
                <h5 className="packheading">Business </h5>

                <h2>
                  $19
                  <span className="packheading">
                    <h5>/monthly</h5>
                  </span>
                </h2>
                <div className="card-content">
                  <button className="btn btn-dark px-5 w-100">
                    Sign up now
                  </button>
                  <br />

                  <p>
                    <FaCheck className="m-2" />
                    Up to 5 project members
                  </p>

                  <p>
                    <FaCheck className="m-2" />
                    Unlimited tasks and projects
                  </p>

                  <p>
                    <FaCheck className="m-2" />
                    200GB storage
                  </p>

                  <p>
                    <FaCheck className="m-2" />
                    Integrations
                  </p>
                  <p>
                    <FaCheck className="m-2" />
                    Dedicated account manager
                  </p>

                  <p>
                    <FaCheck className="m-2" />
                    Custom fields
                  </p>

                  <p>
                    <FaCheck className="m-2" />
                    Advanced analytics
                  </p>

                  <p>
                    <FaCheck className="m-2" />
                    Export capabilities
                  </p>
                  <p>
                    <FaCheck className="m-2" />
                    API access
                  </p>
                  <p>
                    <FaCheck className="m-2" />
                    Advanced security features
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Packages;
