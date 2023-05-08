import { Request, Response } from 'express';
import createRealEstateService from '../services/realEstate/createRealEstate.service';
import listAllRealEstatesService from '../services/realEstate/listAllRealEstates.service';

const createRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstateData = request.body;

  const newRealEstate = await createRealEstateService(realEstateData);

  return response.status(201).json(newRealEstate);
};

const listAllRealEstatesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const allRealEstates = await listAllRealEstatesService();

  return response.json(allRealEstates).send();
};

export { createRealEstateController, listAllRealEstatesController };
