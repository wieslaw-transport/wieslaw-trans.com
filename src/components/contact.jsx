import * as React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import Form from './form';
import './contact.scss';

const items = [
  {
    id: 1,
    Icon: FaMapMarkerAlt,
    text: 'Piaskowa 7, Pułtusk',
    url: 'https://goo.gl/maps/UF4Q6mq3u2jdJVnM7',
  },
  {
    id: 2,
    Icon: FaPhoneAlt,
    text: '601 819 653',
    url: 'tel:601-819-653',
  },
  {
    id: 3,
    Icon: FaEnvelopeOpenText,
    text: 'wieslaw.trans@gmail.com',
    url: 'mailto:wieslaw.trans@gmail.com',
  },
];

const externalLinkProps = {
  target: '_blank',
  rel: 'noreferrer',
};

export default function Contact() {
  return (
    <section
      id="contact-section"
      className="contact-section w-full max-w-screen-md mx-auto"
    >
      <div className="text-center font-display mb-12">
        <label className="text-xs font-medium uppercase opacity-60 tracking-widest mb-2.5">
          Kontakt
        </label>
        <h2 className="text-4xl">Skontaktuj się z nami!</h2>
      </div>

      <div className="contact-details-grid mb-12">
        {items.map(({ id, Icon, text, url }) => (
          <a
            key={id}
            href={url}
            {...(url.startsWith('http') ? externalLinkProps : {})}
            className={`grid-item w-full py-2 text-gray-700 rounded-md dark:text-gray-200 hover:bg-primary-200 dark:hover:bg-primary-500`}
          >
            <Icon className={`w-5 h-5 text-primary-600`} />
            <span className="">{text}</span>
          </a>
        ))}
      </div>

      <Form />
    </section>
  );
}
