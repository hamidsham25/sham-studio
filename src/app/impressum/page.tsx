import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Hinweise von Sham Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Hamid Sham</strong><br />
                Lindenweg 87<br />
                30966 Hemmingen<br />
                Deutschland
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kontakt</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>E-Mail:</strong> hamidsham.studio@gmail.com<br />
                <strong>Telefon:</strong> 017632878739
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rechtlicher Hinweis</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <p className="text-gray-700">
                <strong>Wichtiger Hinweis:</strong> Diese Website wird derzeit als private Portfolio-Website betrieben. 
                Es werden keine gewerblichen Dienstleistungen angeboten oder Aufträge angenommen. 
                Sollte in Zukunft eine gewerbliche Tätigkeit aufgenommen werden, wird dieses Impressum entsprechend aktualisiert.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                Hamid Sham<br />
                Lindenweg 87<br />
                30966 Hemmingen
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Haftungsausschluss</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Haftung für Inhalte</h3>
            <p className="text-gray-600 mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Haftung für Links</h3>
            <p className="text-gray-600 mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Urheberrecht</h3>
            <p className="text-gray-600 mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Streitschlichtung</h2>
            <p className="text-gray-600">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="text-gray-600 mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Stand: {new Date().toLocaleDateString('de-DE')}
          </p>
        </div>
      </div>
    </div>
  );
}
