import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";
import Row from "../../components/atoms/row";
import Column from "../../components/atoms/column";
import { useStore } from "../../contexts/StoreContext";
import MediaBox from "../../components/organisms/mediaBox";
import Text from "../../components/atoms/text";
import { getFavorites } from "../../services/favorites";
import { getVideo } from "../../services/videos";

const Favorites = () => {
  const store = useStore();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.log("fuatcan1");
    getAllFavorites();
  }, []);

  const getAllFavorites = async () => {
    console.log("fuatcan2");
    const data = [];
    for (const item of await getFavorites()) {
      console.log("fuatcan3", item);

      data.push(await getVideo(item.video_id));
    }
    console.log("fuatcan4", data);
    setFavorites(data);
  };

  return (
    <PageLayout>
      <Row padding="30px 30px 0 30px">
        <Column xs={24} sm={24} md={24} lg={24}>
          <Text label="Favorites" color="textPrimary" size="lg" />
        </Column>
      </Row>
      <Row padding="0 30px" wrap="true">
        {favorites.length &&
          favorites.map((item, index) => (
            <MediaBox
              key={index}
              id={item.id}
              favorite={true}
              title={item.title}
              artist={item.artist}
              image={item.image}
              refreshPage={() => getAllFavorites()}
            />
          ))}
      </Row>
    </PageLayout>
  );
};

export default Favorites;
