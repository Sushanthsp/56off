import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div   style={{ boxShadow: '0px 2px 10px rgb(0 0 0 / 20%)', border: '1px solid #ddd', borderRadius: '8px' }} className="bg-white rounded-lg p-4 shadow-lg">
      {children}
    </div>
  );
};

const HeroArea = () => {
  return (
    <section className="mt-4 md:mt-0">
    <div className="flex justify-center">
      <Card>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Unbeatable Deals: Exclusive Coupon Listings for Huge Savings!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Unlock the Savings with Our Discount Directory!
        </p>
        <p className="text-sm">
          <span className="text-gray-400">Coming soon</span>
          <span style={{
            color:'text-blueviolet'
          }} className="text-blueviolet-400 ml-1">(Get Ready!)</span>
        </p>
      </Card>
    </div>
  </section>
  );
};

export default HeroArea;
