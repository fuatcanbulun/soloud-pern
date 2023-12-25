import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";
import Map from "../../components/organisms/map";
import MapItem from "../../components/molecules/mapItem";
import { fromLonLat } from "ol/proj";
import { Get } from "../../services/requests";

// const mapItems = [
//   {
//     id: 1,
//     name: "April Oneal",
//     imageCode: "portrait01",
//     song: "Cooped Up",
//     pos: [10.37, 48.21],
//   },
//   {
//     id: 2,
//     name: "Amy White",
//     imageCode: "portrait02",
//     song: "La Sonora Dinamita",
//     pos: [15.37, 50.18],
//   },
//   {
//     id: 3,
//     name: "Bengi Yılmaz",
//     imageCode: "portrait03",
//     song: "Anti-Hero",
//     pos: [2.31, 47.21],
//   },
//   {
//     id: 4,
//     name: "Patrick Luc",
//     imageCode: "portrait04",
//     song: "Bring Me The Horizon",
//     pos: [23.37, 44.21],
//   },
//   {
//     id: 5,
//     name: "Jürgen Klaus",
//     imageCode: "portrait05",
//     song: "I Ain’t Worried",
//     pos: [6.32, 44.53],
//   },
//   {
//     id: 6,
//     name: "Raphaël Luis",
//     imageCode: "portrait06",
//     song: "These Are The Ways",
//     pos: [15.37, 47.2],
//   },
// ];

const MusicMap = () => {
  const [onlines, setOnlines] = useState([]);

  useEffect(() => {
    getAllMedia();
  }, []);

  useEffect(() => {
    console.log("onlines", onlines);
  }, [onlines]);

  const getAllMedia = async () => {
    Get(
      "onlines",
      (response) => setOnlines(response),
      (error) => console.log(error)
    );
  };

  return (
    <PageLayout>
      <Map center={fromLonLat([14.03, 47.01])} zoom={6} data={onlines}></Map>
      {onlines.map((item, index) => (
        <MapItem
          key={index}
          id={item.id}
          user={item.user_name}
          title={item.video_title}
          image={item.image}
        />
      ))}
    </PageLayout>
  );
};
export default MusicMap;
