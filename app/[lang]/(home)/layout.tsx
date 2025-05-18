import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/[lang]/layout.config';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  
  const options = {
    ...baseOptions(lang),
    nav: { enabled: false }
  };

  return <HomeLayout className="home-layout" {...options}>{children}</HomeLayout>;
}
