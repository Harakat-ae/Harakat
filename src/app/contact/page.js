import dynamic from "next/dynamic";
const Contact = dynamic(() => import("../../components/contact/Contact"))


const page = () => {
  return (
    <>
        <Contact />
    </>
  )
}

export default page