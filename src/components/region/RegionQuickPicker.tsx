import { useSession } from 'src/sdk/session'
import useRegion from 'src/components/region/RegionModal/useRegion'

import styles from '../toolbar/store-toolbar.module.scss'

/**
 * Regionalizador: elige la región de entrega por código postal.
 *
 * El código postal se fija con `useRegion` de FastStore, que valida la sesión
 * contra VTEX; luego la capa GraphQL resuelve precios y disponibilidad para
 * esa región.
 */
export const REGIONS = [
  { postalCode: '01310-100', label: 'São Paulo' },
  { postalCode: '20040-020', label: 'Rio de Janeiro' },
  { postalCode: '30130-010', label: 'Belo Horizonte' },
  { postalCode: '80010-000', label: 'Curitiba' },
] as const

export default function RegionQuickPicker() {
  const session = useSession()
  const { setRegion, loading, regionError } = useRegion()

  const current = REGIONS.find((r) => r.postalCode === session.postalCode)

  return (
    <label className={styles.control}>
      <span className={styles.label}>{loading ? 'Actualizando…' : 'Entregar en'}</span>
      <select
        className={styles.select}
        value={current?.postalCode ?? ''}
        disabled={loading}
        aria-invalid={!!regionError}
        aria-label="Región de entrega"
        onChange={(e) =>
          setRegion({
            session,
            postalCode: e.target.value,
            errorMessage: 'No pudimos validar esa región',
          })
        }
      >
        <option value="" disabled>
          {session.postalCode ? `CEP ${session.postalCode}` : 'Elige tu ciudad'}
        </option>
        {REGIONS.map(({ postalCode, label }) => (
          <option key={postalCode} value={postalCode}>
            {label}
          </option>
        ))}
      </select>
      {regionError && <span className={styles.error}>{regionError}</span>}
    </label>
  )
}
