import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async patch(req: NextApiRequest, res: NextApiResponse) {
    return res
      .status(200)
      .send(
        `It's a PATCH request! -permite cambiar solo un dato puntual del user en este caso sera este: ${req.query.addres} --> ${req.body.fecha} `
      );
  },
});
