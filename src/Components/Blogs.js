import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);
  console.log("Printing inside Blogs");
  console.log(posts);
  return (
    <div className="w-11/12 max-w-[670px] py-3 flex flex-col gap-y-7">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((posts) => {
          return (
            <div key={posts.id}>
              <p className="font-bold text-sm">{posts.title}</p>
              <p>
                By <span className="italic">{posts.author}</span> on{" "}
                <span className="underline">{posts.category}</span>
              </p>
              <p className="text-[10px]">Posted On {posts.date}</p>
              <p className="text-[14px] mt-[10px]">{posts.content}</p>
              <div className="flex gap-x-3">
                {posts.tags.map((tag, index) => {
                  return (
                    <span
                      className="text-blue-500 underline font-bold text-[10px] "
                      key={index}
                    >{`#${tag}`}</span>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Blogs;
