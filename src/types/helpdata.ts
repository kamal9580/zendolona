export interface HelpData {
    title: string;
    description: string;
    contents: string[];
    feature_list: FeatureList;
    opening_map: Section;
    search: Section;
    movement: MovementSection;
    zooming: ZoomingSection;
    inbound_navigation: Section;
    adjustable_pointer: Section;
    distance_finder: Section;
    credits: Credits;
  }
  
  interface FeatureList {
    title: string;
    features: string[];
  }
  
  interface Section {
    title: string;
    description: string;
  }
  
  interface MovementSection extends Section {
    controls: string[];
  }
  
  interface ZoomingSection extends Section {
    control: string;
  }
  
  interface Credits {
    title: string;
    developers: string[];
    mentors: string[];
    testers: string[];
  }
  