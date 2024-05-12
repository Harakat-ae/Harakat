"use client"
import { useEffect , useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {

    const mapRef = useRef(null);

    useEffect(() => {
        const initMap = async () =>{
            const loader = new Loader({
                apiKey: process.env.MAP_KEY_PUBLIC,
                version: 'weekly'
            });

            const { Map } = await loader.importLibrary('maps');

            const position = {
                lat: "25.185637455694593",
                lng: "55.26179242093373"
            }

            const mapOption = {
                center: position,
                zoom: 17,
                mapId: "NEXT_JS_MAP"
            }

            const map = new Map(mapRef, mapOption)
        }

        initMap();
    }, [])

  return (
    <div ref={mapRef} className="w-full">

    </div>
  )
}

export default Map