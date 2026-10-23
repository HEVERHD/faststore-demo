/**
 * Traducción al español del contenido que llega del Headless CMS.
 *
 * El contenido de la cuenta demo está en inglés y no se puede editar sin
 * acceso al admin de VTEX, así que las secciones se envuelven (ver
 * `src/components/index.tsx`) y sus props pasan por `translateProps`.
 */

/** Textos exactos del CMS → español */
const ES: Record<string, string> = {
  // Barra de aviso
  'Buy now': 'Comprar ahora',
  'Get 10% off today: NEW15': 'Obtén 10% de descuento hoy: NEW15',

  // Navbar y búsqueda
  'Store logo': 'Logo de la tienda',
  'Store Logo': 'Logo de la tienda',
  'Go To Home': 'Ir al inicio',
  'Go to Home': 'Ir al inicio',
  'Shopping Cart': 'Carrito de compras',
  Electronics: 'Electrónica',
  Headphones: 'Audífonos',
  'Set Your Location': 'Elige tu ubicación',
  'Set your location': 'Elige tu ubicación',
  'Open localization selector': 'Abrir selector de idioma y moneda',
  'Select language and currency': 'Elige idioma y moneda',
  Save: 'Guardar',
  'Changing the language or currency may affect prices, promotions and availability.':
    'Cambiar el idioma o la moneda puede afectar precios, promociones y disponibilidad.',
  Currency: 'Moneda',
  Language: 'Idioma',
  'Invalid redirect URL. Please try again.': 'URL de redirección inválida. Inténtalo de nuevo.',
  'An error occurred. Please try again.': 'Ocurrió un error. Inténtalo de nuevo.',
  'No currencies available for this language.': 'No hay monedas disponibles para este idioma.',
  'Unable to save configuration. No matching store found.':
    'No se pudo guardar la configuración. No se encontró una tienda compatible.',
  'Search everything in the store': 'Busca en toda la tienda',
  'Loading...': 'Cargando...',
  'Top search': 'Más buscados',
  History: 'Historial',
  Price: 'Precio',
  Availability: 'Disponibilidad',
  Quantity: 'Cantidad',
  'Select multiple': 'Seleccionar varios',
  'Out of stock': 'Agotado',
  'Invalid quantity!': '¡Cantidad inválida!',
  "The quantity you entered is outside the range of '%{min}' to '%{max}'. The quantity was set to '%{quantity}'.":
    "La cantidad está fuera del rango de '%{min}' a '%{max}'. Se ajustó a '%{quantity}'.",
  'Submit Search': 'Buscar',
  'Collapse search bar': 'Cerrar búsqueda',
  'Sign In': 'Ingresar',
  'My Account': 'Mi cuenta',

  // Región
  'Map Pin icon': 'Ícono de ubicación',
  'Caret Right icon': 'Ícono de flecha',
  Edit: 'Editar',
  'Postal Code': 'Código postal',
  'You entered an invalid Postal Code': 'El código postal no es válido',
  'Prices, offers and availability may vary according to your location.':
    'Los precios, ofertas y disponibilidad pueden variar según tu ubicación.',
  'Arrow Square Out icon': 'Ícono de enlace externo',
  "I don't know my Postal Code": 'No sé mi código postal',
  'Close Region Modal': 'Cerrar selector de ubicación',

  // Carrito
  'Arrow Right icon': 'Ícono de flecha derecha',
  'Free shipping starts at $300': 'Envío gratis desde $300',
  'Your Cart': 'Tu carrito',
  'Your Cart is empty!': '¡Tu carrito está vacío!',
  'Start Shopping': 'Empezar a comprar',
  Checkout: 'Finalizar compra',
  'Tax included': 'Impuestos incluidos',

  // Footer
  'FastStore Starter': 'FastStore Demo',
  'About Us': 'Quiénes somos',
  'Our Blog': 'Nuestro blog',
  Stores: 'Tiendas',
  'Work With Us': 'Trabaja con nosotros',
  'Our company': 'Nuestra empresa',
  'Returns and Exchanges': 'Cambios y devoluciones',
  'Product Recall': 'Retiro de productos',
  'Gift Cards': 'Tarjetas de regalo',
  'Orders and Purchases': 'Pedidos y compras',
  'Support Center': 'Centro de ayuda',
  'Support & Services': 'Soporte y servicios',
  'Contact Us': 'Contáctanos',
  'Affiliate Program': 'Programa de afiliados',
  Partnerships: 'Alianzas',
  'Follow Us': 'Síguenos',
  'Payment Methods': 'Medios de pago',
  'This website uses VTEX technology.  In-store price may vary. Prices and offers are subject to change. 2023 Brandless Store. All rights reserved. Store is a trademark of Store and its affiliated companies.  Mount St, 000, New York / NY - 00000.':
    'Este sitio usa tecnología VTEX. El precio en tienda puede variar. Precios y ofertas sujetos a cambios. Tienda de demostración con fines de portafolio.',

  // Home
  'See all': 'Ver todo',
  'technology banner': 'Banner de tecnología',
  'New Products Available': 'Nuevos productos disponibles',
  'See ': 'Ver ',
  'At FastStore you can shop the best tech of 2023. Enjoy and get 10% off on your first purchase!':
    'En FastStore encuentras la mejor tecnología. ¡Aprovecha 10% de descuento en tu primera compra!',
  'Buy online': 'Compra en línea',
  'Get Free Shipping': 'Con envío gratis',
  'Free return': 'Devolución gratis',
  '30 days to return': '30 días para devolver',
  'Gift cards': 'Tarjetas de regalo',
  'Store Front': 'Fachada de tienda',
  'Physical Stores': 'Tiendas físicas',
  '+40 Stores in Brazil': '+40 tiendas en Brasil',
  'Shield Check': 'Escudo de seguridad',
  'Trusted by Safecon': 'Avalado por Safecon',
  'Safety guaranteed': 'Seguridad garantizada',
  'Most Wanted': 'Los más buscados',
  'Check it out': 'Descúbrelo',
  'Receive our news and promotions in advance. Enjoy and get 10% off your first purchase.':
    'Recibe nuestras novedades y promociones antes que nadie. Aprovecha 10% de descuento en tu primera compra.',
  'Enjoy and get 10% off on your first purchase!!': '¡Aprovecha 10% de descuento en tu primera compra!',
  'Check it out now!': '¡Descúbrelo ahora!',
  'Just Arrived': 'Recién llegados',
  'Deals & Promotions': 'Ofertas y promociones',
  'Get News and Special Offers!': '¡Recibe novedades y ofertas especiales!',
  'Receive our news and promotions in advance. Enjoy and get 10% off your first purchase. For more information click here.':
    'Recibe nuestras novedades y promociones antes que nadie. Aprovecha 10% de descuento en tu primera compra.',
  'By subscribing to our newsletter you agree to to our ': 'Al suscribirte aceptas nuestra ',
  'By subscribing to our newsletter you agree to our ': 'Al suscribirte aceptas nuestra ',
  'Privacy Policy': 'Política de privacidad',
  'Your Name': 'Tu nombre',
  'Your Email': 'Tu correo',
  'Success!': '¡Listo!',
  'Hooray!': '¡Genial!',
  'Thank for your subscription.': 'Gracias por suscribirte.',
  'Thanks for your subscription.': 'Gracias por suscribirte.',
  'Oops.': 'Ups.',
  'Something went wrong. Please Try again.': 'Algo salió mal. Inténtalo de nuevo.',
  Subscribe: 'Suscribirme',

  // PLP y búsqueda
  'Go to Homepage.': 'Ir al inicio.',
  '20% off on first purchase': '20% de descuento en tu primera compra',
  'All the amazing products from the brands we partner with.':
    'Los mejores productos de las marcas con las que trabajamos.',
  Filters: 'Filtros',
  'Open Filters': 'Abrir filtros',
  Apply: 'Aplicar',
  'Clear All': 'Limpiar todo',
  'Nothing matches with your search': 'No encontramos resultados para tu búsqueda',
  'Browse Offers': 'Ver ofertas',
  'Showing results for:': 'Mostrando resultados para:',
  Results: 'resultados',
  'Load more products': 'Cargar más productos',
  'Arrow Left icon': 'Ícono de flecha izquierda',
  'Previous Page': 'Página anterior',
  'You might also like': 'También te puede gustar',
  'All Products result!!': 'Todos los productos',

  // PDP
  'House Icon - Back to Homepage!': 'Volver al inicio',
  'Add to Cart': 'Agregar al carrito',
  Shipping: 'Envío',
  'Not Available': 'No disponible',
  Description: 'Descripción',
  ' Shop now': ' Comprar ahora',
  'Discover cutting-edge tech, advanced features, and a seamless user experience. ':
    'Descubre tecnología de punta, funciones avanzadas y una experiencia de compra sin fricciones.',

  // 404
  'Not Found: 404!': '¡No encontrado: 404!',
  'This app could not find url': 'No encontramos la página',
}

