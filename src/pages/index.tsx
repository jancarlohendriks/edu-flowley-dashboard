import { mdiChartTimelineVariant, mdiPodcast, mdiWeightLifter, mdiEye, mdiBookshelf } from '@mdi/js'
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

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Overview" main>
          Last 30 days
        </SectionTitleLineWithButton>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget icon={mdiEye} iconColor="info" number={512} label="Platform Views" />
        </div>

        <SectionTitleLineWithButton icon={mdiBookshelf} title="Theme views">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TableSampleClients />
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
        </div>
      </SectionMain>
    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutTest>{page}</LayoutTest>
}

export default Dashboard
