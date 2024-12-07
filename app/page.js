import axios from "axios";
import { use } from "react";
import BlogsClient from "@/components/BlogPage";

const fetchData = async () => {
  const response = await axios.get(`${process.env.Domain_URL}/api/fakedata/get`);
  return response.data
}

export default function Home() {
  const data = use(fetchData());

  return (
    <BlogsClient data={data} />
  );
}
