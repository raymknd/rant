// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST")
    return res.status(403).json({ error: "Invalid method" });
  const reqId = req.body.id;
  if (!reqId) return res.status(400).json({ error: "Missing parameters" });
  const url = `https://rant.raymknd.cyou/remote-login/${encodeURIComponent(
    reqId
  )}`;
  const r = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=500x500&bgcolor=303030&color=fff&data=${url}`
  );
  const rj = await r.blob();
  const imageObjectURL = URL.createObjectURL(rj);
  res.send(imageObjectURL);
}
