import { mdiChartTimelineVariant, mdiPodcast, mdiWeightLifter, mdiEye, mdiBookshelf } from '@mdi/js'
import Head from 'next/head'
import type { ReactElement } from 'react'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import CardBoxWidget from '../components/CardBoxWidget'
import CardBox from '../components/CardBox'
import TableExercises from '../components/TableExercises'
import { getPageTitle } from '../config'
import LayoutTest from '../layouts/Test'

const Exercises = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Exercises')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiWeightLifter} title="Exercises">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TableExercises />
        </CardBox>
      </SectionMain>
    </>
  )
}

Exercises.getLayout = function getLayout(page: ReactElement) {
  return <LayoutTest>{page}</LayoutTest>
}

export default Exercises
