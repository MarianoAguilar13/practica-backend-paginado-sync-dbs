import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

//esta funcion method es un middlewar, el cual segun sea el metodo
//que se empleo en la llamada es lo que realizará la function

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).send(`It's a POST request! - te devuelve un Token`);
  },
});
