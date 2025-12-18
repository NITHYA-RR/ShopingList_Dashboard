import ProductHeader from "../components/ProductHeader";
import FilterBar from "../components/FilterBar";
import ProductTable from "../components/ProductTable";

function Products() {
  return (
    <div>
      <ProductHeader />
      <FilterBar />
      <ProductTable />
    </div>
  );
}

export default Products;
