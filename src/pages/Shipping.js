import React from "react";
import axios from "axios";

import { useInputState } from "../hooks/useInputState";
import { initialShipping } from "./util";

const Shipping = () => {
  const [input, setInput] = useInputState("");

  const getShippingAddr = async (pincode) => {
    console.log(pincode);
    if (pincode.length > 5 && pincode.length < 7) {
      const res = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      console.log(res.data);
    }
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
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
                      name="fname"
                      onChange={(e) => handleInputChange(e)}
                      required
                      value={initialShipping.fname}
                      placeholder="First name (optional)"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      name="lname"
                      onChange={(e) => handleInputChange(e)}
                      required
                      value={initialShipping.lname}
                      placeholder="Last name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="pin"
                    maxLength="7"
                    onChange={(e) => getShippingAddr(e.target.value)}
                    required
                    value={initialShipping.pin}
                    placeholder="PIN code"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="address"
                    onChange={(e) => handleInputChange(e)}
                    required
                    value={initialShipping.address}
                    placeholder="Address"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="apartment"
                    onChange={(e) => handleInputChange(e)}
                    required
                    value={initialShipping.apartment}
                    placeholder="Apartment,suite,etc (optional)"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="city"
                    onChange={(e) => handleInputChange(e)}
                    required
                    value={initialShipping.city}
                    placeholder="City"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <select
                      name="country"
                      className="form-control"
                      placeholder="Country/Region"
                      defaultValue={initialShipping.country}
                    >
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <select
                      name="state"
                      className="form-control"
                      placeholder="State"
                      defaultValue={initialShipping.state}
                    >
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="phone"
                    onChange={(e) => handleInputChange(e)}
                    required
                    value={initialShipping.phone}
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
