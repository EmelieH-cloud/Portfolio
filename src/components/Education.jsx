import React from 'react';
import '../styles/educationstyle.css';

const kandidatData = [
  {
    title: 'SYSA11 – Informatik: Introduktion till informationssystem (30,0 hp)',
    courses: [
      'Informationssystem som ämne, inlämningsuppgifter – 2,0 hp',
      'Informationssystem som ämne, artikel – 3,0 hp',
      'Företag, IT och digitalisering, case­uppgifter – 3,0 hp',
      'Företag, IT och digitalisering, inlämningsuppgifter – 3,0 hp',
      'IS-­projekt, IKT­ och verksamhetsuppgift – 2,0 hp',
      'Systemanalys och modellering, inlämningsuppgifter – 3,0 hp',
      'IS-­projekt, process­ och modelleringsuppgift – 2,0 hp',
      'Systemanalys och modellering, skriftlig tentamen – 3,0 hp',
      'Mjukvaruutveckling, skriftlig tentamen – 3,0 hp',
      'IS-­projekt, mjukvaruutvecklingsuppgift – 2,0 hp',
      'Lärandeportfölj och uppgifter – 1,0 hp',
      'Mjukvaruutveckling, inlämningsuppgifter – 3,0 hp',
    ],
  },
  {
    title: 'SYSA12 – Informatik: Informationssystem och verksamhet (30,0 hp)',
    courses: [
      'Organisation, verksamhet och IS, rapport – 3,0 hp',
      'Organisation, verksamhet och IS, skriftlig tentamen – 4,0 hp',
      'Gruppdynamik och kommunikation, skriftlig tentamen – 3,0 hp',
      'Projektledning, skriftlig tentamen – 4,0 hp',
      'Projektledning, gruppuppgifter – 3,0 hp',
      'Interaktionsdesign, skriftlig tentamen – 3,0 hp',
      'Interaktionsdesign, rapport – 3,0 hp',
      'IT-­rätt, skriftlig tentamen – 4,0 hp',
      'Lärandeportfölj, individuell uppgift – 1,0 hp',
      'IS-­projekt, rapport – 2,0 hp',
    ],
  },
  {
    title: 'SYSB13 – Informationssystem: IS­ och verksamhetsutveckling (30,0 hp)',
    courses: [
      'Verksamhetsarkitektur, skriftlig hemtentamen – 2,0 hp',
      'Verksamhetsarkitektur, skriftlig tentamen – 2,0 hp',
      'Databaser, skriftlig tentamen – 3,0 hp',
      'Databaser, uppgifter – 4,0 hp',
      'Processorienterad verksamhetsutveckling, skriftlig tentamen – 3,0 hp',
      'Processorienterad verksamhetsutveckling, uppgifter – 3,0 hp',
      'Affärssystem i teorin, skriftlig tentamen – 2,0 hp',
      'Affärssystem i praktiken, uppgifter – 3,0 hp',
      'IS-­projekt, rapport – 6,0 hp',
      'Obligatoriska uppgifter samt lärandeportfölj – 1,0 hp',
      'Informationssäkerhet, uppgifter – 1,0 hp',
    ],
  },
  {
    title: 'MKVA11 – Medie- och kommunikationsvetenskap: Grundkurs (30,0 hp)',
    courses: [
      'Kommunikationens samhälleliga villkor – 7,5 hp',
      'Mediernas utbud – 7,5 hp',
      'Medieanvändning i vardagen – 7,5 hp',
      'Kommunikation och interaktion – 7,5 hp',
    ],
  },
  {
    title: 'HARA24 – Handelsrätt: Dataskyddsjuridik (15,0 hp)',
    courses: [
      'Övningar',
      'Tentamen – 15,0 hp',
    ],
  },
  {
    title: 'INFC25 – Informatik: Människa-dator-interaktion, analys (7,5 hp)',
    courses: [
      'Tentamen – 3,0 hp',
      'Designuppgift – 3,0 hp',
      'Utvärderingsuppgift – 1,5 hp',
    ],
  },
  {
    title: 'INFC65 – Informatics: Information Architecture (7,5 hp)',
    courses: [
      'Skriftlig tentamen – 4,5 hp',
      'Inlämningsuppgifter – 3,0 hp',
    ],
  },
    {
    title: 'Informatik: Examensarbete (uppsats) för kandidatexamen',
    courses: [
      'Kandidatuppsats – 15,0 hp',
    ],
  },
];

const yhData = [
  {
    title: 'YH – Systemutvecklare .NET',
    courses: [
      'Personlig utveckling och färdighetsträning, grund (10 p)',
      'Personlig utveckling och färdighetsträning, fortsättning (5 p)',
      'Objektorienterad programmering, grund (C# & .NET) (50 p)',
      'Objektorienterad programmering, fortsättning (ASP.NET Core, versionshantering) (50 p)',
      'Databasutveckling (25 p)',
      'Gränssnittsutveckling (HTML5, CSS & JavaScript) (40 p)',
      'Introduktion till testning (20 p)',
      'Agil systemutveckling och kommunikation (15 p)',
      'Ämnesövergripande projekt (15 p)',
      'Molntjänster, säkerhet och AI (30 p)',
      'LIA 1 (60 p)',
      'LIA 2 (60 p)',
      'Examensarbete (20 p)',
    ],
  },
];

const splitCourseAndHp = (courseStr) => {
  const regex = /(.*?)(?:\s*[\-\–]\s*|\s*\()(\d+[.,]?\d*)\s*(hp|p)\)?$/i;
  const match = courseStr.match(regex);
  if (match) {
    return {
      name: match[1].trim(),
      points: `${match[2]} ${match[3].toLowerCase()}`,
    };
  }
  return { name: courseStr, points: '' };
};

const Education = () => {
  return (
    <div className="education-wrapper">
      <div className="education-column">
        <h1 className="title">Kandidatexamen i informatik</h1>
        <h3>Lunds universitet</h3>
        {kandidatData.map((courseGroup, index) => (
          <section key={index} className="course-section">
            <h2 className="course-title">{courseGroup.title}</h2>
            <table className="course-table">
              <tbody>
                {courseGroup.courses.map((course, idx) => {
                  const { name, points } = splitCourseAndHp(course);
                  return (
                    <tr key={idx}>
                      <td className="course-name">{name}</td>
                      <td className="course-points">{points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        ))}
      </div>

      <div className="education-column">
        <h1 className="title">Systemutvecklare .NET</h1>
        <h3>Newton Kompetensutveckling</h3>
        {yhData.map((courseGroup, index) => (
          <section key={index} className="course-section">
            <h2 className="course-title">{courseGroup.title}</h2>
            <table className="course-table">
              <tbody>
                {courseGroup.courses.map((course, idx) => {
                  const { name, points } = splitCourseAndHp(course);
                  return (
                    <tr key={idx}>
                      <td className="course-name">{name}</td>
                      <td className="course-points">{points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Education;
