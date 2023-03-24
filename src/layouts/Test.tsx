import React, { ReactNode, useState } from 'react'
import { mdiForwardburger, mdiBackburger, mdiMenu, mdiHome } from '@mdi/js'
import BaseIcon from '../components/BaseIcon'
import NavBar from '../components/NavBar'
import NavBarItemPlain from '../components/NavBarItemPlain'
import menuNavBar from '../menuNavBar'
import { useAppSelector } from '../stores/hooks'
import Link from 'next/link'
import Navitation from '@/components/Navigation'

type Props = {
  entity: string
  children: ReactNode
}

export default function LayoutTest({ entity, children }: Props) {
  const darkMode = useAppSelector((state) => state.style.darkMode)
  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''} overflow-hidden lg:overflow-visible`}>
      <div
        className={`pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        {/* <NavBar menu={menuNavBar} className={`${isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''}`}>
          <NavBarItemPlain display="lg:flex">
            <Link href={`/${entity}`}>
              <NavBarItemPlain display="lg:flex">
                <BaseIcon path={mdiHome} className="mr-2" size="20" />
                {entity}
              </NavBarItemPlain>
            </Link>
          </NavBarItemPlain>
        </NavBar> */}
        <Navitation entity={entity} />
        {children}
      </div>
    </div>
  )
}
