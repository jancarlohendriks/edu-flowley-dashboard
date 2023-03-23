import { mdiWeightLifter } from '@mdi/js'
import Head from 'next/head'
import type { ReactElement } from 'react'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import CardBox from '../components/CardBox'
import TableExercises from '../components/TableExercises'
import { getPageTitle } from '../config'
import LayoutTest from '../layouts/Test'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const Exercises = ({ posts, subdomain }) => {
  return (
    <LayoutTest entity={subdomain}>
      <Head>
        <title>{getPageTitle('Exercises')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiWeightLifter} title="Exercises">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TableExercises clients={posts} />
        </CardBox>
      </SectionMain>
    </LayoutTest>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const subdomain = context.req?.headers?.host?.split('.')[0]

  const res = await fetch(`http://${process.env.HOST}/api/rating-exercises?entity=fontys`)
  const posts: any = await res.json()

  return {
    props: {
      posts,
      subdomain,
    },
  }
}

export default Exercises
