import { ProjectPageLayoutProps } from '../../../components/layouts/ProjectPageLayout.component';
import { ProjectEntityPageProps } from '../../../pages/project/[geov_id]/page/[entityId]';
import toReact from 'html-react-parser';
import Head from 'next/head';
import React from 'react';
import { ErrorBoundary } from '../../../components/elements/ErrorBoundary.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';

export interface SSRProps extends ProjectEntityPageProps {
  entityId: string;
}

export interface DefaultEntityProps extends SSRProps {
  projectPageLayout: ProjectPageLayoutProps;
  _ssrHtmlBody: string;
  _ssrHtmlHead: string;
  _ssrData: { [key: string]: any };
}

export function DefaultEntityPage(props: DefaultEntityProps) {
  return (
    <ErrorBoundary>
      <ProjectPageLayout {...props.projectPageLayout}>
        <Head>
          {toReact(props._ssrHtmlHead)}
          <title>{props._ssrData?.entityLabel?.label}</title>
          <meta
            name="description"
            content={`Page about ${props._ssrData?.entityLabel?.label} on Geovistory`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className="mainGridNoPadding ion-color-tertiary-bg"
          dangerouslySetInnerHTML={{ __html: props._ssrHtmlBody }}
        ></main>
      </ProjectPageLayout>
    </ErrorBoundary>
  );
}

export function ssr(props: SSRProps) {
  return (
    <geov-entity
      sparql-endpoint={`https://sparql.geovistory.org/api_v1_project_${props.projectId}`}
      entity-id={props.entityId}
      uri-regex={process.env.NEXT_PUBLIC_GEOV_URI_REGEX}
      uri-replace={
        process.env.NEXT_PUBLIC_GEOV_URI_REPLACE + '?p=' + props.projectId
      }
    >
      <div slot="body-end" className="section">
        <ion-grid fixed={true}>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Metadata</ion-card-subtitle>
            </ion-card-header>
            <ion-list lines="none">
              <ion-item>
                <ion-note>
                  Project URL:{' '}
                  <a
                    href={`http://geovistory.org/resource/${props.entityId}?p=${props.projectId}`}
                  >
                    {`http://geovistory.org/resource/${props.entityId}?p=${props.projectId}`}
                  </a>
                </ion-note>
              </ion-item>
            </ion-list>
            <ion-list lines="none">
              <ion-item>
                <ion-note>
                  URI:{' '}
                  <a
                    href={`http://geovistory.org/resource/${props.entityId}`}
                  >{`http://geovistory.org/resource/${props.entityId}`}</a>
                </ion-note>
              </ion-item>
            </ion-list>
          </ion-card>
        </ion-grid>
      </div>
    </geov-entity>
  );
}
