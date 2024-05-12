import dynamic from "next/dynamic";
const Title = dynamic(() => import("../components/share/title_section/Title"))
const Success = dynamic(() => import("../components/Success/Success"))
const Client = dynamic(() => import("../components/Client/Client"))
const Projects = dynamic(() => import("../components/Projects/Projects"))
const Contact = dynamic(() => import("../components/contact/Contact"))
const TeamsSlider = dynamic(() => import("../components/teams/TeamsSlider"))
const Banner = dynamic(() => import("../components/Banner/Banner"))
const Achievement = dynamic(() => import("../components/Achievements/Achievement"))
const Servicesbub = dynamic(() => import("../components/Page_Service/design/Servicesbub"))
const RegisterComponent = dynamic(() => import("../components/share/RegisterComponent"))
const ServicesTest = dynamic(() => import("../components/Page_Service/design/ServicesTest"))

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <RegisterComponent />
       {/* <Title text={"success"} /> */}
       {/* <Success /> */}
       {/* <Title text={"Service"} /> */}
       {/* <ServicesTest /> */}
       {/* <Servicesbub /> */}
       {/* <Title text={"project"} /> */}
       <Projects />
       {/* <Client /> */}
       {/* <Teams /> */}
       {/* <TeamsSlider /> */}
       {/* <Achievement /> */}
       {/* <Banner /> */}
       {/* <Title text={"contact"} /> */}
       {/* <Contact /> */}
    </main>
  );
}
