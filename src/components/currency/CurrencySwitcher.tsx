import {
  DISPLAY_CURRENCIES,
  setDisplayCurrency,
  useDisplayCurrency,
  useSessionCurrency,
  type DisplayCurrencyCode,
} from './displayCurrency'
import styles from '../toolbar/store-toolbar.module.scss'

export default function CurrencySwitcher() {
  const code = useDisplayCurrency()
  const chargedIn = useSessionCurrency()

  return (
    <label
      className={styles.control}
      title={`Precios de referencia. El checkout cobra en ${chargedIn}.`}
    >
      <span className={styles.label}>Moneda</span>
      <select
        className={styles.select}
        value={code}
        onChange={(e) => setDisplayCurrency(e.target.value as DisplayCurrencyCode)}
        aria-label="Moneda para mostrar precios"
      >
        {Object.entries(DISPLAY_CURRENCIES).map(([value, { label }]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  )
}
