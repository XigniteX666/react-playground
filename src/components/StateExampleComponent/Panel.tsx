export interface PanelProps {
  title: string;
  children?: string;
  isActive: boolean;
  onShow: React.MouseEventHandler<HTMLButtonElement>;
}

export const Panel = ({ title, isActive, children, onShow }: PanelProps) => {
  return (
    <>
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? (
          <>
            <p>{children}</p>
          </>
        ) : (
          <>
            <button onClick={onShow}>Show</button>
          </>
        )}
      </section>
    </>
  );
};