/** Claves cuyo valor es un identificador (ícono, URL, variante…) y nunca se traduce */
const IDENTIFIER_KEYS = new Set([
  'icon',
  'url',
  'href',
  'src',
  'link',
  'slug',
  'sort',
  'type',
  'name',
  'value',
  'variant',
  'colorVariant',
  'layout',
  'target',
  'rel',
  'imagePosition',
  'size',
  'initiallyExpanded',
  '$componentKey',
])

function translateRichText(json: string): string {
  try {
    const tree = JSON.parse(json)
    const walk = (node: any) => {
      if (typeof node?.text === 'string') node.text = ES[node.text] ?? node.text
      node?.children?.forEach(walk)
    }
    walk(tree.root)
    return JSON.stringify(tree)
  } catch {
    return json
  }
}

function translateLink(link: Record<string, unknown>) {
  const out = { ...link }
  if (typeof out.text === 'string') out.text = translateProps(out.text)
  if (typeof out.title === 'string') out.title = translateProps(out.title)
  return out
}

/** Devuelve una copia de las props con los textos conocidos en español */
export function translateProps<T>(value: T, key = ''): T {
  if (IDENTIFIER_KEYS.has(key)) return value

  if (typeof value === 'string') {
    if (value.startsWith('{"root"')) return translateRichText(value) as T
    return (ES[value] ?? value) as T
  }

  if (Array.isArray(value)) {
    return value.map((item) => translateProps(item, key)) as T
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [
        k,
        // En `link` solo `text` y `title` son visibles; el resto es URL o target
        k === 'link' && v && typeof v === 'object' ? translateLink(v) : translateProps(v, k),
      ])
    ) as T
  }

  return value
}

/** Opciones del selector de orden (no vienen del CMS) */
export const SORT_ES = {
  label: 'Ordenar por',
  options: {
    price_desc: 'Precio: mayor a menor',
    price_asc: 'Precio: menor a mayor',
    orders_desc: 'Más vendidos',
    name_asc: 'Nombre: A-Z',
    name_desc: 'Nombre: Z-A',
    release_desc: 'Más recientes',
    discount_desc: 'Mayor descuento',
    score_desc: 'Relevancia',
  },
}

/**
 * Los incentivos del footer parten la frase en dos líneas ("Free" / "Shipping"),
 * así que no se pueden traducir palabra por palabra.
 */
export const FOOTER_INCENTIVES_ES = [
  ['Envío', 'gratis'],
  ['Devolución', 'gratis'],
  ['Retiro', 'en tienda'],
  ['Respaldado', 'por Safecon'],
] as const
