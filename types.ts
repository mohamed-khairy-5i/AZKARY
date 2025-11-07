
export interface Zikr {
  id: number;
  content: string;
  count: number;
  fadhil: string;
  transliteration?: string;
  translation?: string;
}

export interface Category {
  id: number;
  title: string;
  azkar: Zikr[];
}
