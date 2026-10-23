import { memo, useMemo } from 'react'

import {
  Badge as UIBadge,
  Link as UILink,
  Price as UIPrice,
  ProductCard as UIProductCard,
  ProductCardImage as UIProductCardImage,
} from '@faststore/ui'
import NextLink from 'next/link'

import type { ProductCardProps } from 'src/components/product/ProductCard/ProductCard'
import { Image } from 'src/components/ui/Image'
import { useProductLink } from 'src/sdk/product/useProductLink'

import { useDisplayPrice } from '../currency/displayCurrency'
import styles from './store-product-card.module.scss'

/**
 * Override del ProductCard que usan ProductShelf y ProductGallery.
 *
 * Usa las mismas piezas y atributos `data-fs-*` que la tarjeta nativa (así
 * conserva los estilos del tema), y además:
 * - muestra los precios en la moneda elegida por el visitante
 * - calcula el badge "-X %" y el texto "Ahorras …" a partir del precio de lista
 * - deja todos los textos, incluidos los de lector de pantalla, en español
 */
function StoreProductCard({
  product,
  index,
  bordered = true,
  variant = 'default',
  aspectRatio = 1,
  imgProps,
  taxesConfiguration,
}: ProductCardProps) {
  const {
    sku,
    isVariantOf: { name },
    image: [img],
    offers: {
      lowPrice,
      lowPriceWithTaxes,
      offers: [{ listPrice: listPriceBase, availability, listPriceWithTaxes }],
    },
  } = product

  const linkProps = {
    ...useProductLink({ product, selectedOffer: 0, index }),
    as: NextLink,
    passHref: true,
    legacyBehavior: false,
    prefetch: false,
  }

  const outOfStock = availability !== 'https://schema.org/InStock'
  const spotPrice = taxesConfiguration?.usePriceWithTaxes ? lowPriceWithTaxes : lowPrice
  const listPrice = taxesConfiguration?.usePriceWithTaxes ? listPriceWithTaxes : listPriceBase
  const hasDiscount = listPrice > spotPrice

  const savingsPercent = useMemo(
    () => (hasDiscount ? Math.round((1 - spotPrice / listPrice) * 100) : 0),
    [hasDiscount, listPrice, spotPrice]
  )
  const savedAmount = useDisplayPrice(Math.max(listPrice - spotPrice, 0))

  return (
    <UIProductCard
      outOfStock={outOfStock}
      bordered={bordered}
      variant={variant}
      data-fs-product-card-sku={sku}
      className={styles.card}
    >
      <UIProductCardImage aspectRatio={aspectRatio}>
        <Image
          src={img.url}
          alt={img.alternateName}
          sizes={`${imgProps?.sizes ?? '(max-width: 768px) 40vw, 30vw'}`}
          width={imgProps?.width ?? 360}
          height={Math.round((Number(imgProps?.height) || 360) / aspectRatio)}
          loading={imgProps?.loading}
          fetchPriority={imgProps?.fetchPriority}
        />
        {savingsPercent > 0 && !outOfStock && (
          <span className={styles.badge}>-{savingsPercent}%</span>
        )}
      </UIProductCardImage>

      <section data-fs-product-card-content>
        <div data-fs-product-card-heading>
          <h3 data-fs-product-card-title>
            <UILink {...linkProps} title={name}>
              <span>{name}</span>
            </UILink>
          </h3>

          {!outOfStock && (
            <div data-fs-product-card-prices data-fs-product-price>
              {hasDiscount && (
                <UIPrice
                  value={listPrice}
                  formatter={useDisplayPrice}
                  variant="listing"
                  data-value={listPrice}
                  SRText="Precio original:"
                />
              )}
              <UIPrice
                value={spotPrice}
                formatter={useDisplayPrice}
                variant="spot"
                data-value={spotPrice}
                SRText="Precio:"
              />
            </div>
          )}

          {taxesConfiguration?.usePriceWithTaxes && (
            <span className={styles.note}>{taxesConfiguration.taxesLabel}</span>
          )}
        </div>

        {outOfStock && <UIBadge>Agotado</UIBadge>}
        {hasDiscount && !outOfStock && (
          <p className={styles.savings}>Ahorras {savedAmount}</p>
        )}
      </section>
    </UIProductCard>
  )
}

export default memo(StoreProductCard)
