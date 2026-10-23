import type { SectionOverride } from 'src/typings/overrides'

import StoreProductCard from '../product/StoreProductCard'

const override: SectionOverride = {
  section: 'ProductGallery',
  components: {
    __experimentalProductCard: { Component: StoreProductCard },
  },
}

export { override }
