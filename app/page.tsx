"use client";

import useLoading from "@/app/hooks/useLoading";
import Footer from "@/app/layouts/Footer";
import Header from "@/app/layouts/Header";
import Layout from "@/app/layouts/Layout";
import About from "@/app/screens/About";
import Company from "@/app/screens/Company";
import InitialAudit from "@/app/screens/InitialAudit";
import Partners from "@/app/screens/Partners";
import Services from "@/app/screens/Services";

export default function Home() {
  const { isLoading } = useLoading();

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Header />
      <Layout>
        <InitialAudit />
        <Services />
        <About />
        <Company />
        <Partners />
      </Layout>
      <Footer />
    </>
  );
}
