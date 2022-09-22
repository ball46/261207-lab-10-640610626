import { readDB } from "../../backendLibs/dbLib";

export default function roomRoute(req, res) {
  const rooms = readDB();
  const data = [];
  for (const room of rooms) {
    data.push({
      roomId: room.roomId,
      roomName: room.roomName,
    });
  }
  if (req.method === "GET") {
    return res.json({
      ok: true,
      rooms: data,
    });
  }
}
