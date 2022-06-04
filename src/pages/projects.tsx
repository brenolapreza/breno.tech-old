import { NextPage } from "next";
import Header from "../components/Header";
import { ProjectsTemplate } from "../template/projects";

const Projects: NextPage = () => {
  return (
    <>
      <Header />
      <ProjectsTemplate />
    </>
  );
};

export default Projects;
