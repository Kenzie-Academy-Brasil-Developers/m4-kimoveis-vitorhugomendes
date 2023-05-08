import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Address } from '../entities';
import { AppDataSource } from '../data-source';
import { AppError } from '../error';
import { TAddressRequest } from '../interfaces/address.interfaces';

const ensureAddressIsUniqueMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const address: TAddressRequest = response.locals.address;

  let { number, ...newAddressData } = address;

  if (number == undefined) {
    number = '';
  }

  const userRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  if (address) {
    const findAddress: Address | null = await userRepository.findOneBy({
      ...newAddressData,
      number,
    });

    if (findAddress) {
      throw new AppError('Address already exists', 409);
    }
  }

  return next();
};

export default ensureAddressIsUniqueMiddleware;
