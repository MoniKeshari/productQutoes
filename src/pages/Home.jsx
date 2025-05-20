import { useState } from "react";
import InputSearch from "../components/InputSearch";
import Product from "../components/Product";
import ToggleButton from "../components/ToggleButton";
import quotes from "../dummydata/data";

const Home = () => {
  const [inputValue, setvalue] = useState("");

  const filteredQuotes = quotes.filter((quote) =>
    quote.name.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  return (
    <div className="app-container">
      <p className="support-text text-center text-danger small">
        Public News: For Support, Call +91 8918085080 (Whatsapp only)
      </p>
      <ToggleButton />

      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="form-check form-switch custom-switch">
            <input className="form-check-input" type="checkbox" id="proView" />
            <label className="form-check-label  ms-2" htmlFor="proView">
              Pro View
            </label>
          </div>

          <div className="form-check form-switch custom-switch">
            <label className="form-check-label  ms-2" htmlFor="oneClickTrade">
              One Click Trade
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="oneClickTrade"
            />
          </div>
        </div>
        <InputSearch setvalue={setvalue} inputValue={inputValue} />

        <div className="quotes-list table-responsive">
          <table className="table table-sm mb-0">
            <thead className="bg-light rounded-top">
              <tr className="custom-thead">
                <th>Script</th>
                <th>Bid</th>
                <th>Ask</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuotes.length > 0 ? (
                filteredQuotes.map((quote, index) => (
                  <Product quote={quote} key={index} />
                ))
              ) : (
                <tr className="no-data-row">
                  <td colSpan={3}>
                    <div className="no-data-message">No data available</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
