import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'
import config from '@/payload.config'

// Force dynamic rendering - do not pre-render at build time
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch featured service pages
  const { docs: services } = await payload.find({
    collection: 'pages',
    where: {
      featured: {
        equals: true,
      },
    },
    limit: 3,
  })

  // Fetch site settings
  const settings = await payload.findGlobal({
    slug: 'site-settings',
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-amber-100 to-orange-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute transform rotate-12 right-10 top-20 text-9xl">⌨️</div>
          <div className="absolute transform -rotate-12 left-10 bottom-20 text-9xl">📝</div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Tervetuloa<br />
            <span className="text-amber-800">Kirjoituskonekauppaan</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Paikkaan, jossa perinteinen kirjoittaminen herää eloon!
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Olemme erikoistuneet kirjoituskoneiden huoltoon, myyntiin ja entisöintiin. 
            Meiltä löydät sekä huolella kunnostetut klassikot että asiantuntevan palvelun.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="#palvelut" 
              className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-900 transition-colors font-semibold text-lg shadow-lg"
            >
              Tutustu palveluihimme
            </a>
            <a 
              href="#yhteystiedot" 
              className="bg-white text-amber-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg border-2 border-amber-800"
            >
              Ota yhteyttä
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="palvelut" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            Palvelumme
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Kirjoituskonekauppa, Pärnänen & Pojat tarjoaa asiantuntevaa palvelua kaikenlaisiin kirjoituskoneisiin
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.length > 0 ? (
              services.map((service: any) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 hover:border-amber-400"
                >
                  <div className="text-6xl mb-6">{service.icon || '📄'}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.excerpt}
                  </p>
                  <div className="text-amber-800 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                    Lue lisää →
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-12 bg-amber-50 rounded-xl">
                <p className="text-gray-600 text-lg mb-4">Ei palveluja saatavilla.</p>
                <p className="text-gray-500">Lisää palveluja hallintapaneelista!</p>
                <Link 
                  href={payloadConfig.routes.admin}
                  className="inline-block mt-6 bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors"
                >
                  Siirry hallintapaneeliin
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
            Perinteitä ja laatua jo vuodesta 1957
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              <strong className="text-amber-900">Kirjoituskonekauppa, Pärnänen & Pojat</strong> sai alkunsa vuonna 1957, 
              kun Arvo Pärnänen perusti pienen verstaan vanhojen kirjoituskoneiden huoltamiseen.
            </p>
            <p>
              Vuosien saatossa yritys kasvoi ja siirtyi seuraaville sukupolville, mutta rakkaus 
              mekaanisiin kirjoituskoneisiin on pysynyt muuttumattomana. Nykyään jatkamme perinnettä, 
              tarjoten asiakkaillemme laadukkaita koneita ja ensiluokkaista palvelua.
            </p>
            <p className="text-xl font-semibold text-amber-900 text-center py-6">
              Kirjoituskoneet eivät ole vain menneisyyden muisto – ne ovat ajattomia työkaluja, 
              jotka tuovat kirjoittamiseen ainutlaatuista tuntumaa ja tyyliä.
            </p>
            <p className="text-center text-gray-600">
              Pärnänen & Pojat on perheyritys, jossa käsityö ja asiantuntemus kulkevat sukupolvelta toiselle.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="yhteystiedot" className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-800 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Tule käymään tai ota yhteyttä
          </h2>
          <p className="text-amber-100 text-center mb-12 text-lg">
            Autamme mielellämme kaikissa kirjoituskoneasioissa!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-amber-900/30 rounded-xl p-8 backdrop-blur">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="font-semibold text-xl mb-3">Osoite</h3>
              <p className="text-amber-100">
                Jääkärinkatu 9<br />
                00150 Helsinki
              </p>
            </div>
            <div className="text-center bg-amber-900/30 rounded-xl p-8 backdrop-blur">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="font-semibold text-xl mb-3">Puhelin</h3>
              <a 
                href="tel:09323431267" 
                className="text-amber-100 hover:text-white transition-colors text-lg"
              >
                09 323431267
              </a>
            </div>
            <div className="text-center bg-amber-900/30 rounded-xl p-8 backdrop-blur">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="font-semibold text-xl mb-3">Sähköposti</h3>
              <a 
                href="mailto:info@kirjoituskonekauppa.fi" 
                className="text-amber-100 hover:text-white transition-colors break-all"
              >
                info@kirjoituskonekauppa.fi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Kirjoituskonekauppa, Pärnänen & Pojat. Kaikki oikeudet pidätetään.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Perinteitä ja laatua jo vuodesta 1957
          </p>
        </div>
      </footer>
    </div>
  )
}
