import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogFeaturedSingle = ({ singlePost }) => {
  return (
    <div className="blog-wrap mb-30 scroll-zoom">
      <div className="blog-img">
        <Link to={singlePost.url}>
          <img src="../../../public/assets/img/blog/blog-2.jpg" alt="" />
        </Link>
        <div className="blog-category-names">
          {singlePost.category.map((singleCategory, key) => {
            return (
              <span className="purple" key={key}>
                {singleCategory}
              </span>
            );
          })}
        </div>
      </div>
      <div className="blog-content-wrap">
        <div className="blog-content text-center">
          <h3>
            <Link to={singlePost.url}>{singlePost.title}</Link>
          </h3>
          <span>
            By <Link to={singlePost.authorUrl}>{singlePost.author}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

BlogFeaturedSingle.propTypes = {
  singlePost: PropTypes.shape({
    author: PropTypes.string,
    authorUrl: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.array,
  }),
};

export default BlogFeaturedSingle;
