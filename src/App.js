import logo from "./Media/logo.jpeg";
import header from "./Media/header.jpg";
import cement from "./Media/bamburi-tembo.jpg.webp";
import tangit from "./Media/tangit.jpeg";
import paint from "./Media/paint.jpeg";
import sikabit from "./Media/sikabit.webp";
import tiles from "./Media/tiles.webp";

import "./App.css";

function App() {
  return (
    <div>
      <nav className="flex w-11/12 pt-4 items-center">
        <div className=" w-1/5 ">
          <img src={logo} alt="piam hardware" className="w-24 h-24" />
        </div>
        <div className="flex w-4/5 justify-between ">
          <div className="flex w-96 justify-between">
            <h6>Products</h6>
            <h6>Brands</h6>
            <h6>On Sale</h6>
          </div>
          <div className="flex justify-between">
            <button className="border-2 border-blue-300 rounded w-20 mx-2">
              Sign Up
            </button>
            <button className="border-2 bg-blue-300 rounded w-20 mx-2">
              Log In
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full h-1/2">
        <div className="h-1/2 relative">
          <img
            src={header}
            alt="construction materials"
            className="h-[24rem] w-full"
          />
          <div className="card max-lg:w-11/12 max-lg:h-4/5 max-lg:left-3">
            <h2 className="text-5xl font-extrabold max-md:text-3xl mx-auto w-11/12 text-blue-100">
              Working Together to Create Revolutionary Structures
            </h2>
            <h2 className="text-2xl w-11/12 mx-auto text-blue-50">
              Get all your genuine, high quality construction supplies in one
              place and get it delivered to you!
            </h2>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-10">
        <h2 className="text-4xl my-4">Available Products</h2>
        <div className="grid w-11/12 mx-auto gap-4 grid-cols-3 max-lg:grid-cols-1 ">
          <div className=" w-72 max-lg:w-11/12 max-lg:h-[24rem] items-center flex flex-col border-2 border-blue-100 h-72 py-2 justify-between mb-5">
            <img
              src={cement}
              alt="item"
              className="w-11/12 h-1/2 rounded mx-auto"
            />
            <h4 className="text-2xl font-semibold">Bamburi Tembo Cement</h4>
            <h4>
              To Buy contact:
              <span className=" font-semibold">+254 721 449353</span>
            </h4>
          </div>
          <div className=" w-72 max-lg:w-11/12 max-lg:h-[24rem] items-center flex flex-col border-2 border-blue-100 h-72 py-2 justify-between mb-5">
            <img
              src={tangit}
              alt="item"
              className="w-4/5 h-1/2 rounded mx-auto"
            />
            <h4 className="text-2xl font-semibold">Tangit PVC Special</h4>
            <h4>
              To Buy contact:
              <span className=" font-semibold">+254 721 449353</span>
            </h4>
          </div>
          <div className=" w-72 max-lg:w-11/12 max-lg:h-[24rem] items-center flex flex-col border-2 border-blue-100 h-72 py-2 justify-between mb-5">
            <img
              src={paint}
              alt="item"
              className="w-11/12 h-1/2 rounded mx-auto"
            />
            <h4 className="text-2xl font-semibold">
              Ruff and Tuff Textured Paint
            </h4>
            <h4>
              To Buy contact:
              <span className=" font-semibold">+254 721 449353</span>
            </h4>
          </div>
          <div className=" w-72 max-lg:w-11/12 max-lg:h-[24rem] items-center flex flex-col border-2 border-blue-100 h-72 py-2 justify-between mb-5">
            <img
              src={sikabit}
              alt="item"
              className="w-11/12 h-1/2 rounded mx-auto"
            />
            <h4 className="text-2xl font-semibold">Sikabit Membrane (p45)</h4>
          
            <h4>
              To Buy contact:
              <span className=" font-semibold">+254 721 449353</span>
            </h4>
          </div>
          <div className=" w-72 max-lg:w-11/12 max-lg:h-[24rem] items-center flex flex-col border-2 border-blue-100 h-72 py-2 justify-between mb-5">
            <img
              src={tiles}
              alt="item"
              className="w-11/12 h-1/2 rounded mx-auto"
            />
            <h4 className="text-2xl font-semibold">Floor Tiles 30 by 30cm</h4>
            <h4>
              To Buy contact:
              <span className=" font-semibold">+254 721 449353</span>
            </h4>
          </div>
          <div className=" w-72 max-lg:w-11/12 max-lg:h-[24rem] items-center flex flex-col border-2 border-blue-100 h-72 py-2 justify-between mb-5">
            <img
              src={sikabit}
              alt="item"
              className="w-11/12 h-1/2 rounded mx-auto"
            />
            <h4 className="text-2xl font-semibold">Sikabit Membrane (p45)</h4>
          
            <h4>
              To Buy contact:
              <span className=" font-semibold">+254 721 449353</span>
            </h4>
          </div>
        </div><div className="grid w-11/12 mx-auto gap-4 grid-cols-3 max-lg:grid-cols-1 ">
          <div className=" w-72 max-lg:w-11/12 max-lg:h-[24rem] items-center flex flex-col border-2 border-blue-100 h-72 py-2 justify-between mb-5">
            <img
              src={cement}
              alt="item"
              className="w-11/12 h-1/2 rounded mx-auto"
            />
            <h4 className="text-2xl font-semibold">Bamburi Tembo Cement</h4>
            <h4>
              To Buy contact:
              <span className=" font-semibold">+254 721 449353</span>
            </h4>
          </div>
          <div className=" w-72 max-lg:w-11/12 max-lg:h-[24rem] items-center flex flex-col border-2 border-blue-100 h-72 py-2 justify-between mb-5">
            <img
              src={sikabit}
              alt="item"
              className="w-11/12 h-1/2 rounded mx-auto"
            />
            <h4 className="text-2xl font-semibold">Sikabit Membrane (p45)</h4>
          
            <h4>
              To Buy contact:
              <span className=" font-semibold">+254 721 449353</span>
            </h4>
          </div>
          <div className=" w-72 max-lg:w-11/12 max-lg:h-[24rem] items-center flex flex-col border-2 border-blue-100 h-72 py-2 justify-between mb-5">
            <img
              src={tangit}
              alt="item"
              className="w-4/5 h-1/2 rounded mx-auto"
            />
            <h4 className="text-2xl font-semibold">Tangit PVC Special</h4>
            <h4>
              To Buy contact:
              <span className=" font-semibold">+254 721 449353</span>
            </h4>
          </div>
          <div className=" w-72 max-lg:w-11/12 max-lg:h-[24rem] items-center flex flex-col border-2 border-blue-100 h-72 py-2 justify-between mb-5">
            <img
              src={paint}
              alt="item"
              className="w-11/12 h-1/2 rounded mx-auto"
            />
            <h4 className="text-2xl font-semibold">
              Ruff and Tuff Textured Paint
            </h4>
            <h4>
              To Buy contact:
              <span className=" font-semibold">+254 721 449353</span>
            </h4>
          </div>
          <div className=" w-72 max-lg:w-11/12 max-lg:h-[24rem] items-center flex flex-col border-2 border-blue-100 h-72 py-2 justify-between mb-5">
            <img
              src={sikabit}
              alt="item"
              className="w-11/12 h-1/2 rounded mx-auto"
            />
            <h4 className="text-2xl font-semibold">Sikabit Membrane (p45)</h4>
          
            <h4>
              To Buy contact:
              <span className=" font-semibold">+254 721 449353</span>
            </h4>
          </div>
          <div className=" w-72 max-lg:w-11/12 max-lg:h-[24rem] items-center flex flex-col border-2 border-blue-100 h-72 py-2 justify-between mb-5">
            <img
              src={tiles}
              alt="item"
              className="w-11/12 h-1/2 rounded mx-auto"
            />
            <h4 className="text-2xl font-semibold">Floor Tiles 30 by 30cm</h4>
            <h4>
              To Buy contact:
              <span className=" font-semibold">+254 721 449353</span>
            </h4>
          </div>
          
        </div>
      </div>
      
      <div className="w-full bg-blue-300 flex items-center justify-around py-10">
        <div className=" w-1/5 ">
          <img src={logo} alt="piam hardware" className="w-24 h-24" />
        </div>
        <div className="flex w-96 justify-between">
          <h6>Products</h6>
          <h6>Brands</h6>
          <h6>On Sale</h6>
        </div>
        <div className="w-44">
          <h4>
            For more information or to get items delivered contact
            +254 721 449353
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
