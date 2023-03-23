import { mdiOpenInNew } from '@mdi/js'
import Head from 'next/head'
import type { ReactElement } from 'react'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import CardBox from '../components/CardBox'
import TableOutflow from '../components/TableOutflow'
import { getPageTitle } from '../config'
import LayoutTest from '../layouts/Test'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const Outflow = ({ posts, subdomain }) => {
  return (
    <LayoutTest entity={subdomain}>
      <Head>
        <title>{getPageTitle('Outflow')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiOpenInNew} title="Outflow">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TableOutflow clients={posts.outflow} />
        </CardBox>
      </SectionMain>
    </LayoutTest>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const subdomain = context.req?.headers?.host?.split('.')[0]

  const res = await fetch(`http://${process.env.HOST}/api/outflow`)
  const posts: any = await res.json()

  return {
    props: {
      posts,
      subdomain,
    },
  }
}

export default Outflow
