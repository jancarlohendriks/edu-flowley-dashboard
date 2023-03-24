import { mdiChartTimelineVariant, mdiWarehouse } from '@mdi/js'
import Head from 'next/head'
import SectionMain from '@/components/SectionMain'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton'
import CardBox from '@/components/CardBox'
import { getPageTitle } from '@/config'
import Link from 'next/link'
import { colorsText } from '@/colors'
import BaseIcon from '@/components/BaseIcon'
import Navitation from '@/components/Navigation'
import { useAppSelector } from '../stores/hooks'
import { LogoFontys } from '@/components/LogoFontys'
import { LogoUu } from '@/components/LogoUu'

const Home = () => {
  const darkMode = useAppSelector((state) => state.style.darkMode)
  return (
    <div className={`${darkMode ? 'dark' : ''} overflow-hidden lg:overflow-visible`}>
      <div
        className={`pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        <Head>
          <title>{getPageTitle('Home')}</title>
        </Head>
        <Navitation />
        {/* <NavBar menu={menuNavBar} className={'ml-60 lg:ml-0'}>
          <NavBarItemPlain display="lg:flex">Flowley</NavBarItemPlain>
        </NavBar> */}
        <SectionMain>
          <SectionTitleLineWithButton icon={mdiWarehouse} title="Partners" main>
            &nbsp;
          </SectionTitleLineWithButton>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
            <Link href={`/fontys`}>
              <CardBox>
                <div className="flex items-center justify-center">
                  <LogoFontys />
                </div>
              </CardBox>
            </Link>
            <Link href={`/uu`}>
              <CardBox>
                <div className="flex items-center justify-center">
                  <LogoUu />
                </div>
              </CardBox>
            </Link>
          </div>
        </SectionMain>
      </div>
    </div>
  )
}

export default Home
