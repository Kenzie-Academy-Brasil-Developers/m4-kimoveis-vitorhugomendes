import { Request, Response } from 'express';
import createRealEstateService from '../services/realEstate/createRealEstate.service';

const createRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstateData = request.body;

  const newRealEstate = await createRealEstateService(realEstateData);

  return response.status(201).json(newRealEstate);
};

export { createRealEstateController };
