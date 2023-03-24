import {
  mdiChartTimelineVariant,
  mdiPodcast,
  mdiWeightLifter,
  mdiEye,
  mdiBookshelf,
  mdiTimerSand,
  mdiExitRun,
  mdiOpenInNew,
} from '@mdi/js'
import Head from 'next/head'
import SectionMain from '@/components/SectionMain'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton'
import CardBoxWidget from '@/components/CardBoxWidget'
import CardBox from '@/components/CardBox'
import TableSampleClients from '@/components/TableSampleClients'
import { getPageTitle } from '@/config'
import LayoutTest from '@/layouts/Test'
import Link from 'next/link'
import { colorsText } from '@/colors'
import BaseIcon from '@/components/BaseIcon'

const Dashboard = ({ props }: any) => {
  const { views, bounce, engagement, themes, entity } = props

  return (
    <LayoutTest entity={entity}>
      <Head>
        <title>{getPageTitle(`Dashboard ${entity}`)}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Overview" main>
          Last 30 days
        </SectionTitleLineWithButton>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            icon={mdiEye}
            iconColor="info"
            number={Number(views.views)}
            label="Platform Views"
          />
          <CardBoxWidget
            icon={mdiTimerSand}
            iconColor="info"
            number={Number(engagement.engagement)}
            numberSuffix="ms"
            label="Time spent"
          />
          <CardBoxWidget
            icon={mdiExitRun}
            iconColor="info"
            number={Math.round(bounce.bounce * 100) / 100}
            numberSuffix="%"
            label="Bounce Rate"
          />
        </div>

        <SectionTitleLineWithButton icon={mdiBookshelf} title="Views per theme">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TableSampleClients clients={themes.themes} />
        </CardBox>

        <br />
        <br />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <Link href={`/podcasts?entity=${entity}`}>
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
          <Link href={`/exercises?entity=${entity}`}>
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
          <Link href={`/outflow?entity=${entity}`}>
            <CardBox>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg leading-tight text-gray-500 dark:text-slate-400">
                    Outflow
                  </h3>
                </div>
                <BaseIcon
                  path={mdiOpenInNew}
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
    </LayoutTest>
  )
}

export default Dashboard
