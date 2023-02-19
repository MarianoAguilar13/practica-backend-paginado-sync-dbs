import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { getOffsetAndLimitFromReq } from "lib/request";
import { productIndex } from "lib/conection";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const { offset, limit } = getOffsetAndLimitFromReq(req, 100, 20);
    //aca estamos creando otro array con la cantidad de items que se
    //ha requerido con limit y offset
    //primero parametro, a partir desde donde y hasta donde quiero copiar el array
    // const sliced = lista.slice(offset, offset + limit);
    const query = req.query.q;
    //el mejor metodo de algolia es usar el page y el hitsPerPage
    //con el offset y el limit haremos eso
    //page --> la pagina a la cual estoy pidiendo datos
    //hitsPerPage --> este sera el limit, la cantidad de hits por page
    //ejempro 10 hits por page sera el limit
    //y el offset sera el numero de page
    //tambien se puede utilizar con el offset
    //y el length que sera la cantidad que queremos y ese es el limit

    const algoliaResults = await productIndex.search(query as string, {
      offset: offset,
      length: limit,
    });

    const results = algoliaResults.hits;

    //nbHits son la cantidad de items que matcheo pero solo te devuelve
    //depende del limit y offset que se envio en el search de algolia

    res.status(200).send({
      results,
      pagination: {
        offset,
        limit,
        total: algoliaResults.nbHits,
      },
    });
  },
});
