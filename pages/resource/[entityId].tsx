import toReact from 'html-react-parser';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ErrorBoundary } from '../../components/elements/ErrorBoundary.component';
import {
  DefaultPage,
  DefaultPageProps
} from '../../components/layouts/DefaultPage.component';
import { serverRender } from '../../lib/serverRender';
import { ProjectParams } from '../../model/project-param';
import { projectsParams } from '../../projects/projectParams';
interface SSRProps {
  entityId: string;
}

interface ResourceProps extends SSRProps {
  defaultPage: DefaultPageProps;
  featuredProjects: ProjectParams[];
  _ssrHtmlBody: string;
  _ssrHtmlHead: string;
  _ssrData: { [key: string]: any };
}

export default function Resource(props: ResourceProps) {
  return (
    <ErrorBoundary>
      <DefaultPage {...props.defaultPage}>
        <Head>
          {toReact(props._ssrHtmlHead)}
          <title>{props._ssrData?.entityLabel?.label}</title>
          <meta
            name="description"
            content={`Page about ${props._ssrData?.entityLabel?.label} on Geovistory`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main dangerouslySetInnerHTML={{ __html: props._ssrHtmlBody }}></main>
      </DefaultPage>
    </ErrorBoundary>
  );
}

function ssr(props: SSRProps) {
  return (
    <ion-grid fixed={false}>
      <h1>
        <geov-entity-label
          sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"
          entity-id={props.entityId}
          _ssr-id="entityLabel"
        ></geov-entity-label>
      </h1>
    </ion-grid>
  );
}

export const getStaticProps: GetStaticProps<ResourceProps> = async (
  context
) => {
  const entityId = context?.params?.entityId as string;

  const props: SSRProps = { entityId };

  const res = await serverRender(ssr(props));

  const featuredProjects = projectsParams.filter((pp) => pp.featured);

  return {
    props: {
      ...props,
      featuredProjects,
      defaultPage: {
        footer: {
          featuredProjects,
        },
      },
      _ssrData: res.serverFetchedData,
      _ssrHtmlBody: res.bodyInnerHtml,
      _ssrHtmlHead: res.headInnerHtml,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  return {
    paths: ['/resource/i92342'],
    fallback: 'blocking', // can also be false or 'blocking'
  };
}