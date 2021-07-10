import * as React from 'react';
import { FaMapMarkedAlt, FaBusAlt, FaTrophy } from 'react-icons/fa';
import './about-us.scss';

export default function AboutUs() {
  return (
    <section id="about-us" className="about-us">
      <div className="text-center font-display mb-8">
        <label className="text-xs font-medium uppercase opacity-60 tracking-widest mb-2.5">
          O nas
        </label>
        <h2 className="text-4xl">Kim jesteśmy?</h2>
      </div>

      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-3 gap-12">
        {items.map(({ id, Icon, text }) => (
          <div key={id} className="grid-item">
            <Icon className="w-16 h-16 text-gray-900" />
            <p className="text-justify">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const items = [
  {
    id: 1,
    Icon: FaMapMarkedAlt,
    text: `Jesteśmy na rynku przewozów autokarowych od 1993r. Specjalizujemy się w krajowym i międzynarodowym przewozie osób, posiadamy wszelkie niezbędne certyfikaty oraz licencje do przewozu osób w kraju i poza jego granicami.`,
  },
  {
    id: 2,
    Icon: FaBusAlt,
    text: `Posiadamy autokary najwyższej klasy i dbamy o to aby były one zawsze czyste i zadbane. Autokary posiadają wszelkie udogodnienia oraz wyposażone są nowoczesne akcesoria     tj. klimatyzację, lodówkę, barek, DVD/TV, wygodne fotele z pasami bezpieczeństwa, itd.`,
  },
  {
    id: 3,
    Icon: FaTrophy,
    text: `Kierowcy Kierowcy w naszej firmie to zawodowcy, którzy cechują się profesjonalizmem oraz wysoką kulturą osobistą. Gwarantujemy wysoką jakość usług, miłą atmosferę oraz     niską cenę wynajmu autokarów i busów. Jeżeli jeszcze nie mieliśmy przyjemności świadczyć dla Was usług, sprawdź naszą ofertę i napisz do nas.`,
  },
];
