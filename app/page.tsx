"use client";

import Footer from "@/app/layouts/Footer";
import Header from "@/app/layouts/Header";
import Layout from "@/app/layouts/Layout";
import About from "@/app/screens/About";
import Accountant from "@/app/screens/Accountant";
import Initial from "@/app/screens/Initial";
import Company from "@/app/screens/Company";
import Partners from "@/app/screens/Partners";
import Tax from "@/app/screens/Tax";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Initial />
        <Accountant />
        <Tax />
        <About />
        <Company />
        <Partners />
      </Layout>
      <Footer />
    </>
  );
}
