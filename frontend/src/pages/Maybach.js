import React from 'react'

function Maybach() {
  return (
    <div>
      <div className="bg-black text-white py-5">
      <div className="container-fluid">
        <div className="row align-items-start">

          {/* LEFT SIDE */}
          <div className="col-lg-6 px-5">

            {/* Heading */}
            <div className="mb-5">
              <h1 className="fw-light display-5">
                Where vision becomes presence.
              </h1>
              <p className="text-secondary mt-3" style={{ maxWidth: "600px" }}>
                More than a vehicle. The new S-Class redefines what it means
                to arrive. With a design that commands attention, intelligence
                that anticipates your needs, and comfort that transcends
                expectation – this is automotive excellence, elevated to art.
              </p>
            </div>

            {/* Interior Image */}
            <img
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8"
              alt="Interior"
              className="img-fluid"
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover"
              }}
            />

          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6 px-5">

            <img
              src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6"
              alt="Car Exterior"
              className="img-fluid"
              style={{
                height: "700px",
                width: "100%",
                objectFit: "cover"
              }}
            />

            <div className="mt-4">
              <h3 className="fw-light">
                Designed to be unmistakable.
              </h3>
              <p className="text-secondary">
                Every line, every contour speaks a language of distinction.
                The radiator grille with illuminated surround and the
                redesigned front creates a statement that resonates from
                every angle.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Maybach
