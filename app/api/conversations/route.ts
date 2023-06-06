import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try{
        const currentUsets = await getCurrentUser()
        const body = await request.

    } catch(error:any) {
        return new NextResponse("Internal Error", {status: 500})
    }
}
