import React from 'react';
import { FaGithub, FaApple, FaGooglePlay } from 'react-icons/fa';
import '../styles/portfoliostyle.css';
import TravelPal from '../assets/travelpal1.png';
import GreenThumb from '../assets/Greenthumb.png';
import Bundrop from '../assets/bundrop.png';
import Otilia from '../assets/otilia.png';
import OMD from '../assets/omd.png';
import AI from '../assets/ai-adv.png';

const projects = [
  {
    title: 'One More Date',
    subtitle: 'Mobilapp publicerad på Google Play Console och App Store',
    tech: 'Blazor MAUI, C#, .NET, XAML, In-App-Purchases, Google Play Console, App Store Connect',
    image: OMD,
    github: 'Privat',
    appstore: 'https://apps.apple.com/se/app/one-more-date/id6651834743',
    playstore: 'https://play.google.com/store/apps/details?id=com.anderssonhensfelt.onemoredate',
    description: `
[Se på Google Play](https://play.google.com/store/apps/details?id=com.anderssonhensfelt.onemoredate)  
[Se på App Store](https://apps.apple.com/se/app/one-more-date/id6651834743)

One More Date är en mobilapplikation som skapar roliga diskussionsämnen och fungerar som ett socialt sällskapsspel, både för nära vänner och som ett sätt att bryta isen i nya sällskap.

Appen är utvecklad i Blazor MAUI med fokus på enkelhet, tydlighet och plattformsoberoende användning.

Applikationen implementerar:

• In-App Purchases (Android & iOS) för att möjliggöra köp inuti appen. 
• Skalbar, modulär och testbar kod genom tydlig separering av affärslogik, datamodell och gränssnitt. 
• Användargränssnitt byggt i XAML med animationer och responsiv design för både mobil och surfplatta.
• Distribuerad till App Store och Google Play med korrekt signering, metadata och produktkonfiguration. 
    `
  },
  {
    title: 'AI Adventure Generator',
    subtitle: 'Fullstack-app med FastAPI, React och OpenAI',
    tech: 'FastAPI, Python, SQLAlchemy, SQLite, Pydantic, LangChain, OpenAI API, React, Vite, Axios, CSS',
    image: AI,
    githubBackend: 'https://github.com/EmelieH-cloud/AI-adventure-backend',
    githubFrontend: 'https://github.com/EmelieH-cloud/AI-adventure-frontend',
    description: `
AI Adventure Generator är en fullstack-applikation som skapar AI-genererade berättelser baserade på användarens valda tema.

Projektet implementerar:

• Modulär backend byggd i FastAPI.  
• SQLite-databas via SQLAlchemy ORM med tydlig modellstruktur och migreringsvänlig design.  
• Pydantic-scheman för strikt validering av all in- och utdata.  
• Integration med OpenAI via LangChain för att generera berättelser.  
• Polling-endpoints för asynkron AI-generering.  
• Frontend byggd i React.
• Axios för API-anrop och state-hantering via React Hooks.  
• Responsiv UI-design för mobil och desktop.
    `
  },
  {
    title: 'Otilia',
    subtitle: 'Social App (Examensarbete)',
    tech: 'React Native, Expo, Supabase, Webhooks, Remote Procedure Calls, Firebase, Push-notifications, Camera-integration, Figma',
    image: Otilia,
    github: 'Privat',
    description: `
Otilia är en mobil applikation utvecklad med React Native och Expo. Applikationen är inspirerad av den befintliga appen GoFriendly och fokuserar på funktioner som hjälper användarna hitta vänner i närområdet.

Applikationen implementerar:
• Cross-platform utveckling med React Native + Expo för att anpassa appen för både iOS och Android.
• Backend-as-a-Service (BaaS) med Supabase för databaslagring, autentisering och geografisk datahantering via PostGIS.
• Realtidschatt med Firebase Cloud Firestore.
• GPS-funktionalitet med Expo Location för att hitta användare inom valbart geografiskt avstånd.
• Push-notiser via Expo push-notifications, hanterade med webhooks och Edge Functions.
• Kameraintegration med expo-camera + expo-image-picker för profilbilder.
• UI- och användarflödesdesign utvecklad i Figma med fokus på enkelhet och funktionalitet.
    `
  },
  {
    title: 'Bundrop',
    subtitle: 'Webbapplikation med React',
    tech: 'React, JSON-server, Figma',
    image: Bundrop,
    github: 'https://github.com/EmelieH-cloud/BunDrop',
    description: `
Bundrop är en webbapplikation där användare kan registrera sig och lägga beställningar via ett traditionellt e-handelsflöde. Projektet är utvecklat i React med json-server som enkel backend.

Applikationen implementerar:
• Responsiv design med komponentbaserat gränssnitt.
• Routing med React Router för navigering mellan sidor.
• Användarkonto med inloggning, registrering och möjlighet att se tidigare beställningar.
• Dynamisk sökfunktion för att filtrera produkter.
• Context och custom hooks för hantering av användardata, varukorg och favoriter.
• Simulerad betalfunktion med bekräftelse och kvitto.
• Design skapad i Figma för både mobil- och desktopvy.
    `
  },
  {
    title: 'GreenThumb',
    subtitle: 'Databasutveckling i WPF (.NET)',
    tech: 'C#, .NET, Entity Framework, SQL, WPF, MVVM',
    image: GreenThumb,
    github: 'https://github.com/EmelieH-cloud/GreenThumbProject',
    description: `
GreenThumb är en desktopapplikation utvecklad med WPF där användare kan registrera sig, logga in och hantera produkter via en SQL Server-databas. Applikationen stödjer även administratörsinloggning med utökade behörigheter.

Applikationen implementerar:
• Objektorienterad design.
• Relationsdatabas utvecklad med hjälp av ER-modellering och Entity Framework.
• Repository- och Unit of Work-mönster för strukturerad dataåtkomst.
• CRUD-funktionalitet.
• Lagerindelad struktur med databashantering, validering, logik och UI separerade.
• Användarroller: användare och administratörer.
• Datavalidering.
• Responsivt GUI byggt i XAML.
    `
  },
  {
    title: 'TravelPal',
    subtitle: 'Reseapp i WPF (.NET)',
    tech: 'C#, .NET, WPF, MVVM, OOP, GitHub',
    image: TravelPal,
    github: 'https://github.com/EmelieH-cloud/TravelPal-Newton',
    description: `
TravelPal är en desktopapplikation byggd i WPF där användare kan registrera sig, lägga till resor och hantera packningslistor.

Applikationen implementerar:
• Objektorienterad design.
• Användning av arv för att skapa subklasser.
• Separationsprinciper (Single Responsibility) med tydlig uppdelning i klasser.
• Interface-användning för att möjliggöra polymorfism.
• Enum-hantering.
• Inbyggd validering av datumformat och användarinmatning.
• CRUD-operationer.
• Användarroller: användare och administratörer.
• Statisk datahantering via listor som simulerar databas.
    `
  }
];

