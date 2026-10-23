import type { ComponentProps } from 'react'

import { NavbarButtons as UINavbarButtons } from '@faststore/ui'

import CurrencySwitcher from '../currency/CurrencySwitcher'
import RegionQuickPicker from '../region/RegionQuickPicker'
import styles from './store-toolbar.module.scss'

/** Botones del navbar con el regionalizador y la moneda antes de búsqueda y carrito */
export default function StoreNavbarButtons({
  children,
  ...props
}: ComponentProps<typeof UINavbarButtons>) {
  return (
    <UINavbarButtons {...props}>
      <div className={styles.toolbar}>
        <RegionQuickPicker />
        <CurrencySwitcher />
      </div>
      {children}
    </UINavbarButtons>
  )
}
