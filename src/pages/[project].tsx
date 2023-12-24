import { MainLayout } from '@/layouts/MainLayout';
import { toCamelCase } from '@/utils/parse-functions';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const components: any = {
  'harryPotter': dynamic(() => import('harryPotter/pages/index')),
};

const DinamicPage = ({ project }: { project: string }) => {
  const projectFormated = toCamelCase(project);
  const ExternalComponent = components[projectFormated];

  if (!ExternalComponent) {
    return (
      <MainLayout>
        <div>Componente no encontrado</div>
      </MainLayout>
    )
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

export default DinamicPage;
