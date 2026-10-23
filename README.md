# FastStore Demo · Regionalizador y multimoneda

Tienda B2C de demostración sobre **VTEX FastStore v4** (Next.js + React + TypeScript + GraphQL), construida a partir del starter oficial [`vtex-sites/starter.store`](https://github.com/vtex-sites/starter.store) y conectada a la cuenta demo pública de VTEX.

Muestra las piezas típicas de un proyecto FastStore real: tema con design tokens en Sass, overrides de componentes nativos y lógica de sesión de VTEX.

## Qué tiene de custom

| Funcionalidad | Archivos | Cómo funciona |
|---|---|---|
| **Tema de marca** | `src/themes/custom-theme.scss` | Design tokens `--fs-*` (colores, radios, barra superior) dentro de `.theme`. |
| **ProductCard custom** | `src/components/product/StoreProductCard.tsx` · `src/components/overrides/ProductShelf.tsx` · `ProductGallery.tsx` | Override de `__experimentalProductCard` en vitrinas y PLP: badge de descuento (-X %), texto "Ahorras …" y precios en la moneda elegida. |
| **Regionalizador** | `src/components/region/RegionQuickPicker.tsx` | Selector de ciudad que fija el código postal con `useRegion` de FastStore. VTEX valida la sesión y precios y disponibilidad se resuelven para esa región. Se sincroniza con el `RegionBar` nativo. |
| **Multimoneda** | `src/components/currency/displayCurrency.ts` · `CurrencySwitcher.tsx` | Selector USD / BRL / COP / MXN que convierte los precios *mostrados* desde la moneda de la sesión con tasas de referencia. Se guarda por visitante. |
| **Navbar** | `src/components/overrides/Navbar.tsx` · `src/components/toolbar/` | Override de `NavbarButtons` que añade regionalizador y moneda junto a la búsqueda y el carrito (escritorio ≥ 1280 px). |
| **Tienda en español** | `src/i18n/es.ts` · `src/components/index.tsx` | El contenido del Headless CMS de la cuenta demo está en inglés. Cada sección se registra envuelta en `inSpanish()`, que traduce sus props con un diccionario antes de renderizar la sección nativa. También fija las opciones de orden y corrige las vitrinas de la home (el contenido demo trae `after: 1` y las deja vacías). |

### Qué queda en otro idioma

Viene del **catálogo de VTEX**, no del CMS ni del código: nombres y descripciones de productos, categorías ("Headphones"), filtros ("Preço", "Marca") y textos de envío ("Entrega padrão", "Up to 3 business days"). En un proyecto real se traducen en el catálogo de VTEX o con un binding por idioma. Algunos textos de accesibilidad del PDP también vienen fijos en `@faststore/ui`.

### Sobre la multimoneda

En VTEX, la multimoneda real se configura con **un binding / canal de venta por moneda**. FastStore v4 lo soporta con `localization.bindings` en `discovery.config.js` y el `LocalizationSelector` nativo. La cuenta demo solo tiene un binding, así que esta demo convierte únicamente los **precios que se muestran**, y el checkout sigue cobrando en la moneda de la sesión (lo indica el tooltip del selector). En un proyecto real, el selector cambiaría el binding y la sesión en vez de convertir en el cliente.

## Requisitos

- Node.js ≥ 20
- Yarn 1.x

## Uso local

```bash
CYPRESS_INSTALL_BINARY=0 yarn install --frozen-lockfile --ignore-scripts
yarn dev
```

Abrir http://localhost:3000. Páginas útiles para probar: `/` (vitrinas) y `/headphones` (PLP).

> Se instala con `--ignore-scripts` para no ejecutar los `postinstall` de dependencias (cypress, sharp, protobufjs, @parcel/watcher). El starter trae avisos de `yarn audit` heredados de `@faststore/core`; es un proyecto de demostración local, no para producción.

## Estructura

```
src/
  themes/custom-theme.scss         # design tokens
  i18n/es.ts                       # diccionario y traducción de props del CMS
  components/
    index.tsx                      # registro de secciones envueltas en español
    overrides/                     # overrides de secciones nativas (Navbar, ProductShelf, ProductGallery)
    product/StoreProductCard.tsx   # tarjeta de producto custom
    region/RegionQuickPicker.tsx   # regionalizador
    currency/                      # moneda de visualización
    toolbar/                       # controles del navbar
```

`.faststore/` es generado por `@faststore/cli` (no se edita ni se versiona).
