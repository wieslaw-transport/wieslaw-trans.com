import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import { StaticImage } from 'gatsby-plugin-image';

import Navbar from '../components/navbar';
import { graphql } from 'gatsby';

const links = [
  {
    text: 'Start',
    to: '#start',
  },
  {
    text: 'Usługi',
    to: '#uslugi',
  },
  {
    text: 'O nas',
    to: '#o-nas',
  },
  {
    text: 'Kontakt',
    to: '#kontakt',
  },
];

export default function Home({ data }) {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: 'pl' }}>
        <title>Wieslaw Transport</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Usługi transportowe, przewóz osób autokarem, busem oraz samochodem osobowym. Wyjazdy krajowe i zagraniczne. Kontakt tel: 601 819 653. Adres email: wieslaw.trans@gmail.com, Matuszewski Wiesław."
        />
      </Helmet>
      <Navbar title={data.site.siteMetadata.title} links={links} />
      <main>
        <StaticImage
          className="hero-image"
          src="../images/hero.jpg"
          alt="hero"
          placeholder="blurred"
          layout="fullWidth"
        />
      </main>
    </div>
  );
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
