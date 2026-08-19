export interface Blog {
  title: string;
  date: string;
  claps: number;
  tags: string[];
  link: string;
  isExternal: boolean;
}

export const blogsData: Blog[] = [
  {
    title: "Demo Blog Post",
    date: "Aug 2026",
    claps: 0,
    tags: ["Demo"],
    link: "/",
    isExternal: false,
  },
];
