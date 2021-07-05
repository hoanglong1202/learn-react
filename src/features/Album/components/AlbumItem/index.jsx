import React from "react";
import PropTypes from "prop-types";

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired,
};

function AlbumItem({ album }) {
  return (
    <li key={album.id}>
      <img src={album.thumbnailURL} alt={album.title} />
      <p>{album.title}</p>
    </li>
  );
}

export default AlbumItem;
