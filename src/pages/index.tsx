import { Inter } from "next/font/google";
import { MainLayout } from "@/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function MainPage() {
  return (
    <MainLayout>
      <small className={inter.className}>Selecciona una opción para ver el listado de personajes</small>
    </MainLayout>
  )
}
