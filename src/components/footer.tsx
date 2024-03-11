export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500 mt-20">
      <small className="mb-2 text-xs">
        &copy;{year} Adam Blahout. All Rights Reserved{" "}
      </small>
      <p>
        <span></span>
      </p>
    </footer>
  );
}
