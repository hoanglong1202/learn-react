import React from "react";
import PropTypes from "prop-types";
import AlbumItem from "../AlbumItem";
import "./style.scss";

AlbumList.propTypes = {
  list: PropTypes.array.isRequired,
};

function AlbumList(props) {
  const { list } = props;
  return (
    <ul className="album-list">
      {list.map((album) => (
        <AlbumItem album={album} />
      ))}
    </ul>
  );
}

export default AlbumList;
