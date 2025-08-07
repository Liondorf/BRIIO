export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Translation {
  [key: string]: string;
}

export interface Translations {
  [languageCode: string]: Translation;
}