import React, { useState } from "react";

const data = [
  {
    name: "Madhya Pradesh",
    description: "Heart of India",
    cities: [
      {
        name: "Bhopal",
        description: "City of Lakes",
        landmarks: [
          { name: "Upper Lake", description: "Famous lake in Bhopal" },
          { name: "Van Vihar", description: "National Park" }
        ]
      },
      {
        name: "Indore",
        description: "Cleanest City",
        landmarks: [
          { name: "Rajwada", description: "Historical palace" },
          { name: "Sarafa", description: "Night food market" }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    description: "Land of Buddha",
    cities: [
      {
        name: "Gaya",
        description: "Religious city",
        landmarks: [
          { name: "Mahabodhi Temple", description: "UNESCO site" }
        ]
      },
      {
        name: "Bakraur",
        description: "Village near Bodh Gaya",
        landmarks: [
          { name: "Bakraur Site", description: "Historic place" }
        ]
      }
    ]
  }
];

function App() {
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  const selectedState = data[stateIndex];
  const selectedCity = selectedState.cities[cityIndex];
  const selectedLandmark = selectedCity.landmarks[landmarkIndex];

  return (
    <div>
      {/* STATE DROPDOWN */}
      <select
        id="state"
        value={stateIndex}
        onChange={(e) => {
          setStateIndex(Number(e.target.value));
          setCityIndex(0);
          setLandmarkIndex(0);
        }}
      >
        {data.map((state, index) => (
          <option key={index} value={index}>
            {state.name}
          </option>
        ))}
      </select>

      <div id="state-name">{selectedState.name}</div>
      <div id="state-description">{selectedState.description}</div>

      {/* CITY DROPDOWN */}
      <select
        id="city"
        value={cityIndex}
        onChange={(e) => {
          setCityIndex(Number(e.target.value));
          setLandmarkIndex(0);
        }}
      >
        {selectedState.cities.map((city, index) => (
          <option key={index} value={index}>
            {city.name}
          </option>
        ))}
      </select>

      <div id="city-name">{selectedCity.name}</div>
      <div id="city-description">{selectedCity.description}</div>

      {/* LANDMARK DROPDOWN */}
      <select
        id="landmark"
        value={landmarkIndex}
        onChange={(e) => setLandmarkIndex(Number(e.target.value))}
      >
        {selectedCity.landmarks.map((landmark, index) => (
          <option key={index} value={index}>
            {landmark.name}
          </option>
        ))}
      </select>

      <div id="landmark-name">{selectedLandmark.name}</div>
      <div id="landmark-description">{selectedLandmark.description}</div>
    </div>
  );
}

export default App;
