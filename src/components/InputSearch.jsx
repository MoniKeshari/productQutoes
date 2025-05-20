const InputSearch = ({ setvalue, inputValue }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="form-control"
        placeholder="Search by Script Name"
        value={inputValue}
        onChange={(e) => setvalue(e.target.value)}
      />
      <i className="bi bi-search"></i>
    </div>
  );
};
export default InputSearch;
