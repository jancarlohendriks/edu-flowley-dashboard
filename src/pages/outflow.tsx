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
        <SectionTitleLineWithButton icon={mdiOpenInNew} title="Outflow clicks">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TableOutflow clients={posts.outflow} />
        </CardBox>
      </SectionMain>
    </LayoutTest>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const entity = ctx.query.entity
  const res = await fetch(`http://${process.env.HOST}/api/outflow?entity=${entity}`)
  const posts: any = await res.json()

  return {
    props: {
      posts,
      entity,
    },
  }
}

export default Outflow
