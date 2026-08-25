export type Testimonial = {
  /** Recommendation text, copied verbatim from LinkedIn. */
  quote: string;
  name: string;
  /** The recommender's title on their LinkedIn profile. */
  role: string;
  /** How the recommender worked with Hanif, as stated on the recommendation. */
  relationship: string;
  /** Date the recommendation was given. */
  date: string;
  /** Public LinkedIn profile of the recommender, so the quote is verifiable. */
  profileUrl?: string;
};

/**
 * Real LinkedIn recommendations only, newest first.
 *
 * Source: https://www.linkedin.com/in/haniffaiq13/details/recommendations/
 * Copy each recommendation verbatim and keep the recommender's real name, their
 * role, and how they worked with Hanif. Never add placeholder quotes: the
 * section and its nav entry hide themselves while this list is empty.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I highly recommend Hanif for any data engineering role. They possess a strong technical background and are proficient in programming languages such as Python, SQL, and Java. Hanif has excellent problem-solving skills and the ability to work seamlessly with other teams. Their dedication to delivering high-quality work makes them a valuable asset to any organization.",
    name: "Putra Bangsa Widjanarko",
    role: "Art Director at Tsuki Software and Media House",
    relationship: "Reported directly to Hanif",
    date: "April 4, 2023",
  },
  {
    quote:
      "Hanif can learn many things so fast, especially in IT field. Recently he was learning about game development and he already surpassed me right now. He is a hard worker but also always happy to share his knowledge with people. He already taught me a lot about IoT, and I think he is an expert in microservice and backend engineering.",
    name: "Ikram Ukar",
    role: "Sales Engineer at Telkom Indonesia",
    relationship: "Worked with Hanif on different teams",
    date: "June 18, 2022",
  },
  {
    quote:
      "Hanif is a creative person and has a strong desire to learn and explore new things. He is very reliable person.",
    name: "Muhammad Dary Azhari",
    role: "Software Engineer II - iOS at Luno",
    relationship: "Studied together with Hanif",
    date: "November 29, 2020",
  },
];
