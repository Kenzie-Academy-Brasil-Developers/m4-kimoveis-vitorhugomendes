import ensureBodyIsValidMiddleware from './ensureBodyIsValid.middleware';
import ensureAddressIsUniqueMiddleware from './ensureAddressIsUnique.middleware';
import ensureCategoryNameIsUniqueMiddleware from './ensureCategoryNameIsUnique.middleware';
import ensureIdIsValidMiddleware from './ensureIdIsValid.middleware';
import ensureTokenIsAdminMiddleware from './ensureTokenIsAdmin.middleware';
import ensureTokenIsValidMiddleware from './ensureTokenIsValid.middleware';
import ensureUserEmailIsUniqueMiddleware from './ensureUserEmailIsUnique.middleware';
import ensureUserPermissionMiddleware from './ensureUserPermission.middleware';

export {
  ensureBodyIsValidMiddleware,
  ensureAddressIsUniqueMiddleware,
  ensureCategoryNameIsUniqueMiddleware,
  ensureIdIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  ensureTokenIsValidMiddleware,
  ensureUserEmailIsUniqueMiddleware,
  ensureUserPermissionMiddleware,
};
