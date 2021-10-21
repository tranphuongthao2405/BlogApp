import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./DetailPost.scss";
import { useParams } from "react-router-dom";
import { posts } from "../../constant/index";
import { Container } from "reactstrap";

DetailPost.propTypes = {};

function DetailPost(props) {
  const { id } = useParams();
  const [data, setData] = useState();

  // TODO: get real post from database based on id
  // this just mock code to get post
  useEffect(() => {
    setData(posts.find((x) => x.id === +id));
  }, []);

  return (
    <div className="detail-post">
      {data && (
        <Container>
          <img src={data.image}></img>
          <div>
            <div className="detail-post__title">{data.title}</div>
            <div className="detail-post__title-icon">some icons here</div>
          </div>
          <div className="detail-post__description">some description here</div>
        </Container>
      )}
    </div>
  );
}

export default DetailPost;
