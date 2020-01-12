import enMessages from '../locales/en.json';

interface ILang {
  Messages: { [key: string]: string };
  locale: string;
}

const Lang: ILang = {
  Messages: {
    ...enMessages
  },
  locale: 'en'
};

export default Lang;
