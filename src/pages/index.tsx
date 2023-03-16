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
          <CardBoxWidget icon={mdiEye} iconColor="info" number={512} label="Visitors" />
          <CardBoxWidget
            icon={mdiPodcast}
            iconColor="info"
            number={3.5}
            numberSuffix=" / 5"
            label="Podcast ratings"
          />
          <CardBoxWidget
            icon={mdiWeightLifter}
            iconColor="info"
            number={2}
            numberSuffix=" / 5"
            label="Exercise ratings"
          />
        </div>

        <SectionTitleLineWithButton icon={mdiBookshelf} title="Themes">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TableSampleClients />
        </CardBox>
      </SectionMain>
    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutTest>{page}</LayoutTest>
}

export default Dashboard
