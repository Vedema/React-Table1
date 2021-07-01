import React from "react";
import ReactDOM from "react-dom";
import { PostcodeLookup } from "@firstclasspostcodes/react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <div className="container w-70 mt-5 form-div shadow p-3 mb-5 bg-white border border-info rounded p-2">
          <h4 className="mb-4 bg-info p-2">
            Reading Bin Collection Booking Form
          </h4>
          <form className="border border-info rounded p-2">
            <div className="form-group row pb-2">
              <label
                htmlFor="address1"
                className="col-sm-2 col-form-label pr-5"
              >
                Address Line 1
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="address1"
                  placeholder="Address Line 1"
                  name="address-line-1"
                />
              </div>
            </div>
            <div className="form-group row pb-2">
              <label
                htmlFor="address2"
                className="col-sm-2 col-form-label pr-5"
              >
                Address Line 2
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Address Line 2"
                  name="address-line-2"
                />
              </div>
            </div>
            <div className="form-group row pb-2">
              <label htmlFor="city" className="col-sm-2 col-form-label pr-5">
                City/Town
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="City/Town"
                  name="city"
                />
              </div>
            </div>
            <div className="form-group row pb-2">
              <label htmlFor="county" className="col-sm-2 col-form-label pr-5">
                County
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="county"
                  placeholder="County"
                  name="county"
                />
              </div>
            </div>
            <div className="form-group row pb-2">
              <label
                htmlFor="postcode"
                className="col-sm-2 col-form-label pr-5"
              >
                Postcode
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="postcode"
                  placeholder="Postcode"
                  name="postcode"
                />
              </div>
            </div>
            <div className="form-group row pb-2">
              <label htmlFor="uprn" className="col-sm-2 col-form-label pr-5">
                UPRN
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="uprn"
                  placeholder="Unique Property Reference Number"
                  name="uprn"
                />
              </div>
            </div>
            <div className="form-group row pb-2">
              <label htmlFor="date" className="col-sm-2 col-form-label">
                Date
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                />
              </div>
              <div className="form-group mt-3">
                <button className="btn btn-info">Confirm collection</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
