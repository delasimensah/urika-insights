import React from "react";
import Link from "next/link";
import { servicesLinks } from "../../utils/subLinks";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";
import ServicesHero from "../../components/ServicesHero";

const Index = () => {
  return (
    <Layout>
      <ServicesHero />

      <Breadcrumbs className="px-5 mt-10 md:px-20">
        <Link href="/">
          <a>Home</a>
        </Link>

        <p>Services</p>
      </Breadcrumbs>

      <div className="px-5 pb-10 mt-10 space-y-7 md:px-20">
        {servicesLinks.map(({ link, title }, idx) => {
          return (
            <Link href={link} key={idx}>
              <h1 className="capitalize cursor-pointer heading text-secondary">
                {title}
              </h1>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Index;
