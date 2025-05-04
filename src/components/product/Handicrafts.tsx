import {
  bambooCaneItems,
  carpetsRugs,
  jewellery,
  metalWorks,
  textiles,
} from "../../utils";

import Product from "../Product";
import frozenFoodBg from "../../assets/img/frozen-food-bg.jpg";

export default function Handicrafts() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${frozenFoodBg})` }}
    >
      <section className="w-screen py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#3b65a8] font-['League_Spartan',_arial,_helvetica,_sans-serif]">
            Textile
          </h1>
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {textiles.map((product, index) => (
            <Product
              key={index.toString()}
              id={index}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>
      <section className="w-screen py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#3b65a8] font-['League_Spartan',_arial,_helvetica,_sans-serif]">
            Bamboo & Cane
          </h1>
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {bambooCaneItems.map((product, index) => (
            <Product
              key={index.toString()}
              id={index}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>
      <section className="w-screen py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#3b65a8] font-['League_Spartan',_arial,_helvetica,_sans-serif]">
            Jewellery
          </h1>
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {jewellery.map((product, index) => (
            <Product
              key={index.toString()}
              id={index}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>
      <section className="w-screen py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white font-['League_Spartan',_arial,_helvetica,_sans-serif]">
            Metal Works
          </h1>
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {metalWorks.map((product, index) => (
            <Product
              key={index.toString()}
              id={index}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>
      <section className="w-screen py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white font-['League_Spartan',_arial,_helvetica,_sans-serif]">
            Carpet & Rugs
          </h1>
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {carpetsRugs.map((product, index) => (
            <Product
              key={index.toString()}
              id={index}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
