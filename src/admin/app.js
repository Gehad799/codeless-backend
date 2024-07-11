import logo from "./extensions/android-chrome-192x192.png"
const config = {
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo,
  },
  // Replace the favicon
  head: {
    favicon: logo,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo,
  },
  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Codeless Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "Back-End CMS",

      "Auth.form.welcome.title": "Welcome to Codeless",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
