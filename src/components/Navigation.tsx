import React, { useState } from 'react'
import BaseIcon from './BaseIcon'
import NavBarItemPlain from './NavBarItemPlain'
import { mdiHome, mdiChartTimelineVariant } from '@mdi/js'
import NavBar from '../components/NavBar'
import menuNavBar from '../menuNavBar'
import Link from 'next/link'

type Props = {
  entity?: string
}

export default function Navitation({ entity }: Props) {
  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false)

  return (
    <NavBar
      menu={[
        {
          icon: mdiHome,
          label: 'Home',
          href: '/',
        },
        {
          icon: mdiChartTimelineVariant,
          label: 'Dashboard',
          href: `/${entity}`,
        },
        ...menuNavBar,
      ]}
      className={`${isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''}`}
    >
      <NavBarItemPlain>
        <NavBarItemPlain>
          <Link href="https://www.flowley.nl/">Flowley</Link>
        </NavBarItemPlain>
        {entity && (
          <>
            <span>|</span>
            <NavBarItemPlain>
              <Link href={`/${entity}`}>
                {/* <BaseIcon path={mdiHome} className="mr-2" size="20" /> */}
                {entity}
              </Link>
            </NavBarItemPlain>
          </>
        )}
      </NavBarItemPlain>
    </NavBar>
  )
}
