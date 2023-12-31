// import the original type declarations
import 'i18next'
import defaultTranslations from '../public/locales/en-US/translations.json'

export type defaultTranslationsKey = keyof typeof defaultTranslations

export interface I18nextCustomTypeOptions {
  returnNull: false
  // custom namespace type if you changed it
  defaultNS: 'translations'
  // custom resources type
  resources: {
    translations: typeof defaultTranslations
  }
}

// react-i18next versions higher than 11.11.0
declare module 'i18next' {
  // and extend them!
  interface CustomTypeOptions extends I18nextCustomTypeOptions {}
}
