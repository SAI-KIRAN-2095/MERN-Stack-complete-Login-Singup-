import React from 'react'

function Gle() {
  return (
    <div
      className="vh-100 d-flex align-items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div
        className="w-100 h-100 d-flex align-items-center"
        style={{
          background: "rgba(0,0,0,0.6)",
        }}
      >
        <div className="container text-white">

          <div className="row">

            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <h1 className="display-3 fw-light mb-4">
                GLE Interior
              </h1>

              <p className="lead mb-4">
                High variability meets refined luxury. The Mercedes-Benz GLE
                interior blends advanced technology with exceptional comfort,
                creating a space designed around you.
              </p>

              <ul className="list-unstyled fs-5">
                <li className="mb-3">✔ Dual widescreen cockpit display</li>
                <li className="mb-3">✔ Ambient lighting with 64 colors</li>
                <li className="mb-3">✔ Premium leather seating</li>
                <li className="mb-3">✔ Spacious rear legroom</li>
                <li className="mb-3">✔ Advanced MBUX infotainment system</li>
              </ul>

              <button className="btn btn-outline-light btn-lg mt-3">
                Discover More
              </button>
            </div>

            {/* RIGHT EMPTY (spacing for balanced layout) */}
            <div className="col-lg-6"></div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Gle
