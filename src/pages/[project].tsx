import { MainLayout } from '@/layouts/MainLayout';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const toCamelCase = (str: string) => {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

const components: any = {
  'harryPotter': dynamic(() => import('harryPotter/pages/index')),
  // 'rickAndMorty': dynamic(() => import('rickAndMorty/pages/index')),
  // Agrega aquí más componentes según sea necesario
};

export default function DinamicPage({ project }: { project: string }) {
  const projectFormated = toCamelCase(project);
  const ExternalComponent = components[projectFormated];

  if (!ExternalComponent) {
    return <div>Failed to load</div>;
  }

  return (
    <MainLayout>
      <ExternalComponent />
    </MainLayout>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const validProjects = ['harry-potter', 'rick-and-morty'];
  const project = context.params?.project;

  if (!validProjects.includes(project as string)) {
    return {
      notFound: true,
    }
  }

  return {
    props: { project },
  }
}
