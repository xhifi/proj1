import { Link as RRLink } from "react-router-dom";

const Link = ({ children, to, ...rest }) => {
  const isExternal = to.startsWith("http");
  if (isExternal) {
    return (
      <a target="blank" rel="noreferrer" href={to} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <RRLink to={to} {...rest}>
      {children}
    </RRLink>
  );
};

export default Link;
