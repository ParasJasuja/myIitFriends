import React, { useEffect, useState } from "react";
import ConnectionImageBox from "../components/ConnectionImageBox";
import ProfileBar from "../components/ProfileBar";
import ResourcesRedirect from "../components/ResourcesRedirect";
import VideoThumbnailCard from "../components/VideoThumbnailCard";
import GridRowContainer from "../Hoc/GridRowContainer";
import VideosGridContainer from "../Hoc/VideosGridContainer";
import "../Styles/ViewConnections.css";

function ViewConnections() {
  const [connections, setCnnections] = useState(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setCnnections(() => {
      var con = [
        <ConnectionImageBox
          imgUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          name="Name Surname"
          selected
        />,
      ];
      for (var i = 0; i < 10; i++) {
        con.push(
          <ConnectionImageBox
            imgUrl={
              "https://images.pexels.com/photos/22045" +
              i +
              "/pexels-photo-22045" +
              i +
              ".jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name="Name Surname"
          />
        );
      }
      return con;
    });
  }, []);

  return (
    <div className="ViewConnections">
      <div className="connections-list">{connections}</div>
      <div className="connection-discription">
        <ProfileBar conProfile />
        <GridRowContainer>
          <div className="box-container">
            <ResourcesRedirect name="Notes" />
            <ResourcesRedirect name="Books" />
            <ResourcesRedirect name="References" />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
        </GridRowContainer>
        <VideosGridContainer heading="All Videos">
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          <div className="box-container">
            <VideoThumbnailCard />
          </div>
          {/* <VideoThumbnailCard />
          <VideoThumbnailCard />
          <VideoThumbnailCard />
          <VideoThumbnailCard />
          <VideoThumbnailCard />
          <VideoThumbnailCard />
          <VideoThumbnailCard />
          <VideoThumbnailCard />
          <VideoThumbnailCard />
          <VideoThumbnailCard />
          <VideoThumbnailCard />
          <VideoThumbnailCard /> */}
        </VideosGridContainer>
      </div>
    </div>
  );
}

export default ViewConnections;
