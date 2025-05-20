const Product = ({ quote, index }) => {
  return (
    <tr key={index} className="row-border">
      <td>
        <div className="mb-1 td-height td-content">
          <i className="bi bi-activity me-2"></i>
          {quote.trend}
        </div>
        <div className="mb-2 td-height quote-name">{quote.name}</div>
        <div className=" mb-1 td-height td-content">
          {quote.time}
          <span>
            {" "}
            <i class="bi bi-arrows-collapse-vertical"></i>
          </span>{" "}
          {quote.value}
        </div>
        <div className="td-content">{quote.textValue}</div>
      </td>

      <td>
        <div className=" mb-1 td-height"></div>

        <div className="mb-2 td-height text-danger">
          <span className="text-sm">{quote.bidsmText}</span>
          <span className="text-lg">{quote.bidboldText}</span>
          <span className="text-sm">{quote.bidmdText}</span>
        </div>

        <div className="mb-1 td-height td-content">
          <span>
            {" "}
            <i className="bi bi-download"></i>{" "}
          </span>{" "}
          {quote.bd_text}
        </div>
        <div className=" td-height td-content">{quote.low}</div>
      </td>
      <td>
        <div className=" mb-1 td-height td-content"></div>

        <div className="mb-2 td-height sky-color">
          <span className="text-sm">{quote.asksmText}</span>
          <span className="text-lg">{quote.askboldText}</span>
          <span className="text-sm">{quote.askmdText}</span>
        </div>
        <div className=" mb-1 td-height td-content">
          <span>
            {" "}
            <i class="bi bi-arrow-up-circle"></i>{" "}
          </span>{" "}
          {quote.bd_text}
        </div>
        <div className="td-height td-content">{quote.low}</div>
      </td>
    </tr>
  );
};

export default Product;
