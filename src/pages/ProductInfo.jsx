import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductInfo() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/product/" + id)
      .then((data) => data.json())
      .then((product) => setProduct(product))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {product && (
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-[550px]">
            <img src={product.thumbnail} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-5xl mb-5 w-full">{product.title}</h2>
            <p className="w-[650px] text-xl italic mb-5">
              {product.description}
            </p>
            <h3 className="font-serif font-semibold">Reviews:</h3>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://b.fssta.com/uploads/application/soccer/headshots/711.png"
                  />
                </div>
              </div>
              <h3>
                <span className="font-bold italic">Name: </span> Messi
              </h3>
              <div className="chat-bubble">{product.reviews[0].comment}</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--914bcfe0-f610-4610-a77e-6ea53c53f630/_330603286208.app.png?preferwebp=true&width=312 "
                  />
                </div>
              </div>
              <h3>
                <span className="font-bold italic">Name: </span> Ronaldo
              </h3>

              <div className="chat-bubble">{product.reviews[1].comment}</div>
            </div>
            <div className="chat chat-start  mb-10">
              <div className="chat-image avatar ">
                <div className="w-10 rounded-full ">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://b.fssta.com/uploads/application/soccer/headshots/713.png"
                  />
                </div>
              </div>
              <h3>
                <span className="font-bold italic">Name: </span> Neymar
              </h3>

              <div className="chat-bubble"> {product.reviews[2].comment}</div>
            </div>
            <div className=" card-actions justify-center">
              <Link to="/" className="btn btn-wide text-xl font-bold">
                Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
