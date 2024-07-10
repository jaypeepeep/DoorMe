import React, { useState, useEffect } from "react";
import axios from "axios";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import ListingBesideMapCards from "../../components/cards/ListingBesideMapCards";
import backgroundImage from "../../assets/FindBg.png";
import mapLogo from "../../assets/mapLogo.png";
import logoImage from "../../assets/LogoImage.png";
import housingMap from "../../assets/Housing-Map.png";
import universityMap from "../../assets/University-Map.png";
import distanceMap from "../../assets/Distance-Map.png";
import FilterHome from "../../components/filterhome/FilterHome";

const FindDorms = () => {
  const [map, setMap] = useState(null);
  const [fromInput, setFromInput] = useState("");
  const [user, setUser] = useState(null);
  const [marker, setMarker] = useState(null);
  const [initialCenter, setInitialCenter] = useState(null);

  const universityCoordinates = {
    "Adamson University": [120.986, 14.6042],
    "Ateneo de Manila University": [121.0777, 14.6407],
    "De La Salle University": [120.9932, 14.5648],
    "De La Salle-College of Saint Benilde": [120.9951, 14.5636],
    "National University, Philippines": [120.9946, 14.6043],
    "Polytechnic University of the Philippines": [121.0108, 14.5979],
    "University of Santo Tomas": [120.9896, 14.6093],
    "University of the Philippines Diliman": [121.0657, 14.6537],
    "University of the Philippines Manila": [120.9918, 14.5806],
    "University of the Philippines System": [121.0657, 14.6537],
  };

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicGVybWFya3kiLCJhIjoiY2x5MW5lNTJzMHRkczJrcHo2NmprZzMwbSJ9.3vlFP5qZY7YBVQcjul9GIg";

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setFromInput(parsedUser.university);
    }

    const initializeMap = () => {
      const initialCenter =
        universityCoordinates[JSON.parse(storedUser).university];
      setInitialCenter(initialCenter);

      const mapInstance = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: initialCenter,
        zoom: 13,
        minZoom: 13,
      });

      mapInstance.addControl(new mapboxgl.NavigationControl());
      mapInstance.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        })
      );

      setMap(mapInstance);

      const initialMarkerElement = document.createElement("div");
      initialMarkerElement.style.width = "40px";
      initialMarkerElement.style.height = "40px";
      initialMarkerElement.style.backgroundImage = `url(${universityMap})`;
      initialMarkerElement.style.backgroundSize = "cover";
      initialMarkerElement.style.cursor = "pointer";

      const initialMarker = new mapboxgl.Marker(initialMarkerElement)
        .setLngLat(initialCenter)
        .addTo(mapInstance);
      setMarker(initialMarker);

      fetch("http://localhost:5000/api/housing")
        .then((response) => response.json())
        .then((data) => {
          data.forEach((house) => {
            const markerElement = document.createElement("div");
            markerElement.style.width = "35px";
            markerElement.style.height = "35px";
            markerElement.style.backgroundImage = `url(${housingMap})`;
            markerElement.style.backgroundSize = "cover";
            markerElement.style.cursor = "pointer";

            const marker = new mapboxgl.Marker(markerElement)
              .setLngLat([house.longitude, house.latitude])
              .addTo(mapInstance);

            marker.getElement().addEventListener("click", () => {
              fetchRoute(mapInstance, initialCenter, [
                house.longitude,
                house.latitude,
              ]);
            });
          });
        })
        .catch((error) => console.error("Error fetching housing data:", error));
    };

    if (!map) {
      initializeMap();
    }

    return () => map && map.remove();
  }, []);

  useEffect(() => {
    if (map && fromInput && universityCoordinates[fromInput]) {
      const newCenter = universityCoordinates[fromInput];
      setInitialCenter(initialCenter);
      map.setMaxBounds(null);
      map.setZoom(12);
      marker.setLngLat(newCenter);
      map.setCenter(newCenter);
      map.setMaxBounds(map.getBounds());
    }
  }, [fromInput, map]);

  const haversineDistance = (coords1, coords2) => {
    const toRad = (value) => (value * Math.PI) / 180;

    const R = 6371; // Radius of the Earth in kilometers
    const lat1 = toRad(coords1[1]);
    const lon1 = toRad(coords1[0]);
    const lat2 = toRad(coords2[1]);
    const lon2 = toRad(coords2[0]);

    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in kilometers
  };

  let distanceMarker;

  const fetchRoute = async (mapInstance, fromCoordinates, toCoordinates) => {
    try {
      const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${fromCoordinates[0]},${fromCoordinates[1]};${toCoordinates[0]},${toCoordinates[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

      const response = await fetch(url);
      const data = await response.json();

      // Extract the route from the response
      const route = data.routes[0].geometry;

      // Calculate the distance
      const distance = data.routes[0].distance / 1000; // convert meters to kilometers

      // Calculate the midpoint for displaying the distance
      const midPointIndex = Math.floor(route.coordinates.length / 2);
      const midPoint = route.coordinates[midPointIndex];

      if (mapInstance.getSource("route")) {
        mapInstance.getSource("route").setData({
          type: "Feature",
          geometry: route,
        });
      } else {
        mapInstance.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: route,
            },
          },
          paint: {
            "line-color": "#3887be",
            "line-width": 5,
          },
        });
      }

      // Remove the existing marker if it exists
      if (distanceMarker) {
        distanceMarker.remove();
      }

      // Create a custom marker element
      const el = document.createElement("div");
      el.className = "custom-marker";
      el.style.backgroundImage = `url(${distanceMap})`;
      el.style.width = "30px";
      el.style.height = "30px";
      el.style.backgroundSize = "100%";

      // Create a popup with the distance
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `Distance: ${distance.toFixed(2)} km`
      );

      // Create a new marker with the custom element and set the popup
      distanceMarker = new mapboxgl.Marker(el)
        .setLngLat(midPoint)
        .setPopup(popup)
        .addTo(mapInstance);
    } catch (error) {
      console.error("Error fetching the route:", error);
    }
  };

  return (
    <div className="w-full font-poppins pt-[10%] bg-blue-50 min-h-screen">
      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome to PahingaU!</h2>
          {user && <p className="text-xl">Logged in as: {user.email}</p>}
        </div>

        <div className="mb-8">
          <div className="max-w-3xl mx-auto flex items-center bg-white rounded-full shadow-md">
            {user && (
              <select
                className="flex-grow px-6 py-3 text-xl text-[#1A1A1A] rounded-l-full focus:outline-none"
                value={fromInput}
                onChange={(e) => setFromInput(e.target.value)}
              >
                <option value="" disabled>
                  Select University
                </option>
                {Object.keys(universityCoordinates).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        <div className="mb-16 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div
              id="map"
              className="h-[600px] w-full rounded-lg shadow-md"
            ></div>
          </div>
          <div
            className="lg:w-1/2 overflow-y-auto"
            style={{ maxHeight: "600px" }}
          >
            <ListingBesideMapCards />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FindDorms;
