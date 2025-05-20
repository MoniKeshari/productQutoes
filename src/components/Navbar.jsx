const Navbar = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center p-2">
      {/* Left side icon */}
      <i className="bi bi-list"></i>

      {/* Right side content */}
      <div className="d-flex align-items-center">
        <h5 className="mb-0 me-4">Quotes</h5>
        <i className="bi bi-star me-4"></i>
        <i className="bi bi-plus me-4 fs-3"></i>
        <i className="bi bi-pencil-square"></i>
      </div>
    </header>
  );
};

export default Navbar;
