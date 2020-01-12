import deMessages from '../locales/de.json';

interface ILang {
  Messages: { [key: string]: string };
  locale: string;
}

const Lang: ILang = {
  Messages: {
    ...deMessages
  },
  locale: 'de'
};

export default Lang;
