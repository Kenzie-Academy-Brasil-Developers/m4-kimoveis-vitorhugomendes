import { z } from 'zod';

import { addressSchema, addressSchemaRequest } from '../schemas/address.schema';

type TAddress = z.infer<typeof addressSchema>;

type TAddressRequest = z.infer<typeof addressSchemaRequest>;

export { TAddress, TAddressRequest };
