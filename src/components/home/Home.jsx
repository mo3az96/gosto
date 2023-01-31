import React from "react";
import { Banner } from "./banner/Banner";
import { Blog } from "./blog/Blog";
import { Card } from "./hero/Card";
import { Hero } from "./hero/Hero";
import { Price } from "./price/Price";
import { Product } from "./product/Product";
import { Testimonials } from "./testimonials/Testimonials";
import { TopProduct } from "./topproduct/TopProduct";

export const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />
      <Price />
      <Testimonials />
      <Blog />
    </>
  );
};
