// Conteúdo multilíngue para as páginas /about e /faq.
// Idiomas totalmente traduzidos: en, pt-BR, pt-PT, de, fr, es, it, nl.
// Os restantes idiomas do site (el, fi, sk, sl, hr, et, lv, lt, bg, ja,
// zh, id, ko, tr, vi) ainda não têm tradução própria e usam o inglês
// como alternativa por enquanto.

export const ABOUT_CONTENT = {
  en: {
    title: "About CashSum",
    paragraphs: [
      "CashSum started from a simple need: counting physical cash quickly, without hassle. It's built for anyone who works with a till, handles currency exchange, or just wants to know how much is in their wallet or drawer.",
      "There's no account to create and nothing to install — everything runs directly in your browser, and nothing you type is ever sent to or stored on our servers.",
      "CashSum is a small, independent project. If you spot something wrong, or there's a currency you'd like to see added, feedback is always welcome.",
    ],
    backToCalculator: "← Back to the calculator",
  },
  "pt-BR": {
    title: "Sobre o CashSum",
    paragraphs: [
      "O CashSum nasceu de uma necessidade simples: contar dinheiro físico rapidamente, sem complicação. Feito para quem trabalha com caixa, faz câmbio, ou só quer saber quanto tem na carteira ou na gaveta.",
      "Não precisa criar conta nem instalar nada — tudo roda direto no seu navegador, e nada do que você digita é enviado ou guardado nos nossos servidores.",
      "O CashSum é um projeto pequeno e independente. Se encontrar algo errado, ou tiver uma moeda que gostaria de ver adicionada, o feedback é sempre bem-vindo.",
    ],
    backToCalculator: "← Voltar para a calculadora",
  },
  "pt-PT": {
    title: "Sobre o CashSum",
    paragraphs: [
      "O CashSum nasceu de uma necessidade simples: contar dinheiro físico rapidamente, sem complicação. Feito para quem trabalha com caixa, faz câmbio, ou só quer saber quanto tem na carteira ou na gaveta.",
      "Não precisas de criar conta nem instalar nada — tudo corre diretamente no teu navegador, e nada do que escreves é enviado ou guardado nos nossos servidores.",
      "O CashSum é um projeto pequeno e independente. Se encontrares algo errado, ou houver uma moeda que gostarias de ver adicionada, o feedback é sempre bem-vindo.",
    ],
    backToCalculator: "← Voltar à calculadora",
  },
  de: {
    title: "Über CashSum",
    paragraphs: [
      "CashSum entstand aus einem einfachen Bedürfnis: Bargeld schnell und unkompliziert zu zählen. Gedacht für alle, die an einer Kasse arbeiten, Geld wechseln oder einfach wissen wollen, wie viel im Portemonnaie oder in der Kasse ist.",
      "Es ist kein Konto nötig und nichts zu installieren — alles läuft direkt im Browser, und nichts, was Sie eingeben, wird an unsere Server gesendet oder dort gespeichert.",
      "CashSum ist ein kleines, unabhängiges Projekt. Wenn Ihnen ein Fehler auffällt oder eine Währung fehlt, freuen wir uns über Rückmeldungen.",
    ],
    backToCalculator: "← Zurück zum Rechner",
  },
  fr: {
    title: "À propos de CashSum",
    paragraphs: [
      "CashSum est né d'un besoin simple : compter de l'argent liquide rapidement, sans complication. Conçu pour ceux qui travaillent à une caisse, font du change, ou veulent simplement savoir combien ils ont dans leur portefeuille ou leur tiroir-caisse.",
      "Aucun compte à créer, rien à installer — tout fonctionne directement dans votre navigateur, et rien de ce que vous saisissez n'est envoyé ou stocké sur nos serveurs.",
      "CashSum est un petit projet indépendant. Si vous repérez une erreur, ou souhaitez qu'une devise soit ajoutée, vos retours sont toujours les bienvenus.",
    ],
    backToCalculator: "← Retour à la calculatrice",
  },
  es: {
    title: "Sobre CashSum",
    paragraphs: [
      "CashSum nació de una necesidad simple: contar dinero en efectivo rápidamente, sin complicaciones. Pensado para quienes trabajan en caja, hacen cambio de divisas, o solo quieren saber cuánto tienen en la cartera o en el cajón.",
      "No hace falta crear una cuenta ni instalar nada — todo funciona directamente en tu navegador, y nada de lo que escribes se envía ni se guarda en nuestros servidores.",
      "CashSum es un proyecto pequeño e independiente. Si detectas algo mal, o hay una moneda que te gustaría ver añadida, los comentarios siempre son bienvenidos.",
    ],
    backToCalculator: "← Volver a la calculadora",
  },
  it: {
    title: "Informazioni su CashSum",
    paragraphs: [
      "CashSum è nato da un'esigenza semplice: contare il denaro contante rapidamente, senza complicazioni. Pensato per chi lavora in cassa, fa cambio valuta, o vuole solo sapere quanto ha nel portafoglio o nel cassetto.",
      "Non serve creare un account né installare nulla — tutto funziona direttamente nel browser, e nulla di ciò che scrivi viene inviato o salvato sui nostri server.",
      "CashSum è un piccolo progetto indipendente. Se noti qualcosa che non va, o manca una valuta che vorresti vedere aggiunta, i commenti sono sempre benvenuti.",
    ],
    backToCalculator: "← Torna al calcolatore",
  },
  nl: {
    title: "Over CashSum",
    paragraphs: [
      "CashSum ontstond uit een simpele behoefte: snel en zonder gedoe contant geld tellen. Gemaakt voor iedereen die achter een kassa werkt, geld wisselt, of gewoon wil weten hoeveel er in de portemonnee of de lade zit.",
      "Geen account nodig, niets te installeren — alles werkt direct in je browser, en niets wat je invoert wordt naar onze servers gestuurd of daar opgeslagen.",
      "CashSum is een klein, onafhankelijk project. Zie je iets fout, of mis je een valuta, laat het gerust weten.",
    ],
    backToCalculator: "← Terug naar de rekenmachine",
  },
};

