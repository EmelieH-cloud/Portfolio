import React, { useState } from 'react';
import '../styles/workstyle.css';
import Profilbild from '../assets/profil.jpg';

function Work() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jobs = [
    {
      title: 'Sveriges Radio - Praktik',
      place: 'Malmö, mars 2025 – maj 2025',
      preview: `Under min praktik på Sveriges Radio har jag både deltagit i det dagliga sprintarbetet och implementerat 
      ett eget kodprojekt som kartlägger användarbeteenden i appen...`,
      full: `Under min praktik på Sveriges Radio har jag både deltagit i det dagliga sprintarbetet och implementerat
      ett eget kodprojekt som kartlägger användarbeteenden i appen. Jag har arbetat med hela kedjan från
      loggning i koden till att strukturera och analysera loggdatan i ett externt ramverk. Utmaningen har varit att identifiera
       användbar information, implementera loggningsfunktionalitet och använda loggarna för att skapa visualiseringar.  
      Projektet har redan bidragit med beslutsunderlag som teamet har nytta av och 
      kommer vidareutvecklas för att generera mer information.`,
      skills: ['Grafana Faro', 'Datavisualisering', 'Real User Monitoring', '.NET', 'GIT', 'Docker', 'Kubernetes', 'Loggning', 'Electron', 'Vue.js', 'Agila arbetsmetoder']
    },
    {
      title: 'Omegapoint - Praktik',
      place: 'Malmö, sep 2024 – dec 2024',
      preview: 'Under min praktik på Omegapoint arbetade jag med både backend (.NET) och frontend (Next.js) i utvecklingen...',
      full: `Under min praktik på Omegapoint arbetade jag med både backend (.NET) och frontend (Next.js) i utvecklingen
       av en AI-applikation som genererar bilder, video och ljud utifrån textpromptar. Projektet byggdes från grunden tillsammans med 
        praktikanter från andra YH-utbildningar. Upplägget innebar att vi gemensamt utformade databasen, API:er och frontend-applikationen.
         Arbetet bedrevs enligt agila principer och vi turades om rollen som scrum master. Det gav nyttig erfarenhet av 
         agila arbetssätt, tekniskt samarbete och hur man organiserar ett projekt från idé till fungerande applikation.`,
      skills: ['.NET', 'C#', 'ASP.NET Web API', 'Azure', 'REST API', 'Databasdesign', 'Entity Framework', 'Next.js', 'GIT',  'Docker','Agila arbetsmetoder']
    },
    {
      title: 'Delägare – Andersson & Hensfelt Handelsbolag',
      place: 'Lund, sep 2024 – nu',
      preview: 'Jag och min kursare Alinia Andersson startade ett eget företag för vår apputveckling...',
      full: `Jag och min kursare Alinia Andersson startade ett eget företag för vår apputveckling. 
      Företaget grundades i samband med att vi lanserade vår första app 'One More Date?' i oktober 2024, tillgänglig på både Google Play och App Store.
Genom att driva hela processen från idé till färdig produkt har vi fått erfarenhet av produktutveckling, publicering av mobilapplikationer
och plattformsspecifik kod för Android och iOS.
Vi har planerat, organiserat och genomfört ett kodprojekt från grunden, inklusive UI/UX-design, användartestning, och versionshantering.
Utöver det tekniska har projektet lärt oss mycket om kodsamarbete och vad det innebär att fatta beslut kring sin egen kod.`,
      skills: ['Cross platform', 'Native development', 'Blazor Maui', 'React Native', 'Apputveckling', 'Publicering (App Store/Play)', 'GIT'],
      links: [
        { label: 'One More Date? på App Store', url: 'https://apps.apple.com/se/app/one-more-date/id6651834743' },
        { label: 'One More Date? på Google Play', url: 'https://play.google.com/store/apps/details?id=com.anderssonhensfelt.onemoredate&pli=1' }
      ]
    },
    {
      title: 'IT-projektassistent – Consafe Logistics',
      place: 'Lund, aug 2022 – jun 2023',
      preview: 'Jag valde denna roll för i större utsträckning kunna kombinera mina kunskaper inom både IT och ekonomi. Som IT-projektassistent...',
      full: `Jag valde denna roll för i större utsträckning kunna kombinera mina kunskaper inom både IT och ekonomi. Som IT-projektassistent hade jag ansvar för koordinering av
       olika IT-relaterade konsultprojekt och fungerade som en kontaktpunkt mellan projektledare och
         och ekonomiavdelningen. Utöver detta arbetade jag med ekonomisk uppföljning, inklusive bokslut och daglig 
           bokföring. Rollen stärkte min förståelse för hur IT och ekonomi samverkar för att skapa effektiva och välfungerande processer inom en organisation.`,
      skills: ['Leverantörsreskontra', 'Bokslut','Projektkoordinering', 'Microsoft Excel', 'Excel Macros', 'Ekonomi',  'Redovisning', 'Bokföring']
    },
    {
      title: 'Ekonomiassistent – Bygghemma',
      place: 'Malmö, dec 2021 – aug 2022',
      preview: 'Som ekonomiassistent ansvarade jag för hantering av dagliga ekonomiska arbetsuppgifter, inklusive fakturahantering...',
      full: `Som ekonomiassistent ansvarade jag för hantering av dagliga ekonomiska arbetsuppgifter, 
      inklusive fakturahantering, bokföring samt sammanställning och rapportering av ekonomiska data. Under en 
      tid som semestervikarie axlade jag även rollen som prisansvarig, där jag ansvarade för att granska 
       priser samt säkerställa att de överensstämde med de avtalade villkoren. Detta innebar ansvar för regelbunden
        kontakt med leverantörer för att upprätthålla korrekt prissättning.`,
      skills: ['Leverantörsreskontra', 'Bokföring', 'Excel', 'Ekonomi', 'Redovisning', 'Affärssystem', 'Prisadministration']
    },
    {
      title: 'Ekonomiassistent, interim – Fitness24Seven',
      place: 'Lund, sep 2021 – dec 2021',
      preview: 'Tidsbegränsad anställning under övergångsperiod då företaget rekryterade en erfaren redovisningsansvarig...',
      full: `En tidsbegränsad anställning under en övergångsperiod då företaget rekryterade en erfaren redovisningsansvarig. 
      Trots att rollen var kortvarig tackade jag ja för att få insyn i redovisningsprocesser och lära mig bokföring
       i praktiken. Denna erfarenhet lade grunden för min fortsatta utveckling inom ekonomi och gav mig förutsättningar att arbeta vidare som ekonomiassistent.`,
      skills: ['Redovisning', 'Ekonomi', 'Affärssystem', 'Excel']
    },
    {
      title: 'Revisionsadministratör – PwC',
      place: 'Lund, jun 2020 – jun 2021',
      preview: 'Efter examen arbetade jag på PwC som revisionsadministratör, en roll med stort eget ansvar...',
      full: `Efter examen arbetade jag på PwC som revisionsadministratör, en roll med stort eget ansvar och många kontaktytor, 
      där jag fungerade som en viktig länk mellan revisorer, interna team och kunder. Mitt huvudsakliga ansvar var att
       inhämta, granska och kvalitetssäkra underlag från banker, för att säkerställa att dessa var
        korrekta och tillgängliga i de interna systemen. En stor del av rollen var också att hålla kunden
         informerad om revisionens status och nästa steg i processen, samt att på ett pedagogiskt sätt förklara vad de olika momenten innebar. `,
      skills: ['Dokumenthantering', 'Revision', 'Excel', 'Kontrakthantering', 'Affärssystem', 'Kundkontakt']
    },
    {
      title: 'Övriga anställningar',
      place: '',
      preview: '',
      full: (
        <ul className="extra-jobs-list">
          <li><strong>Studentkonsult – Adecco</strong> <em>2016–2019</em><br/>Varierande uppdrag, mestadels inom lagerarbete och kvalitetstestning.</li>
          <li><strong>Köksbiträde – Lunds kommun måltidsservice</strong> <em>2016–2017</em><br/>Timanställning främst som diskare men bidrog även vid enklare matförberedelser och kökslogistik vid behov.</li>
          <li><strong>Vårdbiträde – Solstenen, Lund</strong> <em>Jun–Jul 2018</em><br/>Sommarvikariat på privat enhet (Region Skåne) för beroendevård. Varierande arbetsuppgifter såsom posthantering, städning och mottagande av beställningar.</li>
          <li><strong>Produktionsmedarbetare – CWS Boco, Södra Sandby</strong> <em>Maj–Sep 2019</em><br/>Sommarjobb som produktionsmedarbetare på ett tvätteri.</li>
        </ul>
      ),
      skills: []
    }
  ];

  return (
    <div className="work-container">
      <div className="columns-wrapper">
        <div className="left-column">
          <h1>Systemutvecklare med bakgrund inom ekonomi</h1>
          <p>
            Min resa som systemutvecklare började med en kandidatexamen i informatik vid Lunds universitet, där jag byggde en stark 
            grund inom systemvetenskap och ekonomi.
            <br /><br />
            Efter examen började jag arbeta på PwC som revisionsadministratör, ett stimulerande jobb med många olika kontaktytor och stort eget ansvar.
            I rollen fungerade jag som en viktig länk mellan revisorer, team och kund, där jag ansvarade för att granska och inhämta underlag
            från banker för att säkerställa att dessa var korrekta och lättillgängliga i de interna systemen. I denna roll växte mitt intresse för
            hur digitala verktyg kan effektivisera arbetsuppgifter som kräver hög precision.
            <br /><br />
            För att bredda min kompetens inom ekonomi arbetade jag därefter som ekonomiassistent på Fitness24Seven och Bygghemma.
            I dessa roller fick jag arbeta med det löpande arbetet på ekonomiavdelningar vilket gav mig god förståelse för bokföring och andra dagliga processer
            som ligger till grund för redovisning. 
            <br /><br />
            Innan jag slutligen valde en YH-utbildning till systemutvecklade hade jag en roll som IT-projektassistent, där jag arbetade
            nära IT-projektledare för att stötta i den ekonomiska uppföljningen och administrationen. 
            Det var här jag förstod att det fanns en djup vilja hos mig att vara med och skapa system, inte bara använda dem. Därför beslutade jag mig 
            för att hitta tillbaka till och fokusera på systemutveckling som karriär. Jag började programmera egna projekt
            på fritiden samtidigt som jag letade efter rätt utbildning för att satsa på det jag verkligen brinner för! 
          </p>
        </div>

        <div className="right-column">
          {jobs.map((job, index) => (
            <div
              className={`job-entry ${openIndex === index ? 'open' : ''}`}
              key={index}
              onClick={() => toggleAccordion(index)}
            >
              <h3>{job.title}</h3>
              {job.place && <p><strong>{job.place}</strong></p>}
              {openIndex === index ? (
                <>
                  <p>{job.full}</p>
                  {job.skills && job.skills.length > 0 && (
                    <ul className="skills-list">
                      {job.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  )}
                  {job.links && (
                    <div className="job-links">
                      {job.links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <p>{job.preview}</p>
              )}
              <span className="accordion-toggle">{openIndex === index ? '−' : '+'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
