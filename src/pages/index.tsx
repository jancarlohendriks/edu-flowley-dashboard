import {
  mdiChartTimelineVariant,
  mdiPodcast,
  mdiWeightLifter,
  mdiEye,
  mdiBookshelf,
  mdiTimerSand,
  mdiExitRun,
  mdiOpenInNew,
} from '@mdi/js'
import Head from 'next/head'
import type { ReactElement } from 'react'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import CardBoxWidget from '../components/CardBoxWidget'
import CardBox from '../components/CardBox'
import TableSampleClients from '../components/TableSampleClients'
import { getPageTitle } from '../config'
import LayoutTest from '../layouts/Test'
import Link from 'next/link'
import { colorsText } from '../colors'
import BaseIcon from '../components/BaseIcon'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const Dashboard = ({ views, bounce, engagement, themes, subdomain }: any) => {
  return (
    <LayoutTest entity={subdomain}>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Overview" main>
          Last 30 days
        </SectionTitleLineWithButton>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            icon={mdiEye}
            iconColor="info"
            number={Number(views.views)}
            label="Platform Views"
          />
          <CardBoxWidget
            icon={mdiTimerSand}
            iconColor="info"
            number={Number(engagement.engagement)}
            numberSuffix="ms"
            label="Time spent"
          />
          <CardBoxWidget
            icon={mdiExitRun}
            iconColor="info"
            number={Math.round(bounce.bounce * 100) / 100}
            numberSuffix="%"
            label="Bounce Rate"
          />
        </div>

        <SectionTitleLineWithButton icon={mdiBookshelf} title="Theme views">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TableSampleClients clients={themes.themes} />
        </CardBox>

        <br />
        <br />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <Link href="/podcasts">
            <CardBox>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg leading-tight text-gray-500 dark:text-slate-400">
                    Podcast ratings
                  </h3>
                </div>
                <BaseIcon
                  path={mdiPodcast}
                  size="48"
                  w=""
                  h="h-16"
                  className={colorsText['info']}
                />
              </div>
            </CardBox>
          </Link>
          <Link href="/exercises">
            <CardBox>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg leading-tight text-gray-500 dark:text-slate-400">
                    Exercise ratings
                  </h3>
                </div>
                <BaseIcon
                  path={mdiWeightLifter}
                  size="48"
                  w=""
                  h="h-16"
                  className={colorsText['info']}
                />
              </div>
            </CardBox>
          </Link>
          <Link href="/outflow">
            <CardBox>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg leading-tight text-gray-500 dark:text-slate-400">
                    Outflow
                  </h3>
                </div>
                <BaseIcon
                  path={mdiOpenInNew}
                  size="48"
                  w=""
                  h="h-16"
                  className={colorsText['info']}
                />
              </div>
            </CardBox>
          </Link>
        </div>
      </SectionMain>
    </LayoutTest>
  )
}

// Dashboard.getLayout = function getLayout(page: ReactElement) {
//   return <LayoutTest>{page}</LayoutTest>
// }

// Dashboard.getInitialProps = async ({ req }: NextPageContext) => {
//   const subdomain = req?.headers?.host?.split('.')[0]
//   // you can add logic or validation here to check subdomain to database using API request
//   const storeName = subdomain ? subdomain.charAt(0) + subdomain.slice(1) : ''
//   return { storeName }
// }

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const subdomain = context.req?.headers?.host?.split('.')[0]

  const v = await fetch(`http://${process.env.HOST}/api/views-platform`)
  const views: any = await v.json()

  const b = await fetch(`http://${process.env.HOST}/api/bounce-rate`)
  const bounce: any = await b.json()

  const e = await fetch(`http://${process.env.HOST}/api/engagement`)
  const engagement: any = await e.json()

  const t = await fetch(`http://${process.env.HOST}/api/views-theme`)
  const themes: any = await t.json()

  return {
    props: {
      views,
      bounce,
      engagement,
      themes,
      subdomain,
    },
  }
}

export default Dashboard
