import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://sham-studio.de";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben – Sham Studio, Webdesign & Entwicklung in Hannover.",
  openGraph: {
    url: `${SITE_URL}/impressum`,
    title: "Impressum | Sham Studio",
    description: "Impressum und rechtliche Angaben – Sham Studio",
  },
  alternates: { canonical: `${SITE_URL}/impressum` },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 md:px-8">
          <Link
            href="/"
            className="font-display text-lg font-semibold text-white hover:text-cyan-400 transition-colors"
          >
            Sham Studio
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/datenschutz"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              ← Zurück
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16 md:px-8">
        <p className="mb-8 text-sm text-cyan-400/90">
          Vorläufiges Impressum – Angaben werden bei Bedarf ergänzt.
        </p>
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Impressum
        </h1>
        <p className="mt-4 text-zinc-500 text-sm">
          Angaben gemäß § 5 TMG (Telemediengesetz).
        </p>

        <div className="mt-10 space-y-10 text-zinc-400 leading-relaxed">
          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              Anbieter
            </h2>
            <p className="mt-2">
              Sham Studio
              <br />
              [Straße, Hausnummer – wird ergänzt]
              <br />
              [PLZ Ort – wird ergänzt]
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              Kontakt
            </h2>
            <p className="mt-2">
              E-Mail:{" "}
              <a
                href="mailto:kontakt@shamstudio.de"
                className="text-cyan-400 hover:underline"
              >
                kontakt@shamstudio.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="mt-2">
              Sham Studio
              <br />
              [Anschrift – wird ergänzt]
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              Umsatzsteuer-ID
            </h2>
            <p className="mt-2">
              [Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG, sofern
              vorhanden – wird ergänzt]
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              EU-Streitschlichtung
            </h2>
            <p className="mt-2">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an
              Streitschlichtungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              Haftung für Inhalte
            </h2>
            <p className="mt-2">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte
              fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben unberührt.
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              Haftung für Links
            </h2>
            <p className="mt-2">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
              konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
              Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              Urheberrecht
            </h2>
            <p className="mt-2">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
              dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
