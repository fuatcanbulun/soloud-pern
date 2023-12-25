import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";
import Video from "../../components/atoms/video";
import Text from "../../components/atoms/text";
import Space from "../../components/atoms/space";
import Row from "../../components/atoms/row";
import Column from "../../components/atoms/column";
import { useLocation } from "react-router-dom";
import { Get } from "../../services/requests";

const Detail = () => {
  const { state } = useLocation();
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    console.log("state", state);

    if (state) {
      getOneMedia(state);
    }
  }, [state]);

  const getOneMedia = async (id) => {
    console.log("id", id);
    await Get(
      `videos/${id}`,
      (response) => {
        console.log("response", response);
        setDetailData(response);
      },
      (error) => console.log(error)
    );
  };

  return (
    <PageLayout>
      <Row padding="30px 30px 0 30px">
        <Column xs={24} sm={24} md={24} lg={24} direction="column">
          <Text label={detailData?.artist} size="lg" color="textPrimary" />
          <Text label={detailData?.title} height={20} color="textSecondary" />
        </Column>
      </Row>
      <Row padding="30px">
        <Column xs={24} sm={24} md={24} lg={24}>
          <Video id={detailData?.youtube_id} />
        </Column>
      </Row>
    </PageLayout>
  );
};

export default Detail;
