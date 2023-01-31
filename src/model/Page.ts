export default interface Page {
    id: number;
    title: Content;
    content: Content;
    date?: Date;
    status: string
  }

  export interface Content {
    rendered: string
  }