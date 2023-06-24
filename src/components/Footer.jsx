import Link from "./core/Link";

const footerData = [
  [
    { icon: "", name: "Home", path: "/" },
    { icon: "", name: "About", path: "/about" },
    { icon: "", name: "Blog", path: "/blog" },
    { icon: "", name: "Contact", path: "/contact" },
  ],
  [
    { icon: "", name: "Health Policy", path: "/" },
    { icon: "", name: "Security Policy", path: "/about" },
    { icon: "", name: "User Rights", path: "/blog" },
    { icon: "", name: "GDPR Scaling", path: "/contact" },
  ],
  [
    { icon: "", name: "Home", path: "/" },
    { icon: "", name: "About", path: "/about" },
    { icon: "", name: "Blog", path: "/blog" },
    { icon: "", name: "Contact", path: "/contact" },
  ],
];

const Footer = () => {
  return (
    <div className="container-fluid px-4 py-4 bg-warning">
      <div className="row row-cols-1">
        {footerData.map((list, index) => {
          return (
            <ul className="list-unstyled" key={index}>
              {list.map((obj, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={obj.path}
                      className="text-decoration-none text-dark"
                    >
                      {obj.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <div className="text-center">
        <span>Copyright Farmville&#174; #{Date.now()}</span>
      </div>
    </div>
  );
};
export default Footer;
