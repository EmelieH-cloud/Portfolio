import React, { useState } from 'react';
import '../styles/workstyle.css';
import Profilbild from '../assets/profil.jpg'


function Work() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jobs = [
    {
      title: 'Sveriges Radio, Praktik',
      place: 'Malmö, mars 2025 – maj 2025',
      preview: `Under min praktik på Sveriges Radio har jag både deltagit i det dagliga sprintarbetet och haft ansvar 
      för ett eget kodprojekt med syfte att kartlägga användarbeteende i appen...`,
      full: `Under min praktik på Sveriges Radio har jag både deltagit i det dagliga sprintarbetet och haft ansvar 
      för ett eget kodprojekt med syfte att kartlägga användarbeteende i appen. Jag har arbetat med hela kedjan från att
      implementera loggning i koden till att strukturera och analysera datan i ett externt ramverk. Huvudsyftet
      har varit att omvandla loggarna till tydliga och användbara visualiseringar som lyfter användarnas
      beteenden. Projektet har bidragit med konkreta insikter som teamet har nytta av och 
      kommer vidareutvecklas för att generera fler insikter.`,
      skills: ['Grafana Faro', 'Datavisualisering', 'Real User Monitoring', '.NET', 'GIT', 'Docker', 'Kubernetes', 'Vue.js', 'Agila arbetsmetoder']
    },
    {
      title: 'Omegapoint, Praktik',
      place: 'Malmö, sep 2024 – dec 2024',
      preview: 'Bidrog till AI-applikation för bild/video-generering...',
      full: 'Under min praktik på Omegapoint arbetade jag i både backend (.NET) och frontend (Next.js) för att bidra till en AI-applikation som genererar bilder och videor för marknadsföringsändamål.',
      skills: ['.NET', 'Next.js', 'Fullstack', 'REST API', 'Git']
    },
    {
      title: 'Delägare – Andersson & Hensfelt Handelsbolag',
      place: 'Lund, sep 2024 – nu',
      preview: 'Lanserade app och grundade bolag med kursare...',
      full: 'Jag och min kursare Alinia Andersson startade ett företag för vår apputveckling, i samband med att vi lanserade vår första app i oktober 2024, tillgänglig på Google Play och App Store (iOS).',
      skills: ['Entreprenörskap', 'React Native', 'Apputveckling', 'Publicering (App Store/Play)', 'Samarbete']
    },
    {
      title: 'IT-projektassistent – Consafe Logistics',
      place: 'Lund, aug 2022 – jun 2023',
      preview: 'Koordinerade interna system, bidrog till årsbokslut...',
      full: 'Som IT-projektassistent ansvarade jag för projektkoordinering i interna system, samarbetade med IT-projektledare och bidrog till årsbokslut och daglig bokföring.',
      skills: ['Projektkoordinering', 'Microsoft Excel', 'Interna system', 'Ekonomi', 'Teamarbete']
    },
    {
      title: 'Ekonomiassistent – Bygghemma',
      place: 'Malmö, dec 2021 – aug 2022',
      preview: 'Fakturahantering, bokföring och rapportering...',
      full: 'Som ekonomiassistent hanterade jag dagliga finansiella arbetsuppgifter såsom fakturahantering, bokföring och rapportering.',
      skills: ['Fakturering', 'Bokföring', 'Rapportering', 'Excel', 'Noggrannhet']
    },
    {
      title: 'Ekonomiassistent, interim – Fitness24Seven',
      place: 'Lund, sep 2021 – dec 2021',
      preview: 'Tidsbegränsad redovisningsroll under övergångsperiod...',
      full: 'En tidsbegränsad anställning som ekonomiassistent under en övergångsperiod då företaget sökte en mer erfaren redovisningsansvarig. Rollen gav mig värdefull inblick i redovisningsarbetet och möjliggjorde att jag kunde lära mig bokföring i praktiken, vilket gav mig förutsättningar att fortsätta arbeta inom ekonomi som ekonomiassistent.',
      skills: ['Redovisning', 'Ekonomisystem', 'Lärande i praktik', 'Tillfälliga uppdrag', 'Excel']
    },
    {
      title: 'Revisionsadministratör – PwC',
      place: 'Lund, jun 2020 – jun 2021',
      preview: 'Länk mellan revisorer och kund, ansvar för dokumentation...',
      full: 'Som revisionsadministratör fungerade jag som en länk mellan revisorer, team och kund, och inhämtade revisionsdokument från banker för att säkerställa att de var korrekta och lättillgängliga i de interna systemen.',
      skills: ['Kommunikation', 'Dokumenthantering', 'Excel', 'Interna system', 'Kundkontakt']
    }
  ];

  return (
  <>
   
    <div className="work-container">
<img src={Profilbild} alt="profilbild" className='profilbild'/>
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
     hur digitala verktyg kan effektivisera affärsprocesser som kräver hög precision.
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
              <p><strong>{job.place}</strong></p>
              {openIndex === index ? (
                <>
                  <p>{job.full}</p>
                  {job.skills && (
                    <ul className="skills-list">
                      {job.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
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
    </>
  );
}

export default Work;
