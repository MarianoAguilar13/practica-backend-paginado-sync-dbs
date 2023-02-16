import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    return res
      .status(200)
      .send(`It's a POST request! - le envio el codigo al mail`);
  },
});
