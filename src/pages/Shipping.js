import React from "react";

const Shipping = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card mt-5 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Shipping address</h5>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      placeholder="First name (optional)"
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      placeholder="Last name"
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    placeholder="PIN code"
                    type="text"
                    className="form-control"
                    id="inputAddress"
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Address"
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Apartment,suite,etc (optional)"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="City"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <select
                      id="inputState"
                      className="form-control"
                      placeholder="Country/Region"
                    >
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <select
                      id="inputState"
                      className="form-control"
                      placeholder="State"
                    >
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    placeholder="Phone"
                    type="number"
                    className="form-control"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shipping;
