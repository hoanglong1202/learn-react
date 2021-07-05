import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired,
};

function AlbumItem({ album }) {
  return (
    <div className="album">
      <div className="album__thumbnail">
        <img src={album.thumbnailURL} alt={album.title} />
      </div>
      <p className="album__title">{album.title}</p>
    </div>
  );
}

export default AlbumItem;
