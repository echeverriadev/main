import { MainLayout } from '@/layouts/MainLayout';
import { toCamelCase } from '@/utils/parse-functions';
import { useTranslation } from 'next-i18next'
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic';

const components: any = {
  'harryPotter': dynamic(() => import('harryPotter/pages/index')),
  'rickAndMorty': dynamic(() => import('rickAndMorty/pages/index')),
};

const DinamicPage = ({ project }: { project: string }) => {
  const { t } = useTranslation();

  const projectFormated = toCamelCase(project);
  const ExternalComponent = components[projectFormated];

  if (!ExternalComponent) {
    return (
      <MainLayout>
        <div>{t('main.not-found')}</div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <ExternalComponent />
    </MainLayout>
  )
}
export const getServerSideProps: GetServerSideProps = async ({params, locale = 'es'}) => {
  const validProjects = ['harry-potter', 'rick-and-morty'];
  const project = params?.project;

  if (!validProjects.includes(project as string)) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
      ...(await serverSideTranslations(locale)),
    },
  }
}

export default DinamicPage;
