import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";
import Row from "../../components/atoms/row";
import Column from "../../components/atoms/column";
import Text from "../../components/atoms/text";
import MediaItem from "../../components/organisms/mediaItem";
import PieChart from "../../components/organisms/pieChart";
import { useStore } from "../../contexts/StoreContext";
import { getVideos } from "../../services/videos";
import { getCategories } from "../../services/categories";

const Trends = () => {
  const [top10, setTop10] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const store = useStore();

  useEffect(() => {
    getAllVideos();
  }, []);

  const getAllVideos = async () => {
    const videosResponse = await getVideos();

    const categoriesResponse = await getCategories();

    for (const category of categoriesResponse) {
      let likesPerCategory = 0;
      for (const video of videosResponse) {
        if (video.category_id == category.id) {
          likesPerCategory = likesPerCategory + parseInt(video.likes);
        }
      }
      category.likes = likesPerCategory;
    }

    setTop10(
      videosResponse
        .sort((a, b) => b.likes - a.likes)
        .filter((item, index) => index < 10)
    );

    setGraphData(
      categoriesResponse.map((category) => {
        return {
          ...category,
          y: category.likes,
        };
      })
    );
  };

  return (
    <PageLayout>
      <Row padding="30px" wrap="true">
        <Column
          xs={24}
          sm={24}
          md={12}
          lg={12}
          direction="column"
          justify="center"
          align="center"
        >
          <Text label="Distribution" color="textPrimary" size="lg" />
          <PieChart title="Total Likes" data={graphData} />
        </Column>
        <Column xs={24} sm={24} md={12} lg={12} direction="column">
          <Text label="Top 10" color="textPrimary" size="lg" />
          {top10.map((item, index) => (
            <MediaItem
              key={index}
              id={item.id}
              favorite={store.favorites.includes(item.id)}
              title={item.title}
              image={item.image}
              artist={item.artist}
              likes={item.likes}
            />
          ))}
        </Column>
      </Row>
    </PageLayout>
  );
};

export default Trends;
