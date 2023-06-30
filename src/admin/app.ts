
import Logo from "./extensions/valonkaupunki_logo.png";
import fi from "./extensions/translations/fi.json";

export default {
  config: {

    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: Logo,
    },

    // Replace the favicon
    head: {
      favicon: Logo,
    },

    // Add a new locale, other than "en"
    locales: ["en", "fi"],

    // Replace the Strapi logo in the main navigation
    menu: {
      logo: Logo,
    },

    // Override or extend the theme
    // theme: {
    //   dark: {
    //     colors: {
    //       primary100: '#f6ecfc',
    //       primary200: '#e0c1f4',
    //       primary500: '#ac73e6',
    //       primary600: '#9736e8',
    //       primary700: '#8312d1',
    //       danger700: '#b72b1a'
    //     },
    //   }
    // },

    translations: {
      fi: fi,
    },

    // Disable video tutorials
    // tutorials: false,

    // Disable notifications about new Strapi releases
    // notifications: { releases: false },
  },
  bootstrap() {},
};
