import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

import { graphql } from 'gatsby';
import Layout from '../components/layout';

const content = {
  header: {
    title: 'Kontakt',
    paragraph:
      'Z przyjemnością odpowiemy na wszelkie pytania dotyczące naszej oferty transportu autokarowego.',
  },
  mobile: {
    title: 'Zadzwoń',
    paragraphs: ['tel: 601 819 653', 'pon-pt 8:00 - 20:00'],
  },
  email: {
    title: 'Wyślij maila',
    paragraphs: ['email: wieslaw.trans@gmail.com'],
  },
};

export default function Contact({ data }) {
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
        <header>
          <h2>{content.header.title}</h2>
          <p>{content.header.paragraph}</p>
        </header>

        <div>
          <h3>{content.mobile.title}</h3>
          {content.mobile.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div>
          <h3>{content.email.title}</h3>
          {content.email.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
