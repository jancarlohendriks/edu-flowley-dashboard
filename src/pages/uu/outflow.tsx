import { mdiOpenInNew } from '@mdi/js'
import Head from 'next/head'
import SectionMain from '@/components/SectionMain'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton'
import CardBox from '@/components/CardBox'
import TableOutflow from '@/components/TableOutflow'
import { getPageTitle } from '@/config'
import LayoutTest from '@/layouts/Test'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const Outflow = ({ posts, entity }) => {
  return (
    <LayoutTest entity={entity}>
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
  const entity = context.resolvedUrl.match('([^/]+)').pop()
  const res = await fetch(`http://${process.env.HOST}/api/outflow`)
  const posts: any = await res.json()

  return {
    props: {
      posts,
      entity,
    },
  }
}

export default Outflow
