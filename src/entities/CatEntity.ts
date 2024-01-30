interface Category {
  id: number;
  name: string;
}

export interface CatEntity {
  breeds: Array<any>;
  categories?: Category[];
  id: string;
  url: string;
  width: number;
  height: number;
}