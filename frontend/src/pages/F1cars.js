import React from 'react'

function F1cars() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-">
        <a className="navbar-brand fw-bold text-white" href="/">
          F1 Cars
        </a>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Latest</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">2026</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Fans</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Parters</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Careers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">The Road to 2026</a>
            </li>
            <li className="nav-item">
              <button><a className="nav-link text-white" href="/">Signin</a></button>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="container-fluid p-0">
        <div className="row g-0">

          {/* LEFT PANEL */}
          <div className="col-lg-4">
            <div className="p-4 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: "#17d4c3",
                minHeight: "100vh"
              }}>
              <div>
                <p className="mb-1">● Now</p>
                <h2 className="fw-bold">Brackley</h2>
                <p className="fs-4">Home</p>
              </div>
              <img
              src="https://images.ctfassets.net/1fvlg6xqnm65/5pmv26DZ3XkrCNSFYEB7vo/44c36e1e9fdba5ec63df1604689df0f6/01-M564450.jpg?w=1273&q=75&fm=webp"
              alt="F1 Car"
              className="img-fluid w-100"
              style={{
                height: "30vh",
                objectFit: "cover"
              }}
            />
              <div className="bg-black text-white p-4 rounded">
                <p className="mb-2">Countdown to</p>
                <h4 className="fw-bold">
                  Australian Grand Prix <br /> Free Practice 1
                </h4>

                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <h3>12</h3>
                    <small>days</small>
                  </div>
                  <div>
                    <h3>15</h3>
                    <small>hours</small>
                  </div>
                  <div>
                    <h3>11</h3>
                    <small>minutes</small>
                  </div>
                  <div>
                    <h3>10</h3>
                    <small>seconds</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-8">
            <img
              src="https://static.fibre2fashion.com/Newsresource/images/300/adidas_311649.jpg"
              alt="F1 Car"
              className="img-fluid w-100"
              style={{
                height: "100vh",
                objectFit: "cover"
              }}
            />
          </div>

        </div>
      </div>
      <div
      className="text-white"
      style={{
        background: "linear-gradient(135deg,#0c1022,#111a3a)",
        minHeight: "100vh",
        padding: "60px 0"
      }}
    >
      <div className="container">

        {/* TITLE */}
        <h1 className="fw-bold mb-5" style={{ letterSpacing: "2px" }}>
          TEAM PROFILE
        </h1>

        {/* TOP INFO GRID */}
        <div className="row mb-5">

          <div className="col-md-3">
            <small className="text-secondary">Full Team Name</small>
            <h5 className="fw-bold">
              Mercedes-AMG PETRONAS Formula One Team
            </h5>
          </div>

          <div className="col-md-3">
            <small className="text-secondary">Base</small>
            <h5 className="fw-bold">Brackley, United Kingdom</h5>
          </div>

          <div className="col-md-3">
            <small className="text-secondary">Team Chief</small>
            <h5 className="fw-bold">Toto Wolff</h5>
          </div>

          <div className="col-md-3">
            <small className="text-secondary">Technical Chief</small>
            <h5 className="fw-bold">James Allison</h5>
          </div>

        </div>

        <div className="row mb-5">

          <div className="col-md-3">
            <small className="text-secondary">Chassis</small>
            <h5 className="fw-bold">W17</h5>
          </div>

          <div className="col-md-3">
            <small className="text-secondary">Power Unit</small>
            <h5 className="fw-bold">Mercedes</h5>
          </div>

          <div className="col-md-3">
            <small className="text-secondary">Reserve Driver</small>
            <h5 className="fw-bold">Fred Vesti</h5>
          </div>

          <div className="col-md-3">
            <small className="text-secondary">First Team Entry</small>
            <h5 className="fw-bold">1970</h5>
          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="row align-items-start">

          {/* LEFT IMAGE */}
          <div className="col-lg-5 mb-4">
            <div className="card bg-dark border-0">
              <img
                src="https://images.ctfassets.net/1fvlg6xqnm65/5wRqkp0ZGAnKKtXE5pb390/3baf6e5d5474f56e89b5873c2d460a6c/MQ7-0-image-20211214084258-M296537_4252.jpg"
                alt="F1 Car"
                className="img-fluid rounded"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <small className="text-secondary">
                  In photos: Mercedes F1 history
                </small>
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="col-lg-7">

            <p>
              Mercedes’ modern F1 revival started with the creation of a works
              squad for 2010 – the platform for a meteoric rise up the Grand
              Prix order. The team generated huge excitement from the off with
              the sensational return of Michael Schumacher...
            </p>

            <p>
              The following season he was paired with Lewis Hamilton, the duo
              going on to stage some epic title battles as the Silver Arrows
              swept all before them.
            </p>

            <h5 className="fw-bold mt-4">2025</h5>

            <p>
              George Russell ably assumes the role of team leader, winning
              twice as the team climb back to second in the standings.
            </p>

            <a href="/" className="text-danger fw-bold">
              Official Mercedes memorabilia &gt;
            </a>

            <h5 className="fw-bold mt-4">2024</h5>

            <p>
              Fall to fourth overall despite two wins apiece for George Russell
              and Lewis Hamilton in the rather inconsistent W15 season.
            </p>

          </div>

        </div>

      </div>
    </div>
    </div>
  )
}

export default F1cars
