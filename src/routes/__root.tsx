import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Footer from '@/components/Footer';
import Header from "@/components/Header";
import ReactLenis from "lenis/react";
import { Helmet } from "react-helmet-async";

export const Route = createRootRoute({
  component: RootComponent,
  ssr: 'data-only'
});

function RootComponent() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Thrumyeyes - Photography Portfolio</title>
        <meta name="description" content="A curated photography portfolio by Luis Jimenez (FEFO)." />
      </Helmet>
      <ReactLenis root />
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
