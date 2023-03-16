import { mdiChartTimelineVariant, mdiPodcast, mdiWeightLifter, mdiEye, mdiBookshelf } from '@mdi/js'
import Head from 'next/head'
import type { ReactElement } from 'react'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import CardBoxWidget from '../components/CardBoxWidget'
import CardBox from '../components/CardBox'
import TablePodcasts from '../components/TablePodcasts'
import { getPageTitle } from '../config'
import LayoutTest from '../layouts/Test'

const Podcasts = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Podcasts')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiPodcast} title="Podcasts">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TablePodcasts />
        </CardBox>
      </SectionMain>
    </>
  )
}

Podcasts.getLayout = function getLayout(page: ReactElement) {
  return <LayoutTest>{page}</LayoutTest>
}

export default Podcasts
