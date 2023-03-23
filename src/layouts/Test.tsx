import React, { ReactNode, useEffect } from 'react'
import { mdiForwardburger, mdiBackburger, mdiMenu, mdiHome } from '@mdi/js'
import menuNavBar from '../menuNavBar'
import BaseIcon from '../components/BaseIcon'
import NavBar from '../components/NavBar'
import NavBarItemPlain from '../components/NavBarItemPlain'
import FooterBar from '../components/FooterBar'
import { setUser } from '../stores/mainSlice'
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import Link from 'next/link'

type Props = {
  entity: string
  children: ReactNode
}

export default function LayoutTest({ entity, children }: Props) {
  const darkMode = useAppSelector((state) => state.style.darkMode)

  return (
    <div className={`${darkMode ? 'dark' : ''} overflow-hidden lg:overflow-visible`}>
      <div
        className={`pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        <NavBar menu={menuNavBar} className={'ml-60 lg:ml-0'}>
          <NavBarItemPlain display="lg:flex">
            <Link href="/">
              <NavBarItemPlain display="lg:flex">
                <BaseIcon path={mdiHome} className="mr-2" size="20" />
                {entity}
              </NavBarItemPlain>
            </Link>
          </NavBarItemPlain>
        </NavBar>
        {children}
      </div>
    </div>
  )
}
