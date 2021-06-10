import React from 'react'
import { Map } from '@esri/react-arcgis'
import { Marker, Path } from 'react-esri-components'
import { path, markers } from './map-data'

const ncCenter = { lat: 35.393809, long: -79.8431 }

const mapProps = {
  style: { overflow: 'hidden', height: '600px', width: '600px' },
  viewProperties: {
    center: [ncCenter.long, ncCenter.lat],
    zoom: 12,
  },
}

const App = () => {
  return (
    <Map { ...mapProps }>
      <Path coordinates={ path } />
      {
        markers.map((props, i) => (
          <Marker key={ `marker-${ i }_-${ props.long },${ props.lat }` } { ...props } />
        ))
      }
    </Map>
  )
}

export default App