const formatDescription = (description) => {
  const lines = description.trim().split('\n').filter(line => line.trim() !== '');
  const listStartIndex = lines.findIndex(line => line.toLowerCase().includes('implementerar:') || line.toLowerCase().includes('projektet implementerar:'));

  const parseLine = (line, key) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(line)) !== null) {
      const [fullMatch, text, url] = match;
      const isPlayStore = url.includes('play.google.com');
      const isAppStore = url.includes('apps.apple.com');

      parts.push(line.slice(lastIndex, match.index));
      parts.push(
        <a
          key={`${key}-link-${match.index}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007acc', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: '500' }}
        >
          {isPlayStore && <FaGooglePlay />}
          {isAppStore && <FaApple />}
          {text}
        </a>
      );
      lastIndex = match.index + fullMatch.length;
    }

    parts.push(line.slice(lastIndex));
    return <p key={key}>{parts}</p>;
  };

  if (listStartIndex === -1) {
    return lines.map((line, i) => parseLine(line, i));
  }

  const beforeList = lines.slice(0, listStartIndex + 1);
  const listItems = lines.slice(listStartIndex + 1).map(line => line.replace(/^•\s*/, ''));

  return (
    <>
      {beforeList.map((line, i) => parseLine(line, i))}
      <ul className="custom-list">
        {listItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-inner">
         <div className="portfolio-intro-text">
          <p>Här hittar du ett urval av de projekt jag har utvecklat, både som en del av min utbildning och på egen hand. Varje projekt innehåller en kort beskrivning, tekniker jag använt samt länkar till koden och eventuell publicering.</p>
        </div>
        {projects.map((project, idx) => (
          <div key={idx} className="portfolio-project">
            {project.githubBackend && project.githubFrontend ? (
              <div className="portfolio-link-group">
                <a href={project.githubBackend} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  <FaGithub size={22} />
                  Backend
                </a>
                <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  <FaGithub size={22} />
                  Frontend
                </a>
              </div>
            ) : project.github === 'Privat' ? (
              <div className="portfolio-link portfolio-private">
                <FaGithub size={22} />
                Privat
              </div>
            ) : (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                <FaGithub size={22} />
                GitHub
              </a>
            )}

            {project.image && (
              <img src={project.image} alt={project.title} className="portfolio-image" />
            )}

            <div className="portfolio-title-wrapper">
              <h1 className="portfolio-title">{project.title}</h1>
              {project.subtitle && <h2 className="portfolio-subtitle">{project.subtitle}</h2>}
            </div>

            <div className="portfolio-tech">
              <div className="tech-tags">
                {project.tech.split(',').map((tag, i) => (
                  <span key={i} className="tech-tag">#{tag.trim()}</span>
                ))}
              </div>
            </div>

            <div className="portfolio-description">
              {formatDescription(project.description)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
