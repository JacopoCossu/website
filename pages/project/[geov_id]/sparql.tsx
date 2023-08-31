import type { GetStaticProps, NextPage } from 'next';
import { CCLicense } from '../../../components/elements/CCLicense.component';
import { Yasgui } from '../../../components/elements/Yasgui.component';
import {
  ProjectPageLayout,
  ProjectPageLayoutProps,
} from '../../../components/layouts/ProjectPageLayout.component';
import {
  ProjectParams,
  projectParamsToNavbarProps,
  projectsParams,
} from '../../../lib/projectParams';
import styles from './sparql.module.css';

export interface ProjectSparqlProps {
  params: ProjectParams;
  projectPageLayout: ProjectPageLayoutProps;
}
const ProjectSparqlPage: NextPage<ProjectSparqlProps> = (props) => {
  return (
    <ProjectPageLayout {...props.projectPageLayout}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Project&apos;s Open Data{' '}
          <ion-text color={'medium'}>
            <small>SPARQL access</small>
          </ion-text>
        </h1>
        <div className="ion-margin-top">
          <Yasgui
            endpoint={`https://sparql.geovistory.org/api_v1_project_${props.params.geovID}`}
          />
        </div>
        <CCLicense />
      </div>
    </ProjectPageLayout>
  );
};

export default ProjectSparqlPage;

export const getServerSideProps: GetStaticProps<ProjectSparqlProps> = async (
  context
) => {
  const projectId = parseInt(context.params?.geov_id as string, 10);

  const params = projectsParams.find((pp) => pp.geovID === projectId);
  if (!params) return { notFound: true };
  const props: ProjectSparqlProps = {
    projectPageLayout: {
      head: {
        headTitle: 'SPARQL ' + params.shortName,
        headOgDescription: params.description,
        headOgImage: params.headOgImage,
      },
      navbar: projectParamsToNavbarProps(params),
    },
    params,
  };
  return {
    props,
  };
};
