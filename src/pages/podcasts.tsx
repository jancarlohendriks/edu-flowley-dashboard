import { mdiPodcast } from '@mdi/js'
import Head from 'next/head'
import type { ReactElement } from 'react'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import CardBox from '../components/CardBox'
import TablePodcasts from '../components/TablePodcasts'
import { getPageTitle } from '../config'
import LayoutTest from '../layouts/Test'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const Podcasts = ({ posts, subdomain }) => {
  return (
    <LayoutTest entity={subdomain}>
      <Head>
        <title>{getPageTitle('Podcasts')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiPodcast} title="Podcasts">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TablePodcasts clients={posts} />
        </CardBox>
      </SectionMain>
    </LayoutTest>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const subdomain = context.req?.headers?.host?.split('.')[0]

  const res = await fetch(`http://${process.env.HOST}/api/rating-podcasts?entity=fontys`)
  const posts: any = await res.json()

  return {
    props: {
      posts,
      subdomain,
    },
  }
}

export default Podcasts
