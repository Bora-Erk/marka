import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterRow from "../components/FilterRow.jsx"; 


const products = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  image: `https://picsum.photos/id/${i + 10}/200/300`,
  title: "Graphic Design",
  department: "English Department",
  oldPrice: "$16.48",
  newPrice: "$6.48",
}));

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProductsPerPage(4); 
      } else {
        setProductsPerPage(12); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container my-5">
      <FilterRow totalCount={products.length} />

      <div className="row">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-3 mb-4 d-flex flex-column align-items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid mb-2"
              style={{ objectFit: "cover", height: "300px", width: "200px" }}
            />
            <h6 className="fw-bold">{product.title}</h6>
            <p className="text-muted mb-1">{product.department}</p>
            <div className="mb-2">
              <span className="text-muted text-decoration-line-through me-2">
                {product.oldPrice}
              </span>
              <span className="text-success fw-bold">{product.newPrice}</span>
            </div>
            {/* Renk noktaları */}
            <div className="d-flex gap-1">
              {["#00C8C8", "#E7AE13", "#965A38", "#009688"].map(
                (color, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: color,
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  ></span>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <PaginationItem disabled={currentPage === 1}>
            <PaginationLink first onClick={() => handlePageChange(1)} />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem
              key={index}
              active={currentPage === index + 1}
            >
              <PaginationLink
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={currentPage === totalPages}>
            <PaginationLink
              next
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
};

export default ProductList;



