import "../styles/filterBar.css";

function FilterBar() {
  return (
    <div className="filter-bar">

      {/* LEFT SIDE - SEARCH */}
      <div className="filter-left">
        <input
          type="text"
          placeholder="Search products..."
        />
      </div>

      {/* RIGHT SIDE - FILTERS */}
      <div className="filter-right">

        <select>
          <option>Category</option>
          <option>Clothing</option>
          <option>Electronics</option>
        </select>

        <select>
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        {/* DATE & TIME */}
        <input type="datetime-local" />

    <button className="filter-btn">
  <i className="fa-solid fa-filter"></i>
  Filter
</button>
      </div>

    </div>
  );
}

export default FilterBar;

