import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const lat = 36.7783;
    const lon = -119.4179;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const res = await axios.get(url)
    return NextResponse.json(res.data)
    
  } catch (error) {
    console.log("Error facting foreast data");

    return new Response("Error fetching forcast data", { status: 500 });
  }
}
