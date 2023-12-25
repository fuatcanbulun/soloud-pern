import React from "react";
import {
  MediaItemContainer,
  MediaItemImage,
  MediaItemTitle,
  MediaItemSubTitle,
  MediaItemButtons,
  MediaItemCounts,
} from "./style";
import Text from "../../atoms/text";
import Icon from "../../atoms/icon";
import DynamicImage from "../../atoms/dynamicImage";
import Button from "../../molecules/button";
import usePlay from "../../../hooks/usePlay";
import { addFavorite } from "../../../services/favorites";

const MediaItem = ({ id, title, artist, likes, image }) => {
  const { playVideo } = usePlay();

  return (
    <MediaItemContainer>
      <MediaItemImage>
        <DynamicImage image={image} width={50} height={50} />
      </MediaItemImage>
      <MediaItemTitle>
        <Text
          label={title}
          height="30px"
          lineHeight="30px"
          fontSize="1rem"
          color="textPrimary"
        />
      </MediaItemTitle>
      <MediaItemSubTitle>
        <Text
          label={artist}
          height="20px"
          lineHeight="20px"
          fontSize="0.8rem"
          color="textSecondary"
        />
      </MediaItemSubTitle>
      <MediaItemCounts>
        <Text label={likes} size="md" color="textPrimary" />
        <Icon data="FiUser" size="sm" color="textSecondary" />
      </MediaItemCounts>
      <MediaItemButtons>
        <Button
          size="xs"
          icon="FiPlay"
          iconColor="textPrimary"
          onClick={() => playVideo(id)}
        />
      </MediaItemButtons>
    </MediaItemContainer>
  );
};

export default MediaItem;
