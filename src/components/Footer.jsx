import { useScrollContext } from "../context-api/CreateSlice";

const Footer = () => {
    const { tableRef } = useScrollContext();

  const handleScrollUp = () => {
    tableRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
    return (
<footer className="bottom-nav footer-grey sticky-footer d-flex justify-content-around align-items-center p-2">
        <div className="text-center">
          <i className="bi bi-arrow-down-up"></i>
          <div>Quotes</div>
        </div>
        <div className="text-center">
          <i className="bi bi-bar-chart"></i>
          <div>Deals</div>
        </div>
        <div className="text-center circle-div" onClick={handleScrollUp}>

          <i class="bi bi-chevron-up"></i>
        </div>
        <div className="text-center">
          <i className="bi bi-diagram-3"></i>
          <div>Net Deals</div>
        </div>
        <div className="text-center">
          <i className="bi bi-clock-history"></i>
          <div>History</div>
        </div>
      </footer>
    );
  };
  
  export default Footer;