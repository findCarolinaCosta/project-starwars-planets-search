import React from 'react';
import PlanetInfos from './PlanetInfos';

function Table() {
  return (
    <div>
      <table className="table m-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <PlanetInfos />
      </table>
    </div>
  );
}

export default Table;
