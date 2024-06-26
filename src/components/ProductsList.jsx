import Product from "./Product";

function ProductsList({ products }) {
  return (
    <>
      {products.products.map((product) => {
        const { title, id, description, thumbnail } = product;
        console.log(product);
        return (
          <Product
            key={id}
            title={title}
            description={description}
            thumbnail={thumbnail}
            id={id}
          />
        );
      })}
    </>
  );
}

export default ProductsList;
