import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    return res
      .status(200)
      .send(
        `It's a POST request! - te devuelve una url para que el user pague el producto ${req.query.productsId}`
      );
  },
});
