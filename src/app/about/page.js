import dynamic from "next/dynamic";
const Achievement = dynamic(() => import("../../components/Achievements/Achievement"))
const Success = dynamic(() => import("../../components/Success/Success"))


const page = () => {
  return (
    <>
      <Success />
      <Achievement />            
    </>
  )
}

export default page