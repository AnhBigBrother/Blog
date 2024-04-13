import React, { useEffect, useState } from "react";

const Blogs = (props) => {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    document.title = "Bro | Blogs"
    fetch('http://localhost:4000/api/v1/blogs?page=0', {
      method: 'GET'
    }).then(res => res.json())
    .then(data => {setBlogs(data); console.log(data);})
  }, []);
  return (
    <div className="flex flex-col justify-start items-start py-8">
      <h1 className="font-lexend font-bold text-3xl lg:text-4xl">BLOG</h1>
      <h3>
        "Share your knowledge. It is a way to achieve immortality" - Dailai Lama
      </h3>
    </div>
  );
};

export default Blogs;
