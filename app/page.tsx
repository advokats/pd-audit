"use client";

import Footer from "@/app/layouts/Footer";
import Header from "@/app/layouts/Header";
import Layout from "@/app/layouts/Layout";
import About from "@/app/screens/About";
import Accountant from "@/app/screens/Accountant";
import Main from "@/app/screens/Main";
import Tax from "@/app/screens/Tax";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Main />
        <Accountant />
        <Tax />
        <About />
      </Layout>
      <Footer />
    </>
  );
}
