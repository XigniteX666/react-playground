export interface ContentProps {
  content: string;
}

export const ContentComponent = ({ content }: ContentProps) => {
  return <div>{content}</div>;
};
