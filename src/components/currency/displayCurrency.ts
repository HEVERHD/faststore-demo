import { useCallback, useSyncExternalStore } from 'react'

import { useSession } from 'src/sdk/session'

/**
 * Moneda de visualización de la tienda.
 *
 * La cuenta demo vende en una sola moneda (la de la sesión). En VTEX la
 * multimoneda real sale de un binding / canal de venta por moneda; aquí solo
 * se convierten los precios que se *muestran*, con tasas de referencia fijas,
 * y el checkout sigue cobrando en la moneda de la sesión.
 */
export const DISPLAY_CURRENCIES = {
  USD: { label: 'Dólar (USD)', locale: 'en-US', perUSD: 1 },
  BRL: { label: 'Real (BRL)', locale: 'pt-BR', perUSD: 5.5 },
  COP: { label: 'Peso COL (COP)', locale: 'es-CO', perUSD: 4100 },
  MXN: { label: 'Peso MX (MXN)', locale: 'es-MX', perUSD: 18.5 },
} as const

export type DisplayCurrencyCode = keyof typeof DISPLAY_CURRENCIES

const STORAGE_KEY = 'fs-demo:display-currency'
const listeners = new Set<() => void>()

function isDisplayCurrency(code: unknown): code is DisplayCurrencyCode {
  return typeof code === 'string' && code in DISPLAY_CURRENCIES
}

function read(): DisplayCurrencyCode | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isDisplayCurrency(stored) ? stored : null
  } catch {
    return null
  }
}

export function setDisplayCurrency(code: DisplayCurrencyCode) {
  try {
    window.localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // Modo privado o almacenamiento bloqueado: la elección solo no se guarda
  }
  listeners.forEach((notify) => notify())
}

function subscribe(notify: () => void) {
  listeners.add(notify)
  return () => listeners.delete(notify)
}

/** Moneda en la que la tienda cobra de verdad (la de la sesión de VTEX) */
export function useSessionCurrency(): DisplayCurrencyCode {
  const { currency } = useSession()
  return isDisplayCurrency(currency.code) ? currency.code : 'USD'
}

/** Moneda elegida por el visitante; si no eligió, la de la sesión */
export function useDisplayCurrency(): DisplayCurrencyCode {
  const sessionCode = useSessionCurrency()
  const selected = useSyncExternalStore(subscribe, read, () => null)

  return selected ?? sessionCode
}

/** Reemplazo de `useFormattedPrice` de FastStore que convierte desde la moneda de la sesión */
export function useDisplayPriceFormatter() {
  const from = useSessionCurrency()
  const to = useDisplayCurrency()

  return useCallback(
    (price: number) => {
      const { locale, perUSD } = DISPLAY_CURRENCIES[to]
      const value = (price / DISPLAY_CURRENCIES[from].perUSD) * perUSD

      return Intl.NumberFormat(locale, {
        style: 'currency',
        currency: to,
        maximumFractionDigits: to === 'COP' ? 0 : 2,
      }).format(value)
    },
    [from, to]
  )
}

export function useDisplayPrice(price: number) {
  return useDisplayPriceFormatter()(price)
}
