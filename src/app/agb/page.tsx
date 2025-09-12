import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "AGB und Geschäftsbedingungen von Sham Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">Wichtiger Hinweis</h2>
              <p className="text-yellow-700">
                <strong>Diese AGB sind für zukünftige gewerbliche Tätigkeiten vorbereitet.</strong><br />
                Aktuell werden keine gewerblichen Dienstleistungen angeboten. Diese Website dient als Portfolio 
                und Präsentation. Sollte in Zukunft eine gewerbliche Tätigkeit aufgenommen werden, werden diese 
                AGB entsprechend aktiviert und angepasst.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 1 Geltungsbereich</h2>
            <p className="text-gray-600 mb-4">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Sham Studio (Hamid Sham) 
              und seinen Kunden über die Erbringung von Webdesign- und Webentwicklungsdienstleistungen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 2 Vertragspartner</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Sham Studio</strong><br />
                Hamid Sham<br />
                Lindenweg 87<br />
                30966 Hemmingen<br />
                Deutschland<br /><br />
                E-Mail: hamidsham.studio@gmail.com<br />
                Telefon: 017632878739
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 3 Leistungsumfang</h2>
            <p className="text-gray-600 mb-4">
              Sham Studio erbringt folgende Dienstleistungen:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
              <li>Webdesign und -entwicklung</li>
              <li>Responsive Website-Erstellung</li>
              <li>Portfolio-Websites</li>
              <li>Landing Pages</li>
              <li>Business-Websites</li>
              <li>SEO-Optimierung</li>
              <li>Performance-Optimierung</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 4 Vertragsschluss</h2>
            <p className="text-gray-600 mb-4">
              Verträge kommen durch schriftliche Angebote und deren Annahme zustande. Mündliche Nebenabreden bedürfen 
              der schriftlichen Bestätigung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 5 Preise und Zahlungsbedingungen</h2>
            <p className="text-gray-600 mb-4">
              Die Preise ergeben sich aus dem jeweiligen Angebot. Alle Preise verstehen sich zzgl. der gesetzlichen 
              Mehrwertsteuer. Die Zahlung erfolgt nach Rechnungsstellung innerhalb von 14 Tagen auf das angegebene 
              Bankkonto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 6 Leistungserbringung</h2>
            <p className="text-gray-600 mb-4">
              Sham Studio verpflichtet sich, die vereinbarten Leistungen sorgfältig und fachkundig zu erbringen. 
              Termine sind nur dann verbindlich, wenn sie schriftlich bestätigt wurden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 7 Mitwirkungspflichten des Kunden</h2>
            <p className="text-gray-600 mb-4">
              Der Kunde verpflichtet sich, alle für die Leistungserbringung erforderlichen Informationen, 
              Unterlagen und Materialien rechtzeitig zur Verfügung zu stellen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 8 Urheberrecht</h2>
            <p className="text-gray-600 mb-4">
              Sham Studio behält sich das Urheberrecht an den erstellten Werken vor, soweit nicht anders vereinbart. 
              Nach vollständiger Bezahlung erhält der Kunde die Nutzungsrechte an den erstellten Werken.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 9 Haftung</h2>
            <p className="text-gray-600 mb-4">
              Sham Studio haftet nur für Vorsatz und grobe Fahrlässigkeit, soweit nicht zwingende gesetzliche 
              Haftungsbestimmungen entgegenstehen. Die Haftung ist auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 10 Schlussbestimmungen</h2>
            <p className="text-gray-600 mb-4">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen 
              unberührt. Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
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
