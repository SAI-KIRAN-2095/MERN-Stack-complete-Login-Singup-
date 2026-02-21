import React from "react";
import Pageout from "./Pageout";

function Navbar() {
  return (
    <div>
      <div className="navbar_body">
        <div>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <a className="navbar" href="/">
                  Home
                </a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Models
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="f1cars">
                      F1cars
                    </a>
                  </li>
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle "
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Brands
                    </a>
                    <ul className="dropdown-menu bg-black">
                      <li>
                        <a className="dropdown-item text-black" href="mercedebenze">
                          Mercedes-Benz
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/MerecedeAMG">
                          Mercedes-AMG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/maybach">
                          Mercedes-Maybach
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle "
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      AI Tool
                    </a>
                    <ul className="dropdown-menu bg-black">
                      <li>
                        <a className="dropdown-item text-black" href="/chatbot">
                          AI Chatbot
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/imagetotext">
                        Image to text
                        </a>
                      </li>
                    </ul>
                  </li>

                </ul>
                <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                  <div className="container-fluid">
                    <a
                      className="navbar-brand d-flex align-items-center"
                      href="/"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg"
                        alt="Mercedes Logo"
                        width="900"
                        height="40"
                        className="me-5"
                      />
                    </a>
                  </div>
                </nav>
              </div>
              <Pageout />
            </div>
          </nav>
        </div>
      </div>
      {/* middle_body */}
      <div className="middle_body">
        <div className="d-flex justify-content-evenly align-items-center mb-5">
          <div className="btn-group">
            <button className="btn btn-dark">Mercedes-Benz</button>
            <button className="btn btn-outline-dark">AMG</button>
            <button className="btn btn-outline-dark">Maybach</button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row g-4 d-flex justify-content-evenly my-6">
          {/* Left Big Card */}
          <div className="row">
            <div className="col-lg-6 my-3">
              <div className="card bg-dark text-white border-50 overflow-hidden my-4">
                <img
                  src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
                  className="card-img"
                  alt="Mercedes"
                  style={{ height: "500px", objectFit: "cover" }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-75">
                  <h2 className="card-title">Discover MB.CHARGE Public</h2>
                  <p>One stop solution for your EV Journey!</p>
                  <button className="btn btn-primary w-25">Learn more</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 my-3">
              <div className="card bg-dark text-white border-0 overflow- my-4">
                <img
                  src="https://www.mercedes-benz.co.in/content/dam/india/passengercars/hp/GLC_220px.jpg/1769070460304.jpg?im=Crop,rect=(0,0,2200,2200);Resize=(800,800)"
                  className="card-img"
                  alt="Mercedes"
                  style={{ height: "500px", objectFit: "cover" }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-75">
                  <h2 className="card-title">The highlights of the new GLC.</h2>
                  <p>‘Sensual Purity’ design concept and modern luxury defines the GLC.  </p>
                  <button className="btn btn-primary w-25">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="container my-5">
  <div className="row g-4">

    {/* Card 1 */}
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card border-0 overflow-hidden shadow-sm">
        <img
          src="https://images.barrons.com/im-836072?width=700&height=700"
          className="card-img-top"
          alt="GLE"
          style={{ height: "400px", objectFit: "cover" }}
        />

        <div className="bg-black text-white p-4">
          <h3>GLE</h3>
          <p>Interior with high variability</p>

          <div className="d-flex gap-3 align-items-center mt-3">
            <button className="btn btn-primary">
              Find available cars
            </button>
            <a href="/gle" className="text-white text-decoration-underline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card border-0 overflow-hidden shadow-sm">
        <img
          src="https://images.netdirector.co.uk/gforces-auto/image/upload/w_392,h_392,q_auto,c_fill,f_auto,fl_lossy/auto-client/bf8eef64639fbcf32a4360ab20c93c29/d592710_mercedes_amg_gle_63_s_4matic_coup_c167_2020_1_.jpg"
          className="card-img-top"
          alt="GLC"
          style={{ height: "400px", objectFit: "cover" }}
        />

        <div className="bg-black text-white p-4">
          <h3>GLC</h3>
          <p>Attractive. On every route.</p>

          <div className="d-flex gap-3 align-items-center mt-3">
            <button className="btn btn-primary">
              Find available cars
            </button>
            <a href="/" className="text-white text-decoration-underline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card border-0 overflow-hidden shadow-sm">
        <img
          src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/AMG-GLE-53/10874/1690455453333/exterior-image-164.jpg"
          className="card-img-top"
          alt="GLA"
          style={{ height: "400px", objectFit: "cover" }}
        />

        <div className="bg-black text-white p-4">
          <h3>GLA</h3>
          <p>The Mercedes-Benz GLA SUV</p>

          <div className="d-flex gap-3 align-items-center mt-3">
            <button className="btn btn-primary">
              Find available cars
            </button>
            <a href="/" className="text-white text-decoration-underline">
              Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
                 <div className="container my-5">
  <div className="row g-4">

    {/* Card 1 */}
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card border-0 overflow-hidden shadow-sm">
        <img
          src="https://content.orlandosuperiortransportation.com/wp-content/uploads/2024/02/Worlds-Luxurious-Car-2.png"
          className="card-img-top"
          alt="GLE"
          style={{ height: "400px", objectFit: "cover" }}
        />

        <div className="bg-black text-white p-4">
          <h3>Limousine</h3>
          <p>Know your way.</p>

          <div className="d-flex gap-3 align-items-center mt-3">
            <button className="btn btn-primary">
              Find available cars
            </button>
            <a href="/" className="text-white text-decoration-underline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card border-0 overflow-hidden shadow-sm">
        <img
          src="https://www.peugeot.co.uk/content/dam/peugeot/uk/b2c/index/SUV-Range-Mobile.jpg"
          className="card-img-top"
          alt="GLC"
          style={{ height: "400px", objectFit: "cover" }}
        />

        <div className="bg-black text-white p-4">
          <h3>SUV Range</h3>
          <p>Ready for it.</p>

          <div className="d-flex gap-3 align-items-center mt-3">
            <button className="btn btn-primary">
              Find available cars
            </button>
            <a href="/" className="text-white text-decoration-underline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card border-0 overflow-hidden shadow-sm">
        <img
          src="https://www.mercedes-benz.com.hk/content/dam/hq/passengercars/cars/bodytypes-landingpages/cabriolet-roadster/stage/03-2024/images/mercedes-benz-cabriolet-roadster-landingpage-stage-3840x3840-03-2024.jpg/1750733265509.jpg?im=Crop,rect=(1646,834,2194,2194);Resize=(828,828)"
          className="card-img-top"
          alt="GLA"
          style={{ height: "400px", objectFit: "cover" }}
        />

        <div className="bg-black text-white p-4">
          <h3>Cabriolets / Roadsters</h3>
          <p>For dreams that raise the bar.</p>

          <div className="d-flex gap-3 align-items-center mt-3">
            <button className="btn btn-primary">
              Find available cars
            </button>
            <a href="/" className="text-white text-decoration-underline">
              Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* middle_body-2 */}
        <div className="container my-5">

  {/* Heading Section */}
  <div className="mb-5">
    <h1 className="display-5 fw-light mb-4">
      The perfect blend of luxury, sportiness and performance:
      <br />
      Discover our latest models
    </h1>

    <div className="d-flex gap-3">
      <button className="btn btn-outline-dark px-4 py-2">
        Discover all models
      </button>

      <button className="btn btn-outline-dark px-4 py-2">
        Discover electric models
      </button>
    </div>
  </div>

  {/* Category Cards */}
  <div className="row g-4">
    {/* Card 1 */}
    <div className="col-12 col-lg-4">
      <div className="p-4 bg-light d-flex justify-content-between align-items-center rounded">
        <div>
          <p className="mb-2 text-muted">Discover the models</p>
          <h2 className="fw-light">Limousine</h2>
        </div>

        <img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8"
          alt="Limousine"
          style={{ width: "200px", objectFit: "contain" }}
        />
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-12 col-lg-4">
      <div className="p-4 bg-light d-flex justify-content-between align-items-center rounded">
        <div>
          <p className="mb-2 text-muted">Discover the models</p>
          <h2 className="fw-light">SUV Range</h2>
        </div>

        <img
          src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9"
          alt="SUV"
          style={{ width: "200px", objectFit: "contain" }}
        />
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-12 col-lg-4">
      <div className="p-4 bg-light d-flex justify-content-between align-items-center rounded">
        <div>
          <p className="mb-2 text-muted">Discover the models</p>
          <h2 className="fw-light">Cabriolets Roadsters</h2>
        </div>

        <img
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a"
          alt="Cabriolet"
          style={{ width: "200px", objectFit: "contain" }}
        />
      </div>
    </div>
  </div>
</div>

      </div>
          {/* Footer Start  */}
          <div
            class="container-fluid bg-black text-light footer pt-3 wow fadeIn"
            data-wow-delay="0.1s">
          <div class="container py-1">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">Address</h4>
              <p class="mb-2">
                <i class="fa fa-map-marker-alt me-3"></i>123 Street, New York,
                USA
              </p>
              <p class="mb-2">
                <i class="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p class="mb-2">
                <i class="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div class="d-flex pt-2">
                <a class="btn btn-outline-light btn-social" href="/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="/">
                  <i class="fab fa-youtube"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">Opening Hours</h4>
              <h6 class="text-light">Monday - Friday:</h6>
              <p class="mb-4">09.00 AM - 09.00 PM</p>
              <h6 class="text-light">Saturday - Sunday:</h6>
              <p class="mb-0">09.00 AM - 12.00 PM</p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">Services</h4>
              <a class="btn btn-link" href="/">
                Diagnostic Test
              </a>
              <a class="btn btn-link" href="/">
                Engine Servicing
              </a>
              <a class="btn btn-link" href="/">
                Tires Replacement
              </a>
              <a class="btn btn-link" href="/">
                Oil Changing
              </a>
              <a class="btn btn-link" href="/">
                Vacuam Cleaning
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div class="position-relative mx-auto">
                <input
                  class="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a class="border-bottom" href="/">
                  Your Site Name
                </a>
                <a class="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </div>
              <div class="col-md-6 text-center text-md-end">
                <div class="footer-menu">
                  <a href="/">Home</a>
                  <a href="/">Cookies</a>
                  <a href="/">Help</a>
                  <a href="/">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
}

export default Navbar;
