export type projectSlides = {
  src: string;
  id?: string;
  num?:number
  quote?: {
    title: string;
  };
};

export type ProjectDataType = {
  title: string;
  sections: {
    src: string;
    caption: string;
  }[];
};
