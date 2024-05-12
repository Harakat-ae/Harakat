import dynamic from 'next/dynamic'
const TeamsTest = dynamic(() => import('./TeamsTest'));
import { CardTeamsOne , CardTeamsTwo } from "../context/libdata"


const TeamsSlider = () => {
  return (
    <section className='w-full'>
        <TeamsTest team={CardTeamsOne} ltr={false} />
        <TeamsTest team={CardTeamsTwo} ltr={true}/>
    </section>
  )
}

export default TeamsSlider