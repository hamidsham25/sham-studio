import Link from "next/link";

export const metadata = {
  title: "Datenschutz | Sham Studio",
  description: "Datenschutzerklärung – Sham Studio",
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
        <p className="mb-8 text-sm text-cyan-400/90">
          Vorläufige Datenschutzerklärung – wird bei Bedarf ergänzt.
        </p>
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-4 text-zinc-500 text-sm">
          Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.
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
              Sham Studio
              <br />
              [Anschrift – wird ergänzt]
              <br />
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
              2. Allgemeines
            </h2>
            <p className="mt-2">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir
              verarbeiten personenbezogene Daten im Einklang mit der
              Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz
              (BDSG). Diese Seite informiert Sie über Art, Umfang und Zweck der
              Verarbeitung sowie über Ihre Rechte.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              3. Erhebung und Speicherung beim Website-Besuch
            </h2>
            <p className="mt-2">
              Beim Aufruf dieser Website werden durch Ihren Browser automatisch
              Informationen an unseren Server gesendet (u. a. IP-Adresse, Datum
              und Uhrzeit des Abrufs, Browsertyp, ggf. Referrer-URL). Diese
              Daten werden ausschließlich zur Gewährleistung eines
              störungsfreien Betriebs und zur Auswertung der Zugriffe in
              anonymisierter Form genutzt. Eine Zuordnung zu einer
              bestimmten Person ist nicht vorgesehen. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb
              der Website).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              4. Kontakt (E-Mail / Kontaktformular)
            </h2>
            <p className="mt-2">
              Wenn Sie uns per E-Mail oder über ein Kontaktformular
              kontaktieren, werden Ihre Angaben (z. B. Name, E-Mail-Adresse,
              Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet und
              gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an der Bearbeitung von Anfragen). Eine Weitergabe an
              Dritte erfolgt nicht. Die Daten werden gelöscht, sobald sie für
              die Erreichung des Zwecks nicht mehr erforderlich sind und keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              5. Cookies
            </h2>
            <p className="mt-2">
              Diese Website setzt derzeit keine Cookies ein. Sollten in Zukunft
              technisch notwendige oder optionale Cookies verwendet werden,
              wird diese Datenschutzerklärung entsprechend ergänzt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              6. Hosting / Server
            </h2>
            <p className="mt-2">
              Die Website wird bei einem Hosting-Anbieter betrieben. Dabei
              können Zugriffsdaten (s. Abschnitt 3) auf den Servern des
              Anbieters verarbeitet werden. Sofern der Anbieter außerhalb des
              EWR liegt, wird auf einen angemessenen Datenschutz (z. B.
              Standardvertragsklauseln) hingewiesen, sobald die konkreten
              Anbieterdaten ergänzt werden.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              7. Ihre Rechte
            </h2>
            <p className="mt-2">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
              betreffenden personenbezogenen Daten:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-zinc-400">
              <li>
                <strong className="text-zinc-300">Auskunft</strong> (Art. 15
                DSGVO)
              </li>
              <li>
                <strong className="text-zinc-300">Berichtigung</strong> (Art.
                16 DSGVO)
              </li>
              <li>
                <strong className="text-zinc-300">Löschung</strong> (Art. 17
                DSGVO)
              </li>
              <li>
                <strong className="text-zinc-300">Einschränkung der
                Verarbeitung</strong> (Art. 18 DSGVO)
              </li>
              <li>
                <strong className="text-zinc-300">Datenübertragbarkeit</strong>{" "}
                (Art. 20 DSGVO)
              </li>
              <li>
                <strong className="text-zinc-300">Widerspruch</strong> gegen die
                Verarbeitung (Art. 21 DSGVO)
              </li>
              <li>
                <strong className="text-zinc-300">Widerruf</strong> einer
                Einwilligung (Art. 7 Abs. 3 DSGVO) – sofern die Verarbeitung
                auf Einwilligung beruht
              </li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich an die unter Abschnitt
              1 genannte E-Mail-Adresse. Sie haben zudem das Recht, sich bei
              einer Datenschutz-Aufsichtsbehörde zu beschweren (z. B. im Land
              Ihres Wohnsitzes).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              8. SSL-/TLS-Verschlüsselung
            </h2>
            <p className="mt-2">
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://“ auf
              „https://“ wechselt und an einem Schloss-Symbol in der
              Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              9. Änderungen
            </h2>
            <p className="mt-2">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um
              sie an geänderte Rechtslage oder an Änderungen der Website bzw.
              der Datenverarbeitung anzugleichen. Die jeweils aktuelle Version
              finden Sie auf dieser Seite.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
