import dynamic from "next/dynamic";
const ProjectsPage = dynamic(() => import("../../components/Projects/ProjectsPage"))

const page = () => {
  return (
    <>
        <ProjectsPage />
    </>
  )
}

export default page