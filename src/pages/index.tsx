import { Navbar } from "@/components/Navbar";
import { MainLayout } from "@/layouts/MainLayout";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const inter = Inter({ subsets: ["latin"] });

export default function MainPage() {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <small className={inter.className}>{t('main.label')}</small>
    </MainLayout>
  )
}

export async function getServerSideProps({ locale } : { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
