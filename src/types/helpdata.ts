export interface HelpData {
    title: string;
    description: string;
    contents: ContentItem[];
    sections: Section[];
  }
  
  export interface ContentItem {
    key: string;
    title: string;
  }
  
  export interface Section {
    key: string;
    title: string;
    description?: string;
    features?: string[];
    controls?: string[];
    control?: string;
    developers?: string[];
    mentors?: string[];
    testers?: string[];
    img?: string;
  }
  