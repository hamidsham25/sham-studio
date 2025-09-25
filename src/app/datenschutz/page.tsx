import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung und DSGVO-Informationen von Sham Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 break-words">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 break-words">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 break-words">Allgemeine Hinweise</h3>
            <p className="text-gray-600 mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 break-words">2. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 break-words">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
            <p className="text-gray-600 mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Abschnitt &quot;Hinweis zur Verantwortlichen Stelle&quot; in dieser Datenschutzerklärung entnehmen.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 break-words">Wie erfassen wir Ihre Daten?</h3>
            <p className="text-gray-600 mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
              Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer 
              Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten 
              (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 break-words">Wofür nutzen wir Ihre Daten?</h3>
            <p className="text-gray-600 mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 break-words">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
            <p className="text-gray-600 mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder 
              Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
              können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 break-words">3. Hosting</h2>
            <p className="text-gray-600 mb-4">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Vercel Inc.</strong><br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                USA
              </p>
              <p className="text-gray-600 mt-2">
                Die Erfassung und Verarbeitung Ihrer Daten erfolgt ausschließlich in Deutschland und wird von den 
                dort geltenden Datenschutzgesetzen bestimmt.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 break-words">4. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 break-words">Datenschutz</h3>
            <p className="text-gray-600 mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
              dieser Datenschutzerklärung.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 break-words">Hinweis zur verantwortlichen Stelle</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                <strong>Hamid Sham</strong><br />
                Lindenweg 87<br />
                30966 Hemmingen<br />
                Deutschland<br /><br />
                Telefon: 017632878739<br />
                E-Mail: hamidsham.studio@gmail.com
              </p>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 break-words">Speicherdauer</h3>
            <p className="text-gray-600 mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
              werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung 
              Ihrer personenbezogenen Daten haben.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 break-words">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-gray-600 mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
              eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
              erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 break-words">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen</h3>
            <p className="text-gray-600 mb-4">
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE 
              JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE 
              VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 break-words">5. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 break-words">Server-Log-Dateien</h3>
            <p className="text-gray-600 mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
              Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 break-words">Kontaktformular</h3>
            <p className="text-gray-600 mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
              von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-gray-600 mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
              mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 break-words">6. Analyse-Tools und Tools von Drittanbietern</h2>
            <p className="text-gray-600 mb-4">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor 
              allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden 
              Sie in der folgenden Datenschutzerklärung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 break-words">7. eRecht24 Safe Sharing</h2>
            <p className="text-gray-600 mb-4">
              Diese Datenschutzerklärung wurde mit dem Datenschutzerklärungs-Generator der eRecht24 erstellt.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Stand: 19.12.2024
          </p>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
