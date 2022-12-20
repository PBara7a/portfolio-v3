interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
  priority: number;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  heroImage: Image;
  sentences: Array<string>;
  role: string;
  aboutImage: Image;
  aboutTitle: string;
  aboutBody: string;
  socials: Array<Social>;
}
