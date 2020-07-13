import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { useInputState } from "../hooks/useInputState";
// import { initialShipping } from "./util";

const Shipping = () => {
  const [input, setInput] = useInputState({});
  const [isLoading, setIsLoading] = useState(false);

  const getShippingAddr = (pincode) => {
    if (pincode.length > 5 && pincode.length === 6 && isLoading === false) {
      setIsLoading(true);
      axios
        .get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then((res) => {
          setIsLoading(false);
          if (res.data[0].PostOffice === null) {
            toast.info(res.data[0].Message);
          } else {
            toast.success(res.data[0].Message);
            setInput({
              country: res.data[0].PostOffice[0].Country,
              state: res.data[0].PostOffice[0].State,
            });
          }
        });
    }
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <ToastContainer autoClose={2000} position="top-right" />
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
                        value={input.fname}
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
                        value={input.lname}
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
                      value={input.pin}
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
                      value={input.address}
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
                      value={input.apartment}
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
                      value={input.city}
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
                        defaultValue={input.country}
                      >
                        <option>{input.country}</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <select
                        name="state"
                        className="form-control"
                        placeholder="State"
                        defaultValue={input.state}
                      >
                        <option>{input.state}</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      name="phone"
                      onChange={(e) => handleInputChange(e)}
                      required
                      value={input.phone}
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
    </div>
  );
};
export default Shipping;
