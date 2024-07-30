import "./index.css";
import Product from "./asset/image-product-desktop.jpg";

function App() {
  return (
    <>
      <div className="Box">
        <div
          className="grid grid-cols-2 gap-4 place-content-stretch"
          id="container"
        >
          <div className="place-content-center">
            <img src={Product} alt="parfume" />
          </div>
          <div className=" p-8 ">
            <h6 className="tracking-wider txt">PARFUME</h6>
            <h1 className="font-medium text-4xl pb-8 ['Fraunces'] ">
              Gabriel Essence Eau De Parfume
            </h1>
            <p className=" italic text-xs">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL
            </p>

            <h1 className="font-medium text-4xl pt-6 pb-8 flex">
              $146.99
              <p className="lower font-thin pl-4">169.99</p>
            </h1>
            <button className=" bg-emerald-600"> Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
