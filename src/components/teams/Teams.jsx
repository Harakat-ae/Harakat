import Image from "next/image"
import { CardTeams } from "../context/libdata"
import "./Teams.css"

const Teams = () => {
  return (
    <div className="flex flex-wrap items-center justify-center my-10 p-4 gap-6">
      {
        CardTeams.map((team) => (
          <div className="w-52 p-2 glass rounded-2xl flex flex-col items-center  gap-2 card-team relative group" key={team.id}>
            <div className="w-full h-48 overflow-hidden rounded-xl gradient">
              <Image width={190} height={190} src={team.img} alt={`teams-harakat-${team.name}`} className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h2 className="text-xl capitalize text-center">{team.name}</h2>
              <h3 className="text-[12px] text-[#d6d5d5] capitalize">{team.position}</h3>
            </div>
          
            <div className="absolute -top-4 right-0 w-10 h-10 rotate-12 overflow-hidden">
              <Image width={40} height={40} src={`/assets/Logo/logo-${team.logo}.png`} alt="logo team" className="object-cover w-full h-full" />
            </div>
 
            {team.img2 &&
              <div className="w-48 h-80 absolute bottom-0 left-1/2 overflow-hidden transition-all duration-[350ms] opacity-0 -translate-x-1/2 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                <Image width={200} height={300} src={team.img2} alt={team.name} className="object-cover w-full h-full" />
              </div>
            }
          </div>

        ))
      }
    </div>
  )
}

export default Teams