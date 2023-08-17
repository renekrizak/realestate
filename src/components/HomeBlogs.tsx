import React from "react";
import "../style/compStyles/HomeBlogs.scss";

import BlogImage1 from "../assets/homeBlogs/Blog1.jpg";
import BlogImage2 from "../assets/homeBlogs/Blog2.jpg";
import BlogImage3 from "../assets/homeBlogs/Blog3.jpg";

const HomeBlogs: React.FC = () => {
  interface LatestBlog {
    image: string;
    alt: string;
    DatePublished: string;
    title: string;
    subitle: string;
  }

  const LatestBlogs: LatestBlog[] = [
    {
      image: BlogImage1,
      alt: "Latest blog",
      DatePublished: "25/03",
      title: "Top 10 Home Buying Mistakes to Avoid",
      subitle:
        "Navigate Wisely: Steer Clear of These Top 10 Home Buying Mistakes for a Smooth Real Estate Journey.",
    },
    {
      image: BlogImage2,
      alt: "Latest blog",
      DatePublished: "21/03",
      title: "How to Stage Your Home for a Quick Sale",
      subitle:
        "Navigate Wisely: Steer Clear of These Top 10 Home Buying Mistakes for a Smooth Real Estate Journey.",
    },
    {
      image: BlogImage3,
      alt: "Latest blog",
      DatePublished: "15/03",
      title: "5 Tips for First-Time Home Sellers",
      subitle:
        "Navigate Wisely: Steer Clear of These Top 10 Home Buying Mistakes for a Smooth Real Estate Journey.",
    },
  ];
  return (
    <section className="home-blogs-section">
      <div className="home-blogs-container">
        <div className="home-blogs-title">
          <h2>WHATS TRENDING</h2>
          <h1>Latest Blogs & Posts</h1>
        </div>
        <div className="home-blogs-content">
          {LatestBlogs.map((blog, index) => (
            <div className="latest-blog-card" key={index}>
              <div className="latest-blog-card-image">
                <img src={blog.image} alt={blog.alt} />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{blog.DatePublished}</h3>
                  </div>
                </div>
              </div>
              <div className="latest-blog-card-text">
                <h1>{blog.title}</h1>
                <h2>{blog.subitle}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;
