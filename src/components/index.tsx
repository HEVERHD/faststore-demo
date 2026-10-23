import type { ComponentType } from 'react'

import dynamic from 'next/dynamic'

import { OverriddenDefaultAlert } from 'src/components/sections/Alert/OverriddenDefaultAlert'
import BannerNewsletter from 'src/components/sections/BannerNewsletter/BannerNewsletter'
import { OverriddenDefaultBreadcrumb } from 'src/components/sections/Breadcrumb/OverriddenDefaultBreadcrumb'
import { OverriddenDefaultCrossSellingShelf } from 'src/components/sections/CrossSellingShelf/OverriddenDefaultCrossSellingShelf'
import { OverriddenDefaultHero } from 'src/components/sections/Hero/OverriddenDefaultHero'
import Incentives from 'src/components/sections/Incentives'
import { OverriddenDefaultNavbar } from 'src/components/sections/Navbar/OverriddenDefaultNavbar'
import { OverriddenDefaultProductDetails } from 'src/components/sections/ProductDetails/OverriddenDefaultProductDetails'
import { OverriddenDefaultProductGallery } from 'src/components/sections/ProductGallery/OverriddenDefaultProductGallery'
import { OverriddenDefaultProductShelf } from 'src/components/sections/ProductShelf/OverriddenDefaultProductShelf'
import { OverriddenDefaultRegionBar } from 'src/components/sections/RegionBar/OverriddenDefaultRegionBar'

import { FOOTER_INCENTIVES_ES, SORT_ES, translateProps } from '../i18n/es'

// Mismas secciones que carga el core sin SSR, cargadas igual aquí
const CartSidebar = dynamic(() => import('src/components/cart/CartSidebar'), { ssr: false })
const RegionModal = dynamic(() => import('src/components/region/RegionModal'), { ssr: false })
const Footer = dynamic(() => import('src/components/sections/Footer'), { ssr: false })
const ProductTiles = dynamic(() => import('src/components/sections/ProductTiles'), { ssr: false })
const BannerText = dynamic(
  () =>
    import('src/components/sections/BannerText/OverriddenDefaultBannerText').then(
      (mod) => mod.OverriddenDefaultBannerText
    ),
  { ssr: false }
)
const Newsletter = dynamic(
  () =>
    import('src/components/sections/Newsletter/OverriddenDefaultNewsletter').then(
      (mod) => mod.OverriddenDefaultNewsletter
    ),
  { ssr: false }
)
const EmptyState = dynamic(
  () =>
    import('src/components/sections/EmptyState/OverriddenDefaultEmptyState').then(
      (mod) => mod.OverriddenDefaultEmptyState
    ),
  { ssr: false }
)

type Props = Record<string, any>

/** Envuelve una sección para que reciba sus props del CMS ya en español */
function inSpanish(Section: ComponentType<any>, patch?: (props: Props) => Props) {
  function SpanishSection(props: Props) {
    const translated = translateProps(props)
    return <Section {...(patch ? patch(translated) : translated)} />
  }

  SpanishSection.displayName = `InSpanish(${Section.displayName ?? Section.name ?? 'Section'})`
  return SpanishSection
}

const fromFirstProduct = (props: Props) => ({ ...props, after: 0 })

/**
 * Registro de secciones: la clave es el nombre de la sección en el CMS y
 * reemplaza al componente nativo en todas las páginas.
 */
const SECTIONS: Record<string, ComponentType<any>> = {
  Alert: inSpanish(OverriddenDefaultAlert),
  Navbar: inSpanish(OverriddenDefaultNavbar),
  RegionBar: inSpanish(OverriddenDefaultRegionBar),
  RegionModal: inSpanish(RegionModal),
  CartSidebar: inSpanish(CartSidebar),
  Footer: inSpanish(Footer, (props) => ({
    ...props,
    incentives: props.incentives?.map((incentive: Props, i: number) =>
      FOOTER_INCENTIVES_ES[i]
        ? {
            ...incentive,
            firstLineText: FOOTER_INCENTIVES_ES[i][0],
            secondLineText: FOOTER_INCENTIVES_ES[i][1],
          }
        : incentive
    ),
  })),
  Hero: inSpanish(OverriddenDefaultHero),
  Incentives: inSpanish(Incentives),
  BannerText: inSpanish(BannerText),
  BannerNewsletter: inSpanish(BannerNewsletter),
  Newsletter: inSpanish(Newsletter),
  // El contenido de la cuenta demo trae `after: 1`, que deja las vitrinas vacías
  ProductShelf: inSpanish(OverriddenDefaultProductShelf, fromFirstProduct),
  ProductTiles: inSpanish(ProductTiles, fromFirstProduct),
  CrossSellingShelf: inSpanish(OverriddenDefaultCrossSellingShelf),
  Breadcrumb: inSpanish(OverriddenDefaultBreadcrumb),
  ProductGallery: inSpanish(OverriddenDefaultProductGallery, (props) => ({
    ...props,
    sortBySelector: { ...SORT_ES, ...props.sortBySelector, ...SORT_ES },
  })),
  ProductDetails: inSpanish(OverriddenDefaultProductDetails, (props) => ({
    ...props,
    shippingSimulator: { shippingOptionsTableTitle: 'Opciones de envío', ...props.shippingSimulator },
  })),
  EmptyState: inSpanish(EmptyState),
}

export default SECTIONS
