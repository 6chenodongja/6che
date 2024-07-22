import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { locationKey } = req.query;
  const apiKey = process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY;

  try {
    const response = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`,
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};

export default handler;
