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
    <>
      <div className="album-list">
        <h2>Maybe you like?</h2>
        <ul>
          {list.map((album) => (
            <li key={album.id}>
              <AlbumItem album={album} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AlbumList;
