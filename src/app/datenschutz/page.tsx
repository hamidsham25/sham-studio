import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://sham-studio.de";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung – Sham Studio, Webdesign & Entwicklung in Hannover.",
  openGraph: {
    url: `${SITE_URL}/datenschutz`,
    title: "Datenschutz | Sham Studio",
    description: "Datenschutzerklärung – Sham Studio",
  },
  alternates: { canonical: `${SITE_URL}/datenschutz` },
};

export default function DatenschutzPage() {
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
              href="/impressum"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Impressum
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
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-4 text-zinc-500 text-sm">
          Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO und BDSG.
        </p>

        <div className="mt-10 space-y-10 text-zinc-400 leading-relaxed">
          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              1. Verantwortlicher
            </h2>
            <p className="mt-2">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              Hamid Sham
              <br />
              Sham Studio
              <br />
              Walsroder Straße 237
              <br />
              30855 Langenhagen
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@sham-studio.de"
                className="text-cyan-400 hover:underline"
              >
                info@sham-studio.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              2. Allgemeines
            </h2>
            <p className="mt-2">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten im Einklang mit der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG). Diese Seite informiert Sie über Art, Umfang und Zweck der Verarbeitung sowie über Ihre Rechte.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              3. Hosting und Domain
            </h2>
            <p className="mt-2">
              <strong className="text-zinc-300">Hosting:</strong> Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA („Vercel“) gehostet. Beim Aufruf der Seite werden Zugriffsdaten (u. a. IP-Adresse, Datum und Uhrzeit, Browsertyp, aufgerufene Seiten) auf Servern von Vercel verarbeitet. Vercel verarbeitet Daten im Auftrag (Auftragsverarbeitung). Es wurden Verträge zur Auftragsverarbeitung sowie Standardvertragsklauseln der EU-Kommission geschlossen, um ein angemessenes Schutzniveau bei Übermittlung in die USA zu gewährleisten. Weitere Informationen:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Vercel Datenschutz
              </a>
              .
            </p>
            <p className="mt-3">
              <strong className="text-zinc-300">Domain:</strong> Die Domain sham-studio.de wird über IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland, registriert und verwaltet. Dabei können bei der Domainverwaltung anfallende Daten (Registrant, technische Kontaktdaten) bei IONOS verarbeitet werden.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              4. Kontaktformular und E-Mail-Versand (EmailJS)
            </h2>
            <p className="mt-2">
              Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail-Adresse, Betreff, Nachricht) zum Versand Ihrer Anfrage an uns genutzt. Der Versand erfolgt über den Dienst EmailJS (EmailJS.com, Betreiber: EmailJS, USA). Dabei werden die von Ihnen eingegebenen Daten an die Server von EmailJS übermittelt, um die E-Mail an uns zu übermitteln. EmailJS verarbeitet die Daten ausschließlich zum Zweck des E-Mail-Versands. Es können Standardvertragsklauseln zum Schutz bei Übermittlung in Drittländer zum Einsatz kommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen). Die Daten werden bei uns gelöscht, sobald sie für die Erreichung des Zwecks nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
            <p className="mt-3">
              Eine Kontaktaufnahme per E-Mail (z. B. info@sham-studio.de) wird ebenfalls zur Bearbeitung Ihrer Anfrage verarbeitet und gespeichert.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              5. Vercel Analytics und Vercel Speed Insights
            </h2>
            <p className="mt-2">
              Auf dieser Website werden <strong className="text-zinc-300">Vercel Analytics</strong> und <strong className="text-zinc-300">Vercel Speed Insights</strong> eingesetzt (Anbieter: Vercel Inc., USA). Vercel Analytics erhebt in anonymisierter Form Informationen über die Nutzung der Website (z. B. aufgerufene Seiten, Herkunft, Gerätetyp), um die Nutzung der Website auszuwerten. Vercel Speed Insights erhebt Leistungsdaten (z. B. Ladezeiten, Core Web Vitals), um die Performance der Website zu messen und zu verbessern. Es werden keine personenbezogenen Daten im engeren Sinne gespeichert; eine dauerhafte Identifizierung Ihres Geräts erfolgt nicht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Analyse und Optimierung des Angebots). Die Verarbeitung erfolgt auf Grundlage von Auftragsverarbeitung und geeigneten Garantien (Standardvertragsklauseln) bei Übermittlung in die USA.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              6. Google Analytics
            </h2>
            <p className="mt-2">
              <strong className="text-zinc-300">Google Analytics wird derzeit nicht eingesetzt.</strong> Geplant ist der spätere Einsatz von Google Analytics (Webanalysedienst der Google Ireland Limited bzw. Google LLC). Sobald Google Analytics eingebunden wird, werden wir diese Datenschutzerklärung entsprechend ergänzen und Sie u. a. über verwendete Cookies, IP-Anonymisierung, Zweck, Rechtsgrundlage sowie Ihre Widerspruchs- und Opt-Out-Möglichkeiten informieren.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              7. Cookies
            </h2>
            <p className="mt-2">
              Diese Website setzt derzeit nur technisch notwendige Cookies ein (soweit für die Funktion der Website erforderlich). Sollte künftig Google Analytics zum Einsatz kommen, werden dabei weitere Cookies verwendet und dieser Abschnitt sowie Abschnitt 6 entsprechend ergänzt. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und diese einzeln ablehnen oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              8. Übermittlung in Drittländer
            </h2>
            <p className="mt-2">
              Soweit wir Daten in Ländern außerhalb des Europäischen Wirtschaftsraums (EWR) verarbeiten oder verarbeiten lassen (derzeit USA: Vercel, EmailJS; bei künftigem Einsatz von Google Analytics auch Google), erfolgt dies nur auf Grundlage geeigneter Garantien (z. B. von der EU-Kommission beschlossene Standardvertragsklauseln, Angemessenheitsbeschluss oder Zertifizierungen) sowie ggf. ergänzender Maßnahmen. Auf Wunsch können wir Ihnen eine Kopie der Garantien zur Verfügung stellen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              9. Ihre Rechte
            </h2>
            <p className="mt-2">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-zinc-400">
              <li><strong className="text-zinc-300">Auskunft</strong> (Art. 15 DSGVO)</li>
              <li><strong className="text-zinc-300">Berichtigung</strong> (Art. 16 DSGVO)</li>
              <li><strong className="text-zinc-300">Löschung</strong> (Art. 17 DSGVO)</li>
              <li><strong className="text-zinc-300">Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
              <li><strong className="text-zinc-300">Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong className="text-zinc-300">Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li><strong className="text-zinc-300">Widerruf</strong> einer Einwilligung (Art. 7 Abs. 3 DSGVO), sofern die Verarbeitung auf Einwilligung beruht</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich an die unter Abschnitt 1 genannte E-Mail-Adresse. Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (z. B. die zuständige Aufsichtsbehörde Ihres Bundeslandes).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              10. SSL-/TLS-Verschlüsselung
            </h2>
            <p className="mt-2">
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers „https://“ anzeigt und ein Schloss-Symbol in der Browserzeile erscheint.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              11. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="mt-2">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslage oder an Änderungen der Website bzw. der von uns eingesetzten Dienste anzugleichen. Die jeweils aktuelle Version finden Sie auf dieser Seite.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
