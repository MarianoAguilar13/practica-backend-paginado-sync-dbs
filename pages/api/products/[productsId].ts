import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    return res
      .status(200)
      .send(
        `It's a GET request! - te devuelve la info del producto cuyo id es: ${req.query.productsId}`
      );
  },
});
