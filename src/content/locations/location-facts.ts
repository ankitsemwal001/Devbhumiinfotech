export interface LocalFAQ {
  question: string;
  answer: string;
}

export interface LocalProofPoint {
  clientName: string;
  projectTitle: string;
  description: string;
}

export interface CityLocationFacts {
  citySlug: string;
  cityName: string;
  district: string;
  localBusinessTypes: string[];
  localFaqs: LocalFAQ[];
  neighbouringAreas: string[];
  proofPoint: LocalProofPoint | null;
  notes: string;
}

export const locationFactsMap: Record<string, CityLocationFacts> = {
  rishikesh: {
    citySlug: "rishikesh",
    cityName: "Rishikesh",
    district: "Dehradun",
    localBusinessTypes: [
      "Yoga teacher training (YTT) schools and meditation ashrams",
      "Riverside resorts, retreat centers, and eco-camps",
      "White-water rafting and Himalayan adventure agencies",
      "Ayurvedic clinics and organic wellness cafes",
      "Regional tour and pilgrimage travel operators",
    ],
    localFaqs: [
      {
        question: "Can we schedule in-person consultations in Rishikesh?",
        answer:
          "Yes. Our headquarters is located in Rishikesh on Haridwar Road. We welcome local clients for in-person project discovery, architectural reviews, and technical discussions by appointment.",
      },
      {
        question: "How do your digital solutions support seasonal tourism cycles in Rishikesh?",
        answer:
          "We engineer booking workflows and local search strategies tailored for peak pilgrimage and yoga seasons, ensuring fast inquiry turnaround and international traveler accessibility.",
      },
      {
        question: "Do you build multilingual websites for international wellness travelers in Rishikesh?",
        answer:
          "Yes. We develop internationalized web platforms with automated language switching and currency handling to accommodate visitors from across the globe.",
      },
    ],
    neighbouringAreas: [
      "Tapovan",
      "Laxman Jhula",
      "Ram Jhula",
      "Muni Ki Reti",
      "Swarg Ashram",
      "Triveni Ghat",
      "Dhalwala",
      "Gumaniwala",
    ],
    proofPoint: null,
    notes:
      "Operational headquarters. Highest concentration of wellness retreats, yoga schools, and adventure tourism businesses in the region.",
  },
  dehradun: {
    citySlug: "dehradun",
    cityName: "Dehradun",
    district: "Dehradun",
    localBusinessTypes: [
      "IT companies, software firms, and tech startups in IT Park",
      "Higher education colleges, universities, and residential schools",
      "Private multi-specialty hospitals and diagnostic laboratories",
      "Commercial real estate developers and architectural practices",
      "Retail showrooms, restaurants, and regional consumer brands",
    ],
    localFaqs: [
      {
        question: "How does Devbhoomi Infotech serve businesses in Dehradun?",
        answer:
          "We serve clients across Dehradun directly from our base in Rishikesh, less than an hour away. We conduct project discovery meetings via video conference and arrange on-site sessions in Dehradun as required.",
      },
      {
        question: "Can you help our Dehradun institution or business improve local search rankings?",
        answer:
          "Yes. We implement technical on-page SEO, Google Business Profile optimization, and localized schema markup targeting search queries across Rajpur Road, Jakhan, IT Park, and the wider Doon Valley.",
      },
      {
        question: "Do you develop custom web applications for educational institutions in Dehradun?",
        answer:
          "Yes. We build responsive institutional portals, admissions inquiry funnels, and student information management dashboards built with modern web frameworks.",
      },
    ],
    neighbouringAreas: [
      "Rajpur Road",
      "IT Park",
      "Sahastradhara Road",
      "Clock Tower",
      "Paltan Bazaar",
      "GMS Road",
      "Ballupur",
      "Jakhan",
      "Clement Town",
    ],
    proofPoint: null,
    notes:
      "Service area. State administrative capital with significant educational, healthcare, and commercial technology requirements.",
  },
  haridwar: {
    citySlug: "haridwar",
    cityName: "Haridwar",
    district: "Haridwar",
    localBusinessTypes: [
      "Industrial manufacturing units and suppliers in SIDCUL",
      "Pharmaceutical formulation laboratories and packaging units",
      "Hotels, dharamshalas, and pilgrimage travel operators near Har Ki Pauri",
      "Ayurvedic products and FMCG wholesale distributors",
      "Heavy engineering and precision component suppliers in BHEL Ranipur",
    ],
    localFaqs: [
      {
        question: "Do you offer web and automation services for industrial manufacturers in SIDCUL Haridwar?",
        answer:
          "Yes. We build B2B corporate platforms, digital product catalogs, and automated inquiry capture workflows designed for manufacturing and industrial enterprises in SIDCUL and BHEL Ranipur.",
      },
      {
        question: "How do you coordinate with clients located in Haridwar?",
        answer:
          "We serve Haridwar directly from our base in nearby Rishikesh. We maintain structured digital milestone reviews and provide on-site technical consultations when needed.",
      },
      {
        question: "Can you develop automated inquiry handling for pilgrimage hospitality in Haridwar?",
        answer:
          "Yes. We integrate messaging automation and direct inquiry management to handle high-volume traveler questions during major festival and pilgrimage periods.",
      },
    ],
    neighbouringAreas: [
      "SIDCUL Industrial Area",
      "BHEL Ranipur",
      "Jwalapur",
      "Shivalik Nagar",
      "Kankhal",
      "Har Ki Pauri",
      "Bahadrabad",
      "Ranipur More",
    ],
    proofPoint: null,
    notes:
      "Service area. Major industrial manufacturing center alongside traditional pilgrimage hospitality.",
  },
};

export function getLocationFacts(citySlug: string): CityLocationFacts | null {
  return locationFactsMap[citySlug.toLowerCase()] || null;
}
