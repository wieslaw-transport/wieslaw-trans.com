import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

import { graphql } from 'gatsby';
import Layout from '../components/layout';

const content = {
  title: 'Oferujemy',
  list: [
    'Wyjazdy krajowe',
    'Wyjazdy zagraniczne',
    'Planowanie programu wycieczki',
    'Wycieczki szkolne i pielgrzymki',
    'Transfer (z) lub (na) lotnisko',
    'Transfer (z) lub (do) hotelu',
    'Imprezy okolicznościowe',
    'Wieczory kawalerskie',
    'Przewóz gości weselnych',
    'Przewóz osób na konferencje, szkolenia, wyjazdy integracyjne',
    'Mikrobus/samochód osobowy z kierowcą',
    'Umowy okresowe',
  ],
  additionalInfo: `
    Ceny wynajmu autokarów kalkulowane są w oparciu o czas wynajęcia autokaru, zaś w przypadku dłuższych
    tras, przeliczane są na podstawie ilości przejechanych kilometrów. Kalkulację na konkretną trasę
    przesyłamy zainteresowanym osobom na e-mail.`,
};

export default function Kontakt({ data }) {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'pl' }}>
        <title>Kontakt | {data.site.siteMetadata.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Usługi transportowe, przewóz osób autokarem, busem oraz samochodem osobowym. Wyjazdy krajowe i zagraniczne. Kontakt tel: 601 819 653. Adres email: wieslaw.trans@gmail.com, Matuszewski Wiesław."
        />
      </Helmet>
      <main className="container">
        <h2>{content.title}</h2>

        <ul>
          {content.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <p>{content.additionalInfo}</p>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query KontaktQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
