'use client';

import React, { useEffect, useState } from 'react';
import BlogTitleCard from './BlogTitleCard';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const BlogsClient = () => {
    const [data, setData] = useState();
    const [pageNo, setPageNo] = useState(1);
    const router = useRouter();
    const [tempData, setTempData] = useState(data);
    const [searchInput, setSearchInput] = useState("");
    const [filterCategory, setFilterCategory] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/fakedata/get`);
                setData(response.data);
                setTempData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div className='px-[1rem] min-h-screen bg-[#F1F0E8] md:mx-0'>
            <div className="flex flex-col gap-4 items-center justify-center w-full py-12">
                <div className="skeleton h-32 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
            </div>
        </div>;
    }
    const handleSearch = (e) => {
        e.preventDefault();
        let filteredData = data?.blogdata;

        if (searchInput.trim() !== "") {
            filteredData = filteredData.filter((blog) =>
                blog.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                blog.summary.toLowerCase().includes(searchInput.toLowerCase())
            );
        }

        if (filterCategory.trim() !== "") {
            filteredData = filteredData.filter((blog) =>
                blog.category.toLowerCase() === filterCategory.toLowerCase()
            );
        }



        setTempData({ blogdata: filteredData });
    };

    return (
        <div id={`${pageNo}`} className='px-[1rem] min-h-screen bg-[#F1F0E8] md:mx-0'>
            <form onSubmit={handleSearch} className='w-full'>
                <div className="flex flex-col w-full md:items-center md:justify-center md:flex-row  space-y-4 md:space-y-0 md:space-x-2  py-8">
                    <input
                        onChange={(e) => setSearchInput(e.target.value)}
                        id="searchbar"
                        type="text"
                        placeholder="Search titles, blogs..."
                        className="input input-bordered w-[100%]  md:max-w-md sm:max-w-xs"
                    />
                    <select
                        className="select select-bordered w-full md:max-w-xs"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {[...new Set(data?.blogdata.map(blog => blog.category))].map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <button type="submit" className="btn bg-[#89A8B2]">
                        <img
                            width="35"
                            height="30"
                            src="https://img.icons8.com/ios/50/search--v1.png"
                            alt="search"
                        />
                    </button>
                </div>
            </form>
            <div className="w-full md:w-[60%] md:mx-[20%] ">
                {tempData?.blogdata?.slice(pageNo * 20 - 20, pageNo * 20).map((el, key) => (
                    <div key={key} className="m-0 p-0">
                        <BlogTitleCard {...el} />
                    </div>
                ))}
                <div className="join grid grid-cols-2 py-12">
                    <button
                        className="join-item btn btn-outline"
                        disabled={pageNo === 1}
                        onClick={() => {
                            setPageNo((prev) => Math.max(1, prev - 1));
                            router.push(`/#${pageNo - 1}`);
                        }}
                    >
                        Previous
                    </button>
                    <button
                        className="join-item btn btn-outline"
                        onClick={() => {
                            setPageNo((prev) => prev + 1);
                            router.push(`/#${pageNo + 1}`);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
export default BlogsClient
