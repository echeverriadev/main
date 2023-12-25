import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "../styles/MainLayout.module.css";
import { useTranslation } from 'next-i18next'
const inter = Inter({ subsets: ["latin"] });

import { ReactNode } from "react";
import { useRouter } from "next/router";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const {locale, locales, push} = useRouter();
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={inter.className}>{t('navbar.title')}</h1>
        <h2 className={inter.className}>{t('navbar.subtitle')}</h2>
        <Navbar />
        {children}
      </main>
    </>
  );
};
