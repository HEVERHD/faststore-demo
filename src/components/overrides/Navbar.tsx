import type { SectionOverride } from 'src/typings/overrides'

import StoreNavbarButtons from '../toolbar/StoreNavbarButtons'

const override: SectionOverride = {
  section: 'Navbar',
  components: {
    NavbarButtons: { Component: StoreNavbarButtons },
  },
}

export { override }
