import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    return res
      .status(200)
      .send(
        `It's a GET request! - busca productos en la db q = ${req.query.q}, offset = ${req.query.offset}, limit=${req.query.limit} `
      );
  },
});
