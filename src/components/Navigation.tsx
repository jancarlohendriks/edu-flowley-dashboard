import React, { useState } from 'react'
import NavBarItemPlain from './NavBarItemPlain'
import { mdiHome, mdiChartTimelineVariant } from '@mdi/js'
import NavBar from '../components/NavBar'
import menuNavBar from '../menuNavBar'
import Link from 'next/link'
import { LogoFontys } from './LogoFontys'
import { LogoFlowley } from './LogoFlowley'
import { LogoUu } from './LogoUu'

type Props = {
  entity?: string
}

export default function Navitation({ entity }: Props) {
  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false)
  const menu: any = [
    {
      icon: mdiHome,
      label: 'Home',
      href: '/',
    },
  ]

  entity &&
    menu.push({
      icon: mdiChartTimelineVariant,
      label: 'Dashboard',
      href: `/${entity}`,
    })

  menu.push(...menuNavBar)

  return (
    <NavBar menu={menu} className={`${isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''}`}>
      <NavBarItemPlain>
        {/* <div style={{ display: 'flex', paddingTop: '2rem' }}> */}
        <NavBarItemPlain>
          <Link href="https://www.flowley.nl/">
            <LogoFlowley />
          </Link>
        </NavBarItemPlain>
        {entity && (
          <>
            <span
              style={{
                position: 'relative',
                top: '.22rem',
              }}
            >
              |
            </span>
            <NavBarItemPlain>
              <Link href={`/${entity}`}>
                {entity === 'fontys' ? <LogoFontys /> : entity === 'uu' ? <LogoUu /> : entity}
              </Link>
            </NavBarItemPlain>
          </>
        )}
        {/* </div> */}
      </NavBarItemPlain>
    </NavBar>
  )
}
