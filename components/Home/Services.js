import Image from "next/image";
import React from "react";

function Services() {
  return (
    <section className="mt-20 pt-20">
      <div className="px-16">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <div className="grid grid-cols-2 mt-10">
          <div className="flex gap-10 border-r-2 border-b-2 p-16 pt-5">
            <div className="w-full h-full rounded-2xl relative">
              <Image
                src="/sale.png"
                alt="heroImage"
                fill
                quality={80}
                sizes="fit-content"
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Sell Your Property</h3>
              <p className="text-gray-500 mt-5">
                Selling your property is a big decision. We can help you make
                the right one. We have the experience and the tools to help you
                sell your property quickly and for the best price.
              </p>
            </div>
          </div>
          <div className="flex gap-10 border-b-2 p-16 pt-5">
            <div className="w-full h-full rounded-2xl relative">
              <Image
                src="/buy-home.png"
                alt="heroImage"
                fill
                quality={80}
                sizes="fit-content"
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Buy Your Property</h3>
              <p className="text-gray-500 mt-5">
                Buying a property has never been easier. With services like our
                online marketplace, you can get a better idea of what you can
                afford. We can help find the right property for you.
              </p>
            </div>
          </div>
          <div className="flex gap-10 border-r-2 p-16 pt-10 pb-5">
            <div className="w-full h-full rounded-2xl relative">
              <Image
                src="/agreement.png"
                alt="heroImage"
                fill
                quality={80}
                sizes="fit-content"
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Legal Service</h3>
              <p className="text-gray-500 mt-5">
                To make it even easier, we have a team of lawyers who can help
                you with the legal process of buying and selling a property, so
                that you don&apos;t have to worry about it.
              </p>
            </div>
          </div>
          <div className="flex gap-10 p-16 pt-10 pb-5">
            <div className="w-full h-full rounded-2xl relative">
              <Image
                src="/valuation.png"
                alt="heroImage"
                fill
                quality={80}
                sizes="fit-content"
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Free Evaluation</h3>
              <p className="text-gray-500 mt-5">
                We can help you find out how much your property is worth. We can
                help you sell your property quickly and for the best price or
                help find the right property for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
