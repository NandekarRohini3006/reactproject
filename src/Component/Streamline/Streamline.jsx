import "./Streamline.css";

const Streamline = () => {
  return (
    <>
      <div>
        <div className="m-auto  py-5 container-fluid">
          <div className="row d-flex justify-content-center">
            <button className="btn  btnpro">Everything you need</button>

            <h2 className="headpro text-center ">
              Streamlined for easy <br />
              management
            </h2>
            <p className="text-center">
              Enjoy Customizable lists, team work tools, and smart
              <br /> tracking all in one place.Set tasks, get reminders, and
              <br />
              see your progress simply and quickly.
            </p>
            <div className="row container w-75 p-2 m-2  d-flex justify-content-center">
              <div className="ms-auto p-auto d-flex justify-content-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="cards2 card text-center p-4">
                  <div class="card-body m-auto p-4">
                    <img
                      className="imgstream"
                      src="./images/cube-helix.png"
                      width="200px"
                      height="200px"
                      alt="cube"
                    />
                    <h5 class="card-title">Integration ecosystem</h5>
                    <p class="card-text">
                      Enhance your productivity by connecting with your favorite
                      tools, keeping all your essential in one place.
                    </p>
                  </div>
                </div>
              </div>
              <div className="ms-auto p-auto d-flex justify-content-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="cards2 card text-center p-4">
                  <div class="card-body m-auto p-4">
                    <img
                      className="imgstream"
                      src="./images/cube.png"
                      width="200px"
                      height="200px"
                      alt="cube"
                    />
                    <h5 class="card-title">Goal setting and tracking</h5>
                    <p class="card-text">
                      Define and track your goals, breaking down objectives into
                      achievable task to keep your target in sight.
                    </p>
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
export default Streamline;
