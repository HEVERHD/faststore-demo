import type { SectionOverride } from 'src/typings/overrides'

import StoreProductCard from '../product/StoreProductCard'

const override: SectionOverride = {
  section: 'ProductShelf',
  components: {
    __experimentalProductCard: { Component: StoreProductCard },
  },
}

export { override }
