import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://sham-studio.de";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen – Sham Studio, Webdesign & Entwicklung in Hannover.",
  openGraph: {
    url: `${SITE_URL}/agb`,
    title: "AGB | Sham Studio",
    description: "Allgemeine Geschäftsbedingungen – Sham Studio Webdesign",
  },
  alternates: { canonical: `${SITE_URL}/agb` },
};

export default function AgbPage() {
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
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
        <p className="mt-4 text-zinc-500 text-sm">
          Gültig für Webdesign, UI/UX, Branding und Webentwicklung – Sham Studio.
        </p>

        <div className="mt-10 space-y-10 text-zinc-400 leading-relaxed">
          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              1. Geltungsbereich
            </h2>
            <p className="mt-2">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
              Verträge zwischen Sham Studio („Auftragnehmer“) – vertreten durch
              Hamid Sham, Walsroder Straße 237, 30855 Langenhagen – und dem
              Auftraggeber („Kunde“) über die Erbringung von Dienstleistungen
              im Bereich Webdesign, UI/UX-Design, Branding, Webentwicklung und
              damit verbundener Tätigkeiten. Abweichende Bedingungen des Kunden
              werden nur anerkannt, wenn und soweit ihnen schriftlich
              zugestimmt wird.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              2. Vertragsschluss
            </h2>
            <p className="mt-2">
              Der Vertrag kommt durch ein verbindliches Angebot des
              Auftragnehmers und dessen Annahme durch den Kunden zustande. Die
              Auftragsbestätigung kann schriftlich (z. B. per E-Mail) erfolgen.
              Mündliche Nebenabreden wurden nicht getroffen. Änderungen und
              Ergänzungen bedürfen der Schriftform.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              3. Leistungsumfang
            </h2>
            <p className="mt-2">
              Der Umfang der zu erbringenden Leistungen ergibt sich aus dem
              vereinbarten Angebot bzw. dem Leistungsbeschreibungs-Dokument.
              Nicht im Angebot enthaltene Leistungen werden gesondert vergütet.
              Der Auftragnehmer erbringt die Leistungen nach dem Stand der
              Technik und in eigener fachlicher Verantwortung. Eine Garantie
              für die Erreichung bestimmter wirtschaftlicher Erfolge oder
              sonstiger Ziele wird nicht übernommen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              4. Mitwirkungspflichten des Kunden
            </h2>
            <p className="mt-2">
              Der Kunde stellt die für die Leistungserbringung erforderlichen
              Informationen, Texte, Bilder, Logos und sonstige Unterlagen
              rechtzeitig, vollständig und in geeigneter Form zur Verfügung. Er
              sorgt dafür, dass die Inhalte frei von Rechten Dritter sind bzw.
              die erforderlichen Nutzungsrechte vorliegen. Verzögerungen oder
              Mehrkosten infolge verspäteter oder unvollständiger Mitwirkung
              gehen zu Lasten des Kunden. Der Auftragnehmer kann Fristen setzen;
              bei Fristüberschreitung ohne Verschulden des Auftragnehmers kann
              dieser den Vertrag kündigen oder die Vergütung anteilig in
              Rechnung stellen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              5. Urheberrecht und Nutzungsrechte
            </h2>
            <p className="mt-2">
              Alle vom Auftragnehmer erstellten Werke (Designs, Grafiken,
              Programmcode, Konzepte u. Ä.) unterliegen dem Urheberrecht. Die
              Einräumung von Nutzungsrechten erfolgt – sofern nichts anderes
              vereinbart – erst nach vollständiger Bezahlung aller vereinbarten
              Vergütungen. Ohne vollständige Bezahlung darf der Kunde die
              erstellten Leistungen nicht nutzen, verwerten oder veröffentlichen.
              Die Übertragung der vereinbarten Nutzungsrechte erfolgt
              ausschließlich für den im Vertrag genannten Zweck und Umfang.
              Eine Weitergabe an Dritte bedarf der vorherigen schriftlichen
              Zustimmung.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              6. Vergütung und Zahlungsbedingungen
            </h2>
            <p className="mt-2">
              Die Vergütung richtet sich nach dem vereinbarten Angebot. Alle
              Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer, sofern
              nicht ausdrücklich anders angegeben. Rechnungen sind innerhalb von
              14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig, sofern
              nicht anders vereinbart. Bei Zahlungsverzug ist der Auftragnehmer
              berechtigt, Verzugszinsen in gesetzlicher Höhe zu berechnen sowie
              die weitere Leistungserbringung auszusetzen, bis der Ausstand
              beglichen ist. Die Geltendmachung weiterer Schäden bleibt
              vorbehalten.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              7. Gewährleistung
            </h2>
            <p className="mt-2">
              Der Auftragnehmer gewährleistet, dass die Leistungen den
              vereinbarten Anforderungen entsprechen und frei von
              Sach- und Rechtsmängeln sind. Mängelansprüche setzen voraus, dass
              der Kunde den Mangel unverzüglich und schriftlich rügt. Der
              Auftragnehmer hat zunächst das Recht zur Nacherfüllung
              (Nachbesserung bzw. Ersatzlieferung). Schlägt die Nacherfüllung
              fehl oder ist unzumutbar, kann der Kunde Minderung oder Rücktritt
              verlangen. Die Gewährleistungsfrist beträgt 12 Monate ab
              Abnahme, sofern nicht eine längere Frist ausdrücklich vereinbart wurde.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              8. Haftung
            </h2>
            <p className="mt-2">
              Der Auftragnehmer haftet unbeschränkt für Vorsatz, grobe
              Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens,
              des Körpers oder der Gesundheit. Bei leichter Fahrlässigkeit haftet
              er nur bei Verletzung wesentlicher Vertragspflichten
              (Kardinalpflichten) und nur in Höhe des vorhersehbaren,
              typischerweise eintretenden Schadens, maximal jedoch in Höhe des
              Auftragswertes des betroffenen Projekts. Haftung für mittelbare
              Schäden, entgangenen Gewinn, Folgeschäden oder Mangelfolgeschäden
              im Zusammenhang mit leichter Fahrlässigkeit ist ausgeschlossen.
              Die vorstehenden Haftungsbeschränkungen gelten auch zugunsten
              der Erfüllungsgehilfen des Auftragnehmers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              9. Vertraulichkeit
            </h2>
            <p className="mt-2">
              Beide Parteien verpflichten sich, vertrauliche Informationen der
              anderen Partei vertraulich zu behandeln und nur im Rahmen des
              Vertragszwecks zu verwenden. Diese Verpflichtung besteht auch
              nach Beendigung des Vertrages fort.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              10. Kündigung und Rücktritt
            </h2>
            <p className="mt-2">
              Eine ordentliche Kündigung ist bei Projektverträgen mit
              festgelegter Laufzeit ausgeschlossen, sofern nicht ausdrücklich
              anders vereinbart. Das Recht zur außerordentlichen Kündigung aus
              wichtigem Grund bleibt unberührt. Kündigt der Kunde ohne
              wichtigen Grund, ist der Auftragnehmer berechtigt, die bis dahin
              erbrachten Leistungen zu vergüten sowie einen Anteil der
              vereinbarten Vergütung für noch nicht erbrachte Leistungen als
              Pauschalierung entstandener Aufwendungen zu verlangen, sofern der
              Kunde den Vertrag nicht aus von ihm zu vertretenden Gründen
              kündigt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              11. Eigentumsvorbehalt
            </h2>
            <p className="mt-2">
              Alle erstellten Leistungen (Entwürfe, Dateien, Quellcode usw.)
              bleiben bis zur vollständigen Bezahlung Eigentum des
              Auftragnehmers. Eine Weitergabe von Dateien oder Zugängen vor
              vollständiger Zahlung erfolgt nur in Ausnahmefällen und nach
              schriftlicher Vereinbarung.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              12. Salvatorische Klausel
            </h2>
            <p className="mt-2">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden,
              bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              13. Gerichtsstand und anwendbares Recht
            </h2>
            <p className="mt-2">
              Es gilt das Recht der Bundesrepublik Deutschland unter
              Ausschluss des UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten
              aus dem Vertragsverhältnis ist – sofern der Kunde Kaufmann,
              juristische Person des öffentlichen Rechts oder öffentlich-rechtliches
              Sondervermögen ist – Langenhagen. Der Auftragnehmer ist ebenfalls
              berechtigt, den Kunden an dessen Sitz zu verklagen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">
              14. Änderungen
            </h2>
            <p className="mt-2">
              Sham Studio behält sich vor, diese AGB anzupassen. Für bereits
              geschlossene Verträge gelten die zum Zeitpunkt des Vertragsschlusses
              vereinbarten Bedingungen. Die jeweils aktuelle Fassung ist auf
              dieser Seite abrufbar.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
