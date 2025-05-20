const ToggleButton = () => {
  return (
    <div className="toolbox d-flex justify-content-between rounded mt-2 mb-3">
      {/* First btnbox */}
      <div
        className="btnbox d-flex justify-content-between align-items-center 
         "
      >
        <div className="circle-icon d-flex justify-content-center align-items-center p-1">
          <i className="bi bi-plus  fs-2"></i>
        </div>
        <p>Press and hold to select script</p>
      </div>
      <div className="divider d-md-block"></div>

      {/* Second btnbox */}
      <div className="btnbox d-flex justify-content-between align-items-center">
        <div className="circle-icon d-flex justify-content-center align-items-center p-1">
          <i className="bi bi-plus fs-2"></i>
        </div>
        <p>Press and hold to select script</p>
      </div>
    </div>
  );
};

export default ToggleButton;
