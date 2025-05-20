import { useScrollContext } from "../context-api/CreateSlice";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    const { tableRef } = useScrollContext();

  return (
    <div className="d-flex flex-column min-vh-100" ref={tableRef}>
      <Navbar/>
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
