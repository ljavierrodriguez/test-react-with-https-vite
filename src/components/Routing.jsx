import React, { useEffect } from 'react'
import L from "leaflet";
import { useMap } from "react-leaflet";

const Routing = ({ pointA, pointB }) => {

    const map = useMap()

    useEffect(() => {
        if (!map) return;

        const routingControl = L.Routing.control({
            waypoints: [L.latLng(...pointA), L.latLng(...pointB)],
            routeWhileDragging: true
        }).addTo(map);

        return () => map.removeControl(routingControl);

    }, [])
    
    return null
}

export default Routing