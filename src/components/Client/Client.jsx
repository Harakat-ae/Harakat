import dynamic from 'next/dynamic'
// import LogoClient from './LogoClient'
const LogoClient = dynamic(() => import('./LogoClient'));
import { clientDatALineOne, clientDatALineTwo, clientDatALineThree } from "../context/libdata"
// const { clientDatALineOne, clientDatALineTwo, clientDatALineThree } = dynamic(() => import("../context/libdata"));

const Client = () => {
  return (
    <>
        <LogoClient dir={false} time={5000} data={clientDatALineOne} />
        <LogoClient dir={true}  time={7000} data={clientDatALineTwo} />
        <LogoClient dir={false} time={6000} data={clientDatALineThree} />
    </>
  ) 
}

export default Client