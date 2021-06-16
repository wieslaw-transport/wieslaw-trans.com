import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

import { graphql } from 'gatsby';
import Layout from '../components/layout';

const content = {
  title: 'O nas',
  paragraphs: [
    'Jesteśmy na rynku przewozów autokarowych od 1993r. Firma oferuje usługę w najwyższym zakresie wynajmu busów i autobusów.',
    'Kierowcy w naszej firmie to zawodowcy, którzy cechują się profesjonalizmem oraz wysoką kulturą osobistą.',
    'Specjalizujemy się w krajowym i międzynarodowym przewozie osób, posiadamy wszelkie niezbędne certyfikaty oraz licencje do przewozu osób w kraju i poza jego granicami.',
    'Posiadamy autokary najwyższej klasy. Dbamy o to aby autokar był zawsze czysty i zadbany. Autokary posiadają wszelkie udogodnienia oraz wyposażone są nowoczesne akcesoria tj.: klimatyzację, lodówkę, barek, DVD/TV, wygodne fotele z pasami bezpieczeństwa, itd.',
    'Gwarantujemy wysoką jakość usług, miłą atmosferę oraz niską cenę wynajmu autokarów i busów.',
    'Jeżeli jeszcze nie mieliśmy przyjemności świadczyć dla Was usług, sprawdź naszą ofertę i napisz do nas.',
  ],
};

export default function AboutUs({ data }) {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'pl' }}>
        <title>O nas | {data.site.siteMetadata.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Usługi transportowe, przewóz osób autokarem, busem oraz samochodem osobowym. Wyjazdy krajowe i zagraniczne. Kontakt tel: 601 819 653. Adres email: wieslaw.trans@gmail.com, Matuszewski Wiesław."
        />
      </Helmet>
      <main className="container">
        <h2>{content.title}</h2>
        {content.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </main>
    </Layout>
  );
}

export const query = graphql`
  query AboutUsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
