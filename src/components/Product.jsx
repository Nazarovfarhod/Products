import { Link, NavLink } from "react-router-dom";

function Product({ id, title, description, thumbnail }) {
  return (
    <NavLink to={`/productInfo/${id}`}>
      <div className="flex">
        <div className="w-full text-center  my-5 font-semibold">
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img className="blur-[2px]" src={thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h3 className="text-4xl font-bold font-serif h-36">{title}</h3>
              <p className="line-clamp-2 font-thin">{description}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/productInfo/${id}`}
                  className=" w-full text-center btn btn-secondry font-bold font-serif"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Product;
