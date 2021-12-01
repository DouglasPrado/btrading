import { SiteLayout } from '@/components/Layouts'

export default function Index() {
  return (
    <SiteLayout fullTitle='Arbitragem | BTrading' withHeader withFooter animate>
      <div className="min-h-full">
        <div className="py-10">
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0">
                <h1>Perfil</h1>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </SiteLayout>
  )
}
