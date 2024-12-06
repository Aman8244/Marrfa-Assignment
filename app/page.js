import BlogTitleCard from "@/components/BlogTitleCard";
import axios from "axios";
import { use } from "react";

const fetchData = async () => {
  const response = await axios.get(`${process.env.Domain_URL}/api/fakedata/get`);
  return response.data
}
export default function Home() {
  const data = use(fetchData());
  return (
    <main>
      <div>
        <div className="flex items-center justify-center md:w-[70%] md:mx-[15%]">
          <form className="">
            <div className="flex space-x-2 items-center justify-center py-8">
              <input type="text" placeholder="Search titles, blogs..." className="input input-bordered w-full md:max-w-md sm:max-w-xs" />
              <button className="btn">
                <img width="35" height="30" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1" />
              </button>
            </div>
            {/* Blogs Card */}
            {data.blogdata.map((el,key)=>{
              return <div key={key} className="m-0 p-0">
                <BlogTitleCard {...el}/>
              </div>
            })}
            {/* pagination buttons */}
            <div className="join grid grid-cols-2">
              <button className="join-item btn btn-outline">Previous page</button>
              <button className="join-item btn btn-outline">Next</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
