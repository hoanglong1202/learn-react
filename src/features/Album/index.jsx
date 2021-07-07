import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const list = [
    {
      id: 1,
      title: "Rap Việt - Thế hệ trẻ",
      thumbnailURL:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/e/7/1/de71da6b4d37c5daf0cc9e9f1da1771c.jpg",
    },
    {
      id: 1,
      title: "Rap Việt kết hợp cực chất",
      thumbnailURL:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/e/7/b/6e7b61e952ad97d05bbadfc7b8b3f77f.jpg",
    },
    {
      id: 1,
      title: "Hip-hop Now!",
      thumbnailURL:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/3/a/c/43ac0ceaa5f00bf2e54b24e44fb54072.jpg",
    },
  ];
  return <AlbumList list={list} />;
}

export default AlbumFeature;
