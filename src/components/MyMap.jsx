import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Routing from './Routing'

const MyMap = () => {
    const [position] = useState([-33.4148429, -70.6042378])
    const [position2] = useState([-33.41815977678377, -70.60599250889321])
    const [position3] = useState([-33.41051429703044, -70.56628465759438])



    return (
        <>
            <MapContainer zoom={13} scrollWheelZoom={false} center={position} style={{ width: '800px', height: '800px', margin: '0 auto' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Mi Casa
                    </Popup>
                </Marker>
                <Routing pointA={position} pointB={position3} />
            </MapContainer>
        </>
    )
}

export default MyMap