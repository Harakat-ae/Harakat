import dynamic from "next/dynamic";
const Section = dynamic(() => import("../../components/share/section"))

const page = () => {
  return (
    <Section>
        <h1>Blog</h1>
    </Section>
  )
}

export default page