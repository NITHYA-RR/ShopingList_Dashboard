import { useState } from "react";
import products from "../data/products.js";
import "../styles/productTable.css";
import Pagination from "./Pagination.jsx";

function ProductTable() {
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5;
const totalPages = Math.ceil(products.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const currentProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
    <table className="product-table">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {currentProducts.map((product) => (
          <tr key={product.id}>
            <td><input type="checkbox" /></td>

            <td className="product-name">
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              {product.name}
            </td>

            <td>{product.category}</td>

            <td>
              {product.stock}
              <span
                className={`badge ${
                  product.stock === 0 ? "out" : "low"
                }`}
              >
                {product.stockStatus}
              </span>
            </td>

            <td>${product.price}</td>

            <td>
              <span
                className={`status ${
                  product.status === "Published"
                    ? "published"
                    : "inactive"
                } status-dropdown`}
              >
                {product.status}
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </td>

            <td className="action">
              <i className="fa-solid fa-ellipsis"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  itemsPerPage={itemsPerPage}
  totalItems={products.length}
  onPageChange={setCurrentPage}
/>


       </>
  );
}

export default ProductTable;


