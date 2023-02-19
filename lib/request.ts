import type { NextApiRequest, NextApiResponse } from "next";

export function getOffsetAndLimitFromReq(
  req: NextApiRequest,
  maxLimit,
  maxOffset
) {
  //aca verifico que el limit sea menor que maxLimit, ya que es el maximo
  //de items que puede pedir en una consulta
  //el offset es a partir de que item va pedir los datos si el offset
  //es mas larga que el array de items, entonces el offset sera 0
  const queryLimit = parseInt(req.query.limit as string);
  const queryOffset = parseInt(req.query.offset as string);
  let limit = 10;
  if (queryLimit > 0 && queryLimit < maxLimit) {
    limit = queryLimit;
  } else if (queryLimit > maxLimit) {
    maxLimit;
  }

  const offset = queryOffset < maxOffset ? queryOffset : 0;

  return {
    limit,
    offset,
  };
}
