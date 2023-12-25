import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";

import MediaBox from "../../components/organisms/mediaBox";
import Tabs from "../../components/organisms/tabs";
import Row from "../../components/atoms/row";
import Column from "../../components/atoms/column";
import { useStore } from "../../contexts/StoreContext";
import { Get } from "../../services/requests";

import { getFavorites } from "../../services/favorites";
import { getVideos } from "../../services/videos";
import { getCategories } from "../../services/categories";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [videos, setVideos] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [categories, setCategories] = useState([]);
  const store = useStore();

  useEffect(() => {
    getAllFavorites();
    getAllVideos();
    getAllCategories();
  }, []);

  const getAllVideos = async () => {
    setVideos(await getVideos());
  };
  const getAllFavorites = async () => {
    setFavorites(await getFavorites());
  };

  const getAllCategories = async () => {
    const response = await getCategories();
    setCategories(response);
    setActiveTab(response[0].id);
  };

  return (
    <PageLayout>
      <Row padding="30px 30px 0px 30px">
        <Column xs={24} sm={24} md={24} lg={24}>
          <Tabs
            data={categories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Column>
      </Row>
      <Row padding="0 30px" wrap="true">
        {videos
          .filter((item) => item.category_id === activeTab)
          .map((item, index) => (
            <MediaBox
              key={index}
              data={item}
              id={item.id}
              favorite={favorites.find(
                (favorite) => favorite.video_id == item.id
              )}
              title={item.title}
              artist={item.artist}
              image={item.image}
              refreshPage={() => {
                getAllVideos();
                getAllFavorites();
              }}
            />
          ))}
      </Row>
    </PageLayout>
  );
};

export default Dashboard;
