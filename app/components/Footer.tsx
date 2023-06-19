type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full bg-slate-400 p-2 text-center">
      &#169;2023 -{" "}
      <a
        href="https://github.com/alfariiizi"
        className="text-blue-800 underline duration-150 hover:text-red-800">
        Alfarizi
      </a>
    </div>
  );
};

export default Footer;
