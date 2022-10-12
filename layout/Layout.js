import Header from "../redux_containers/Header";
import Head from "next/head";
import Hints from "../redux_containers/Hints";
import { MainContainer } from "../components/styled-components/Container";
import { Fragment } from "react";
import PropTypes from "prop-types";

export default function Layout({ children, title, walletAddress }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ruda:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <Header />
      <MainContainer challenge={title === "Challenge"}>
      <p
        style={{ textAlign: "center", color: "white", fontSize: 20, margin: 50 }}
      >
        <b>Account Address :</b> {walletAddress}
      </p>
        {children}
      </MainContainer>
      <Hints />
    </Fragment>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
};
