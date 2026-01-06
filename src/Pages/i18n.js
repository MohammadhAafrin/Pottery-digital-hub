// src/Pages/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      govt_schemes: "Government Schemes",
      search_schemes: "Search schemes...",
      all_categories: "All Categories",
      business: "Business",
      housing: "Housing",
      employment: "Employment",
      agriculture: "Agriculture",
      no_schemes_found: "No schemes found",

      // ✅ Scheme Titles and Descriptions in English
      "Startup India Scheme": "Startup India Scheme",
      "Supports startups with funding, mentorship, and incubation.": "Supports startups with funding, mentorship, and incubation.",

      "Pradhan Mantri Awas Yojana": "Pradhan Mantri Awas Yojana",
      "Affordable housing for urban and rural citizens.": "Affordable housing for urban and rural citizens.",

      "Mahatma Gandhi National Rural Employment Guarantee Act": "Mahatma Gandhi National Rural Employment Guarantee Act",
      "Provides employment opportunities in rural areas.": "Provides employment opportunities in rural areas.",

      "PM Vishwakarma Kaushal Samman Yojana": "PM Vishwakarma Kaushal Samman Yojana",
      "Aims to support traditional artisans and craftspeople with training, tools, credit, and market access for their skill development and livelihood enhancement.":
        "Aims to support traditional artisans and craftspeople with training, tools, credit, and market access for their skill development and livelihood enhancement.",
    },
  },

  te: {
    translation: {
      govt_schemes: "ప్రభుత్వ పథకాలు",
      search_schemes: "పథకాలను వెతకండి...",
      all_categories: "అన్ని వర్గాలు",
      business: "వ్యాపారం",
      housing: "గృహ నిర్మాణం",
      employment: "ఉద్యోగం",
      agriculture: "వ్యవసాయం",
      no_schemes_found: "ఏ పథకాలు కనబడలేదు",

      // ✅ Scheme Titles and Descriptions in Telugu
      "Startup India Scheme": "స్టార్టప్ ఇండియా పథకం",
      "Supports startups with funding, mentorship, and incubation.": "నిధులు, మార్గదర్శకత్వం మరియు ఇన్క్యుబేషన్ ద్వారా స్టార్టప్‌లకు మద్దతు ఇస్తుంది.",

      "Pradhan Mantri Awas Yojana": "ప్రధాన మంత్రి ఆవాస్ యోజన",
      "Affordable housing for urban and rural citizens.": "పట్టణ మరియు గ్రామీణ ప్రజలకు చవక గృహ వసతి అందిస్తుంది.",

      "Mahatma Gandhi National Rural Employment Guarantee Act": "మహాత్మా గాంధీ జాతీయ గ్రామీణ ఉపాధి హామీ చట్టం",
      "Provides employment opportunities in rural areas.": "గ్రామీణ ప్రాంతాలలో ఉపాధి అవకాశాలను అందిస్తుంది.",

      "PM Vishwakarma Kaushal Samman Yojana": "పీఎం విశ్వకర్మ కౌశల్ సత్కార్ యోజన",
      "Aims to support traditional artisans and craftspeople with training, tools, credit, and market access for their skill development and livelihood enhancement.":
        "సాంప్రదాయ కళాకారులు మరియు శిల్పకారులకు శిక్షణ, పరికరాలు, రుణం మరియు మార్కెట్ ప్రాప్తితో మద్దతు ఇవ్వడం లక్ష్యం.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
