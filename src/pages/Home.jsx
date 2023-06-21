import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Products from "../components/Products";
import axiosinstance from "../axios/axios";

import Loader from "../components/Loader";
import axios from "axios";

function Home() {
  const [product, setproduct] = useState([]);
  const [maincatg, setmaincatg] = useState([]);
  const [catloading, setcatloading] = useState(false);
  const [proloading, setproloading] = useState(false);

  
  
  useEffect(() => {
    setproloading(true)
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setproduct(data);
      setproloading(false)
    });
  }, []);
  return (
    <>
      <Navbar/>
      <div className="flex items-center justify-center m-10">
        <h1 className="items-center font-bold text-2xl ">All Products</h1>
      </div>

      <>
        {proloading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {" "}
            <div className="flex justify-center">
              <div className="lg:grid grid-cols-3 gap-4">
                {product.map((e) => {
                  return <Products key={e._id} item={e} />;
                })}
              </div>
            </div>
          </>
        )}
      </>
    </>
  );
}

export default Home;
