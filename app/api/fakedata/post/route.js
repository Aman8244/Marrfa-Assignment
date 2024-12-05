import DBConfig from "@/DBConfig/DBConfig";
import FakeBlogData from "@/models/FakeBlogData";
import { NextRequest, NextResponse } from "next/server";

// To Insert Fake Data into the database 
// It is not secure because It is used to insert dummy data 

export async function POST(request, response) {
    try {
        await DBConfig();
        const data = await request.json();
        console.log("Data :",data);
        const res = await FakeBlogData.insertMany(data);

        return NextResponse.json({
            message: "data created",
            res:res
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"error occured"
        })
    }
}