import BlogCard from "../components/BlogCard";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../features/blogs/blogSlice";
import { useEffect } from "react";
import moment from "moment";

const Blogs = () => {
  const dispatch = useDispatch();
  const blogsState = useSelector((state) => state.blog.blogs);
  const getAllBlogInStore = () => {
    dispatch(getAllBlog());
  };

  useEffect(() => {
    getAllBlogInStore();
  }, []);

  console.log(blogsState);
  return (
    <>
      <Meta title="blogs" />
      <BreadCrumb title="blogs" />
      <div className="blogs-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card">
                <h3 className="filter-title">Find By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                {blogsState?.map((item) => {
                  return (
                    <div className="col-6 mb-3" key={item?._id}>
                      <BlogCard
                        id={item?._id}
                        title={item?.title}
                        description={item?.description}
                        date={moment(item?.createdAt).format(
                          "MMMM Do YYYY,h:mm a"
                        )}
                        image={item?.images[0]?.url}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
