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

  const [currentpage,setcurrentpage] = useState(0)

  const PAGE_SIZE = 3;
  const totalpage = Math.ceil(product.length/PAGE_SIZE)
  const start = currentpage * PAGE_SIZE
  const end = start + PAGE_SIZE

  
  
  useEffect(() => {
    setproloading(true)
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setproduct(data);
      setproloading(false)
    });
  }, []);

  const handelpageclick = (page)=>{
  setcurrentpage(page)

  }
  const handelprev = ()=>{
    setcurrentpage((prev)=>prev-1)
  }
  const handelnext = ()=>{
setcurrentpage((prev)=>prev + 1)
  }
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
                {product.slice(start,end).map((e) => {
                  return <Products key={e._id} item={e} />;
                })}
              </div>
            </div>
            <div className="flex justify-center m-5 cursor-pointer">
              {
                currentpage !== 0 && <>
                  <div  onClick={handelprev} className="flex p-1 border border-black m-1">
                <span>PREV</span>
                </div>
                </>
              }
          
             {
              [...Array(totalpage).keys()].map((e,index)=>{
                return <>
                <div className="flex p-1 border border-black m-1 cursor-pointer">
                <span onClick={()=>handelpageclick(e)} className={currentpage === e ? "bg-blue-500" : ""} key = {index}>{e + 1}</span>
                </div>
               
                </>
              })
              
             }
             {
              currentpage !== totalpage-1 && <>
               <div onClick = {handelnext}className="flex p-1 border border-black m-1 cursor-pointer ">
                <span>NEXT</span>
                </div>
              </>
             }
             
            </div>
          </>
        )}
      </>
    </>
  );
}

export default Home;
