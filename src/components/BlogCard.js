import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className="col-3">
            <div className="blog-card">
                <div className="card-image">
                    <img src="images/blog-1.jpg" alt="blog" className="img-fluid"/>
                </div>
                <div className="blog-content">
                    <p className="date">1 Dec, 2023</p>
                    <h5 className="title">A beautiful sunday morning renaissance</h5>
                    <p className="desc">This is good product in next year, I hope it will become a populor in the future</p>
                    <Link className="button">Read More</Link>
                </div>
            </div>
        </div>
    )
};

export default BlogCard;