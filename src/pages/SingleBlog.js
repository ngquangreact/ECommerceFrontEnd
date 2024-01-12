import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineArrowLeft } from "react-icons/ai";
const SingleBlog = () => {
    return (
        <>
            <Meta title="Dinamic Blog Name"/>
            <BreadCrumb title="Dinamic Blog Name"/>
            <div className="Single-Blog-Wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card ">
                                <Link to="/blogs" className="d-flex align-items-center gap-10">
                                    <AiOutlineArrowLeft className="fs-4"/>
                                    Go back to Blogs
                                </Link>
                                <h3 className="title">A Beautiful Sunday Morning renaissance</h3>
                                <img
                                    src="images/blog-1.jpg"
                                    alt="blog-1"
                                    className="img-fluid"
                                />
                                <p>
                                    You are only as good as your last collection, Which is an anormous pressure
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SingleBlog;