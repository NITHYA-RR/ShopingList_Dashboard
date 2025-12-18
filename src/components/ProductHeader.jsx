import "../styles/productHeader.css";

function ProductHeader() {
  return (
    <div className="product-header">
      <h2>Products List</h2>

      <div className="product-actions">
        <button className="btn light">
          <i className="fa-solid fa-download"></i> Import
        </button>

        <button className="btn light">
          <i className="fa-solid fa-upload"></i> Export
        </button>

        <button className="btn primary">
          <i className="fa-solid fa-plus"></i> Add Product
        </button>
      </div>
    </div>
  );
}

export default ProductHeader;

