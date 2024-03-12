interface SectionHeadingProps {
  children: React.ReactNode;
}

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="font-medium text-3xl capitalize mb-8 text-center dark:text-gray-50">
      {children}
    </h2>
  );
}

export default SectionHeading;
