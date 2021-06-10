# @renci/react-esri-components

This contains Path and marker components for use with [@esri/react-arcgis](https://github.com/Esri/react-arcgis).

## installation

```bash
$ npm i @renci/react-arcgis-components
```

## usage

Note that `@esri/react-arcgis` is a peer dependency of this package.

### import

```jsx
import React from 'react'
import { Map } from '@esri/react-arcgis'
import { Marker, Path } from 'react-esri-components'
```

### use

```jsx
// path = [{ long: -78.738638, lat: 23.875623 }, ...]
// marker = { long: -78.738638, lat: 23.875623 }

<Map>
  <Path coordinates={ path } />
  <Marker key={ `marker-${ i }_-${ props.long },${ props.lat }` } { ...props } /
</Map>

```

## development

clone this repo.

```bash
$ git clone git remote add origin git@github.com:RENCI/react-arcgis-components.git
```

install dependencies.

```bash
$ npm i
```

start package local dev server.

```bash
$ npm start
```

start example local dev server..

```bash
$ cd example
$ npm start
```

the example pulls the package source from its parent directory with hot module reloading, so changes to the example project and changes to the package source triggers a browser reload.

