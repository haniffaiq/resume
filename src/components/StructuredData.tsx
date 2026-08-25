import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skill-groups";

/**
 * schema.org JSON-LD describing Hanif as a Person.
 *
 * This is what lets Google treat the site as an authoritative source for the
 * name rather than as an unattributed page: `sameAs` ties it to the LinkedIn
 * and GitHub profiles, and `knowsAbout` / `worksFor` supply the entity facts.
 * It is generated from the same data the UI renders, so it cannot drift.
 *
 * The build prerenders the app, so this lands in the static HTML where every
 * crawler can read it without executing JavaScript.
 */
const StructuredData = () => {
  const url = profile.siteUrl;

  const [currentRole, ...pastRoles] = experiences;

  const person = {
    "@type": "Person",
    "@id": `${url}/#person`,
    name: profile.name,
    jobTitle: profile.jobTitle,
    description: profile.summary,
    url,
    image: `${url}${profile.imagePath}`,
    email: profile.contact.email.href.replace("mailto:", ""),
    telephone: profile.contact.phone.value,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    sameAs: [profile.socials.linkedin.href, profile.socials.github.href],
    knowsAbout: skills.map((skill) => skill.name),
    alumniOf: profile.education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.school.split(" - ")[0],
    })),
    worksFor: {
      "@type": "Organization",
      name: currentRole.company,
    },
    hasOccupation: [currentRole, ...pastRoles].map((role) => ({
      "@type": "Occupation",
      name: role.position,
      occupationLocation: { "@type": "Place", name: role.location },
availableAtOrIn: { "@type": "Organization", name: role.company },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: `${profile.name} Portfolio`,
        inLanguage: "en",
        publisher: { "@id": `${url}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}/#profilepage`,
        url,
        name: `${profile.name} | ${profile.jobTitle}`,
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#person` },
        primaryImageOfPage: `${url}${profile.imagePath}`,
      },
      {
        "@type": "ItemList",
        "@id": `${url}/#projects`,
        name: `Projects by ${profile.name}`,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            dateCreated: project.year,
            keywords: project.tech.join(", "),
            creator: { "@id": `${url}/#person` },
            ...(project.link ? { url: project.link } : {}),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is data, not markup; "<" is escaped so the JSON
      // can never terminate the surrounding script tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default StructuredData;
