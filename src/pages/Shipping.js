import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { useInputState } from "../hooks/useInputState";

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
            setInput({
              country: "",
              state: "",
            });
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
  const handleNumberInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value.replace(/\D/, ""),
    });
  };

  return (
    <div>
      <ToastContainer autoClose={2000} position="top-right" />
      <div className="container g-font">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card mt-5 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title mb-4 h4" style={{ color: "#696969" }}>
                  Shipping address
                </h5>
                <form>
                  <div className="form-row">
                    <div className="form-group input-group-lg col-md-6 mb-3">
                      <input
                        name="fname"
                        onChange={(e) => handleInputChange(e)}
                        required
                        value={input.fname}
                        placeholder="First name (optional)"
                        type="text"
                        className="form-control decoration-none"
                      />
                    </div>
                    <div className="form-group input-group-lg col-md-6 mb-3">
                      <input
                        name="lname"
                        onChange={(e) => handleInputChange(e)}
                        required
                        value={input.lname}
                        placeholder="Last name"
                        type="text"
                        className="form-control decoration-none"
                      />
                    </div>
                  </div>
                  <div className="input-group input-group-lg mb-3">
                    <input
                      name="pin"
                      maxLength="6"
                      onChange={(e) => getShippingAddr(e.target.value)}
                      required
                      value={input.pin}
                      placeholder="PIN code"
                      type="text"
                      className="form-control decoration-none"
                      style={{ borderRight: "none" }}
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text"
                        style={{ background: "white", borderLeft: "none" }}
                      >
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                    </div>
                  </div>
                  <div className="form-group input-group-lg mb-3">
                    <input
                      name="address"
                      onChange={(e) => handleInputChange(e)}
                      required
                      value={input.address}
                      placeholder="Address"
                      type="text"
                      className="form-control decoration-none"
                    />
                  </div>
                  <div className="form-group input-group-lg mb-3">
                    <input
                      name="apartment"
                      onChange={(e) => handleInputChange(e)}
                      required
                      value={input.apartment}
                      placeholder="Apartment, suite, etc. (optional)"
                      type="text"
                      className="form-control decoration-none"
                    />
                  </div>
                  <div className="form-group input-group-lg mb-3">
                    <input
                      name="city"
                      onChange={(e) => handleInputChange(e)}
                      required
                      value={input.city}
                      placeholder="City"
                      type="text"
                      className="form-control decoration-none"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group input-group-lg col-md-6">
                      <select
                        name="country"
                        className="form-control decoration-none"
                        placeholder="Country/Region"
                        defaultValue={input.country}
                      >
                        <option>{input.country}</option>
                      </select>
                    </div>
                    <div className="form-group input-group-lg col-md-6">
                      <select
                        name="state"
                        className="form-control decoration-none"
                        placeholder="State"
                        defaultValue={input.state}
                      >
                        <option>{input.state}</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group input-group-lg">
                    <input
                      name="phone"
                      maxLength="10"
                      onChange={(e) => handleNumberInput(e)}
                      required
                      value={input.phone}
                      placeholder="Phone"
                      type="text"
                      className="form-control decoration-none"
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
