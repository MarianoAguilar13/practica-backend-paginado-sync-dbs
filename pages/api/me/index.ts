import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

//IMPORTANTE: el nombre del archivo esta en el corchete porque esa
//va a ser el nombre de la query que se envia por parametro en la url
// en este caso api/me/15
// luego dentro del archivo ese 15 es req.query.userId
//como no tiene index entonces necesita si o si un /userId

//esta funcion method es un middlewar, el cual segun sea el metodo
//que se empleo en la llamada es lo que realizará la function

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    return res
      .status(200)
      .send(
        `It's a GET request! - te devuelve la info del user asociado al token`
      );
  },
  async patch(req: NextApiRequest, res: NextApiResponse) {
    return res
      .status(200)
      .send(
        `It's a POST request! - se actualizaron los datos del user asociado al token`
      );
  },
});
