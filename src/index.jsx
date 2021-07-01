import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  componentDidMount() {
    const apiUrl = "https://api.readingdev.com/rbc/getaddresses/RG12LU";
    fetch(apiUrl, { mode: "cors" })
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));
  }

  render() {
    return (
      <div>
        <div className="container w-70 mt-5 form-div shadow p-3 mb-5 bg-white border border-info rounded p-2">
          <h4 className="mb-4 bg-info p-2">
            Reading Bin Collection Booking Form
          </h4>
          <form className="border border-info rounded p-2">
            <div className="form-group row pb-2">
              <label htmlFor="address" className="col-sm-2 col-form-label pr-5">
                Address Line 1
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="address"
                  placeholder="Address Line 1"
                  //   value="email@example.com"
                />
              </div>
            </div>
            <div className="form-group row pb-2">
              <label htmlFor="address" className="col-sm-2 col-form-label pr-5">
                Address Line 2
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="address"
                  placeholder="Address Line 2"
                  //   value="email@example.com"
                />
              </div>
            </div>
            <div className="form-group row pb-2">
              <label htmlFor="address" className="col-sm-2 col-form-label pr-5">
                City/Town
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="address"
                  placeholder="City/Town"
                  //   value="email@example.com"
                />
              </div>
            </div>
            <div className="form-group row pb-2">
              <label htmlFor="address" className="col-sm-2 col-form-label pr-5">
                County
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="address"
                  placeholder="County"
                  //   value="email@example.com"
                />
              </div>
            </div>
            <div className="form-group row pb-2">
              <label htmlFor="address" className="col-sm-2 col-form-label pr-5">
                Postcode
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="address"
                  placeholder="Postcode"
                  //   value="email@example.com"
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
                  //   value="email@example.com"
                />
              </div>
            </div>
            <div className="form-group row pb-2">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Date
              </label>
              <div className="col-sm-10 mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
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

ReactDOM.render(<App />, document.getElementById("root"));
