import { useState } from "react";
import Link from "./core/Link";

const navigationData = [
  { icon: "", name: "Home", path: "/" },
  { icon: "", name: "About", path: "/about" },
  { icon: "", name: "Blog", path: "/blog" },
  { icon: "", name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-fluid px-4 m-0 py-2 bg-info">
      <div className="d-flex align-items-center flex-column">
        <h3 className="">Logo</h3>

        <button
          className="btn btn-sm btn-warning mb-2"
          onClick={handleMenuOpen}
        >
          Open
        </button>
        {menuOpen && (
          <nav>
            <ul className="list-unstyled mb-0">
              {navigationData.map((obj, index) => {
                return (
                  <li>
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
          </nav>
        )}
      </div>
    </div>
  );
};
export default Navigation;
