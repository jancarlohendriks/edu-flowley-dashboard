import { mdiPodcast } from '@mdi/js'
import Head from 'next/head'
import type { ReactElement } from 'react'
import SectionMain from '@/components/SectionMain'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton'
import CardBox from '@/components/CardBox'
import TablePodcasts from '@/components/TablePodcasts'
import { getPageTitle } from '@/config'
import LayoutTest from '@/layouts/Test'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const Podcasts = ({ podcasts, entity }) => {
  return (
    <LayoutTest entity={entity}>
      <Head>
        <title>{getPageTitle('Podcasts')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiPodcast} title="Podcasts">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TablePodcasts clients={podcasts} />
        </CardBox>
      </SectionMain>
    </LayoutTest>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const entity = context.resolvedUrl.match('([^/]+)').pop()
  const res = await fetch(`http://${process.env.HOST}/api/rating-podcasts?entity=${entity}`)
  const podcasts: any = await res.json()

  return {
    props: {
      podcasts,
      entity,
    },
  }
}

export default Podcasts
