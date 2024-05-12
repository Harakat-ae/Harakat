import dynamic from "next/dynamic";
const ServicePage = dynamic(() => import("../../components/Page_Service/ServicePage"))



const page = () => {
  return (
    <>
      <ServicePage />   
    </>
  )
}

export default page