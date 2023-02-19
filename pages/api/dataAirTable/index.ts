import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { getOffsetAndLimitFromReq } from "lib/request";
import { baseAirtable } from "lib/conection";
import { productIndex } from "lib/conection";

/*
function getLista() {
  const arr = Array.from(Array(300).keys());

  return arr.map((valor) => {
    return {
      nombre: valor,
    };
  });
}*/

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    // const lista = getLista();
    const { offset, limit } = getOffsetAndLimitFromReq(req, 100, 20);
    //aca estamos creando otro array con la cantidad de items que se
    //ha requerido con limit y offset
    //primero parametro, a partir desde donde y hasta donde quiero copiar el array
    // const sliced = lista.slice(offset, offset + limit);
    const query = req.query.q;

    baseAirtable("Furniture")
      .select({ pageSize: limit })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }

        const results = records.map((r) => {
          return {
            ...r.fields,
            id: r.id,
          };
        });

        res.status(200).send({
          results,
          pagination: {
            offset,
            limit,
            total: records.length,
          },
        });
      });
  },
});
