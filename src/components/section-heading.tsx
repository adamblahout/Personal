interface SectionHeadingProps {
  children: React.ReactNode;
}

function Sectionheading({ children }: SectionHeadingProps) {
  return (
    <h2 className="font-medium text-3xl capitalize mb-8 text-center">
      {children}
    </h2>
  );
}

export default Sectionheading;
