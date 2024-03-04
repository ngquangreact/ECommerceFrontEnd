import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../features/blogs/blogSlice";
import { useEffect } from "react";

const SingleBlog = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  const blogState = useSelector((state) => state.blog.blog);
  const getBlogInDb = (blogId) => {
    dispatch(getBlog(blogId));
  };
  useEffect(() => {
    getBlogInDb(getBlogId);
  }, []);
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <div className="Single-Blog-Wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card ">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <AiOutlineArrowLeft className="fs-4" />
                  Go back to Blogs
                </Link>
                <h3 className="title">{blogState?.title}</h3>
                <img
                  src={blogState?.images[0]?.url}
                  alt="blog-1"
                  className="img-fluid"
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: blogState?.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
