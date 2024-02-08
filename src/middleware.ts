import { NextResponse, NextRequest } from "next/server";

export const config = {
    matcher : [
        "/((?!api/|_next/|_static/|[[public\\w-]+\\.\\w+).*)"
    ]
}

export default async function middleware(req:NextRequest){
    const url = req.nextUrl;
    const hostname=  req.headers.get('host')
    const path = url.pathname;
    let subdomain = hostname?.split(".")[0]
    subdomain = subdomain?.replace("localhost:3000","");
    if (subdomain === 'www' || subdomain === ""){
        return NextResponse.next()
    }
    if (subdomain !== 'app'){
        return NextResponse.rewrite(
            new URL(`/users/${subdomain}${path === '/' ? "" : path }`), req
        )
    }
    return NextResponse.next();
}