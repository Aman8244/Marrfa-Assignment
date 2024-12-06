import DBConfig from "@/DBConfig/DBConfig";
import FakeBlogData from "@/models/FakeBlogData";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await DBConfig();
        const data = await FakeBlogData.find({});
        return NextResponse.json({
            blogdata:data
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Some error occured"
        });
    }    
}