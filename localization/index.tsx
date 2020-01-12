import deLang from './entries/de';
import enLang from './entries/en';
interface ILang {
  Messages: { [key: string]: string };
  locale: string;
}

const Locale: { [index: string]: ILang } = {
  de: deLang,
  en: enLang
};

require('@formatjs/intl-pluralrules/polyfill');
require('@formatjs/intl-pluralrules/dist/locale-data/de');
require('@formatjs/intl-pluralrules/dist/locale-data/en');

export default Locale;
