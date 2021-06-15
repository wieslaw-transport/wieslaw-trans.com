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

const aboutUs = {
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

const services = {
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

const contact = {
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

        <section id="o-nas" className="container">
          <h2>{aboutUs.title}</h2>
          {aboutUs.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </section>

        <StaticImage
          src="../images/inside.jpg"
          alt="inside"
          placeholder="blurred"
          layout="fullWidth"
        />

        <section id="uslugi" className="container">
          <h2>{services.title}</h2>

          <ul>
            {services.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p>{services.additionalInfo}</p>
        </section>

        <StaticImage
          src="../images/distance.jpg"
          alt="distance"
          placeholder="blurred"
          layout="fullWidth"
        />

        <section id="kontakt" className="container">
          <header>
            <h2>{contact.header.title}</h2>
            <p>{contact.header.paragraph}</p>
          </header>

          <div>
            <h3>{contact.mobile.title}</h3>
            {contact.mobile.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div>
            <h3>{contact.email.title}</h3>
            {contact.email.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>
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
