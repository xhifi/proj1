import RootLayout from "./layouts/RootLayout";
import { ServicesSelection } from "../components";

const servicesData = [
  {
    title: "HTML",
    description: "Structuring language for website and web pages",
    image: "",
    tag: "frontend",
  },
  {
    title: "ExpressJS",
    description: "Backend Server library written only in vanilla nodejs",
    image: "",
    tag: "backend",
  },
  {
    title: "CSS",
    description: "Provides styling for the structured markup of a web page",
    image: "",
    tag: "frontend",
  },
  {
    title: "Javascript",
    description: "Manipulates the DOM of a web page",
    image: "",
    tag: "frontend",
  },
  {
    title: "NodeJS",
    description:
      "Backend processing language written in Javascript running on V8",
    image: "",
    tag: "backend",
  },
  {
    title: "PostgreSQL",
    description:
      "Database written in CLang and provides a structured query language to CRUD data",
    image: "",
    tag: "backend",
  },
  {
    title: "React.JS",
    description:
      "Library written by facebook, maintained by opensource community, used to make interactive frontend websites, web pages and web applications",
    image: "",
    tag: "frontend",
  },
];

const Home = () => {
  return (
    <RootLayout>
      <ServicesSelection data={servicesData} />
    </RootLayout>
  );
};
export default Home;
