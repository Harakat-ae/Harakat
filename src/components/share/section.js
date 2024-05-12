
const Section = ({children , style}) => {
  return (
    <section className={`p-4 w-full my-12 ${style}`}>
        {children}
    </section>
  )
}

export default Section