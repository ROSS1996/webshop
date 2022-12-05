import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <h1>Products</h1>
      <Link to={`./detail`}>Dummy Product</Link>
    </>
  );
}

export default Products;
