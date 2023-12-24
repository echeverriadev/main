import { Navbar } from "@/components/Navbar";
import { MainLayout } from "@/layouts/MainLayout";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { useState } from "react";
const HPList = dynamic(() => import('harryPotter/pages/index'));

const inter = Inter({ subsets: ["latin"] });

export default function MainPage() {
  const [type, setType] = useState<'hp' | 'rm' | undefined>(undefined);

  const navButtons: any= {
    hp: {
      label: 'Harry Potter',
      toRender: <HPList />,
      click: () => setType('hp'),
    },
    rm: {
      label: 'Rick and Morty',
      toRender: <h1>RICK AND MORTY</h1>,
      click: () => setType('rm'),
    }
  }

  const renderContent = () => {
    if (type) {
      return navButtons[type].toRender;
    }
    return <small className={inter.className}>Selecciona una opción para ver el listado de personajes</small>;
  }

  return (
    <MainLayout>
      <Navbar buttons={
        Object.keys(navButtons).map((key) => navButtons[key])
      } />
      {renderContent()}
    </MainLayout>
  )
}
