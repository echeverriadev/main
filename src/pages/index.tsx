import { Navbar } from "@/components/Navbar";
import { MainLayout } from "@/layouts/MainLayout";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function MainPage() {
  return (
    <MainLayout>
      <small className={inter.className}>Selecciona una opción para ver el listado de personajes</small>
    </MainLayout>
  )
}
