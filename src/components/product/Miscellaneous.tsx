import Product from "../Product";
import { miscellaneousItems } from "../../utils";

export default function Miscellaneous() {
  return (
    <section className="w-screen py-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#3b65a8] font-['League_Spartan',_arial,_helvetica,_sans-serif]">
          Miscellaneous
        </h1>
      </div>
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
        {miscellaneousItems.map((product, index) => (
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
  );
}
