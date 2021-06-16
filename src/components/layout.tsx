import * as React from 'react';

import Navbar from './navbar';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Navbar title={title} />
      {children}
    </>
  );
}
