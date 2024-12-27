import { getPost } from "@/servises/page";
import Link from "next/link";
import React from "react";

const page: React.FC = async () => {
  const postData = await getPost();

  console.log(postData);

  return (
    <div>
      <h2 className="text-4xl text-red-600 text-center p-4"> All Post</h2>
      <div className="grid grid-cols-4 gap-6 ">
        {postData?.slice(0,20).map(({ title, body, id }) => (
          <div key={id} className=" p-2 border">
            <h2> Title: {title}</h2>
            <h2> body: {body}</h2>
            <button className="bg-red-500 p-2 text-white"> <Link href={`/post/${id}`}>See Details </Link> </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