export const FAQ_CONTENT = {
  en: {
    title: "Frequently Asked Questions",
    items: [
      { q: "Does CashSum store my data?", a: "No. The amounts you enter stay only in your browser — nothing is sent to or saved on our servers." },
      { q: "Does it work without an internet connection?", a: "Once the page has fully loaded, yes — the calculator itself runs locally in your browser." },
      { q: "Do I need to create an account?", a: "No. CashSum is completely free to use and doesn't require any sign-up." },
      { q: "Which currencies are supported?", a: "More than a dozen, including the Euro, US Dollar, British Pound, Brazilian Real, Japanese Yen, and several others — with local-language versions available for a number of them." },
      { q: "Is the information about each currency accurate?", a: "We do our best to keep denominations and historical facts up to date and correct, but double-check anything that matters against an official source." },
      { q: "Can I use CashSum on my phone?", a: "Yes, the calculator works well on both desktop and mobile browsers." },
    ],
    backToCalculator: "← Back to the calculator",
  },
  "pt-BR": {
    title: "Perguntas Frequentes",
    items: [
      { q: "O CashSum guarda meus dados?", a: "Não. Os valores que você digita ficam só no seu navegador — nada é enviado ou guardado nos nossos servidores." },
      { q: "Funciona sem internet?", a: "Depois que a página carrega, sim — a calculadora funciona localmente no seu navegador." },
      { q: "Preciso criar uma conta?", a: "Não. O CashSum é totalmente grátis e não exige cadastro." },
      { q: "Quais moedas são suportadas?", a: "Mais de uma dezena, incluindo Euro, Dólar, Libra, Real e outras — com versões em vários idiomas para algumas delas." },
      { q: "As informações sobre cada moeda são precisas?", a: "Fazemos o possível para manter os dados corretos e atualizados, mas confira numa fonte oficial se for algo importante." },
      { q: "Dá pra usar no celular?", a: "Sim, a calculadora funciona bem tanto no computador quanto no celular." },
    ],
    backToCalculator: "← Voltar para a calculadora",
  },
  "pt-PT": {
    title: "Perguntas Frequentes",
    items: [
      { q: "O CashSum guarda os meus dados?", a: "Não. Os valores que inseres ficam só no teu navegador — nada é enviado ou guardado nos nossos servidores." },
      { q: "Funciona sem internet?", a: "Depois de a página carregar, sim — a calculadora funciona localmente no teu navegador." },
      { q: "Preciso de criar conta?", a: "Não. O CashSum é totalmente gratuito e não exige registo." },
      { q: "Que moedas são suportadas?", a: "Mais de uma dezena, incluindo Euro, Dólar, Libra, Real e outras — com versões em vários idiomas para algumas delas." },
      { q: "As informações sobre cada moeda são precisas?", a: "Fazemos o possível para manter os dados corretos e atualizados, mas confirma numa fonte oficial se for algo importante." },
      { q: "Dá para usar no telemóvel?", a: "Sim, a calculadora funciona bem tanto no computador como no telemóvel." },
    ],
    backToCalculator: "← Voltar à calculadora",
  },
  de: {
    title: "Häufig gestellte Fragen",
    items: [
      { q: "Speichert CashSum meine Daten?", a: "Nein. Die eingegebenen Beträge bleiben nur in Ihrem Browser — nichts wird an unsere Server gesendet oder dort gespeichert." },
      { q: "Funktioniert es ohne Internetverbindung?", a: "Sobald die Seite vollständig geladen ist, ja — der Rechner läuft lokal in Ihrem Browser." },
      { q: "Muss ich ein Konto erstellen?", a: "Nein. CashSum ist völlig kostenlos und erfordert keine Anmeldung." },
      { q: "Welche Währungen werden unterstützt?", a: "Über ein Dutzend, darunter Euro, US-Dollar, Pfund, Real und weitere — für einige davon auch in der jeweiligen Landessprache." },
      { q: "Sind die Informationen zu jeder Währung korrekt?", a: "Wir bemühen uns, alles aktuell und korrekt zu halten, aber prüfen Sie Wichtiges bei einer offiziellen Quelle." },
      { q: "Kann ich CashSum auf dem Handy nutzen?", a: "Ja, der Rechner funktioniert gut auf Desktop- und Mobilbrowsern." },
    ],
    backToCalculator: "← Zurück zum Rechner",
  },
  fr: {
    title: "Questions Fréquentes",
    items: [
      { q: "CashSum conserve-t-il mes données ?", a: "Non. Les montants saisis restent uniquement dans votre navigateur — rien n'est envoyé ni stocké sur nos serveurs." },
      { q: "Fonctionne-t-il hors ligne ?", a: "Une fois la page entièrement chargée, oui — la calculatrice fonctionne localement dans votre navigateur." },
      { q: "Dois-je créer un compte ?", a: "Non. CashSum est entièrement gratuit et ne nécessite aucune inscription." },
      { q: "Quelles devises sont prises en charge ?", a: "Plus d'une douzaine, dont l'euro, le dollar, la livre, le real et d'autres — avec des versions dans la langue locale pour certaines d'entre elles." },
      { q: "Les informations sur chaque devise sont-elles exactes ?", a: "Nous faisons de notre mieux pour tout tenir à jour, mais vérifiez ce qui compte auprès d'une source officielle." },
      { q: "Puis-je utiliser CashSum sur mon téléphone ?", a: "Oui, la calculatrice fonctionne bien sur ordinateur comme sur mobile." },
    ],
    backToCalculator: "← Retour à la calculatrice",
  },
  es: {
    title: "Preguntas Frecuentes",
    items: [
      { q: "¿CashSum guarda mis datos?", a: "No. Los importes que introduces se quedan solo en tu navegador — nada se envía ni se guarda en nuestros servidores." },
      { q: "¿Funciona sin conexión a internet?", a: "Una vez que la página ha cargado por completo, sí — la calculadora funciona localmente en tu navegador." },
      { q: "¿Necesito crear una cuenta?", a: "No. CashSum es completamente gratuito y no requiere registro." },
      { q: "¿Qué monedas son compatibles?", a: "Más de una docena, incluyendo euro, dólar, libra, real y otras — con versiones en el idioma local para varias de ellas." },
      { q: "¿La información sobre cada moneda es exacta?", a: "Hacemos lo posible por mantenerla actualizada y correcta, pero comprueba en una fuente oficial lo que sea importante." },
      { q: "¿Puedo usar CashSum en el móvil?", a: "Sí, la calculadora funciona bien tanto en ordenador como en móvil." },
    ],
    backToCalculator: "← Volver a la calculadora",
  },
  it: {
    title: "Domande Frequenti",
    items: [
      { q: "CashSum salva i miei dati?", a: "No. Gli importi inseriti restano solo nel tuo browser — nulla viene inviato o salvato sui nostri server." },
      { q: "Funziona senza connessione a internet?", a: "Una volta caricata completamente la pagina, sì — il calcolatore funziona localmente nel browser." },
      { q: "Devo creare un account?", a: "No. CashSum è completamente gratuito e non richiede registrazione." },
      { q: "Quali valute sono supportate?", a: "Più di una dozzina, tra cui euro, dollaro, sterlina, real e altre — con versioni nella lingua locale per diverse di esse." },
      { q: "Le informazioni su ogni valuta sono accurate?", a: "Facciamo del nostro meglio per tenerle aggiornate e corrette, ma verifica su una fonte ufficiale ciò che è importante." },
      { q: "Posso usare CashSum sul telefono?", a: "Sì, il calcolatore funziona bene sia su desktop che su mobile." },
    ],
    backToCalculator: "← Torna al calcolatore",
  },
  nl: {
    title: "Veelgestelde Vragen",
    items: [
      { q: "Bewaart CashSum mijn gegevens?", a: "Nee. De bedragen die je invoert, blijven alleen in je browser — er wordt niets naar onze servers gestuurd of daar opgeslagen." },
      { q: "Werkt het zonder internetverbinding?", a: "Zodra de pagina volledig is geladen, ja — de rekenmachine werkt lokaal in je browser." },
      { q: "Moet ik een account aanmaken?", a: "Nee. CashSum is volledig gratis en vereist geen registratie." },
      { q: "Welke valuta's worden ondersteund?", a: "Meer dan een dozijn, waaronder euro, dollar, pond, real en meer — met versies in de lokale taal voor een aantal daarvan." },
      { q: "Klopt de informatie over elke valuta?", a: "We doen ons best om alles actueel en correct te houden, maar controleer belangrijke zaken bij een officiële bron." },
      { q: "Kan ik CashSum op mijn telefoon gebruiken?", a: "Ja, de rekenmachine werkt goed op zowel desktop als mobiel." },
    ],
    backToCalculator: "← Terug naar de rekenmachine",
  },
};

export function getAboutContent(lang) {
  return ABOUT_CONTENT[lang] || ABOUT_CONTENT.en;
}

export function getFaqContent(lang) {
  return FAQ_CONTENT[lang] || FAQ_CONTENT.en;
}
