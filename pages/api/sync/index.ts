import { baseAirtable } from "lib/conection";
import { productIndex } from "lib/conection";
import type { NextApiRequest, NextApiResponse } from "next";
import { getOffsetAndLimitFromReq } from "lib/request";

export default function (req: NextApiRequest, res: NextApiResponse) {
  //const { offset, limit } = getOffsetAndLimitFromReq(req, 100, 20);

  baseAirtable("Furniture")
    .select({
      pageSize: 10,
    })
    .eachPage(
      async function (records, fetchNextPage) {
        const objects = records.map((r) => {
          return {
            objectID: r.id,
            ...r.fields,
          };
        });
        await productIndex.saveObjects(objects);
        console.log("página");
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
        res.json("terminó");
      }
    );
}
