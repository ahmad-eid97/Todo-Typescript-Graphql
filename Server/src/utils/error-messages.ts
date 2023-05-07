const errorMessages = {
  EMPTY: (field: string): string => `(${field}) field can't be empty`,
  REQUIRED: (field: string): string => `(${field}) field is required`,
  NOT_VALID: (field: string): string => `The entered (${field}) has an invalid value`,
  NOT_VALID_URL: (field: string): string => `(${field}) field value is not a valid URL`,
  TOO_SHORT: (field: string, min?: number): string => `The value of (${field}) field is too short, minimum value is ${min} chars`,
  USER_NOT_FOUND: (id: string): string => `User with ID:(${id}) is not found in our database`,
  AUTH_REQUIRED: `Authentication is required for performing this operation`,
  ALREADY_AUTHENTICATED: `You are already authenticated`,
  INVALID_CREDENTIALS: `Your credentials is invalid, please try again`,
  BANNED: `Your account is banned, contact technical support team`,
  INACTIVE_ACCOUNT: `Your account is inactive, contact technical support team`,
  AUTHORIZATION_FAILED: `You are not authorized to perform this operation`,
  AUTH_NOT_SUPPORTED: `Authentication type not supported`,
  AUTH_LINKED: `Another account is linked to this account, contact technical support team`,
  PROVIDER_ERROR: `An error occurred while connecting to the provider`,
  AUTH_ERROR: 'An error occurred while authenticating your account',
  NOT_CONFIRMED: `Your email address is not yet confirmed`,
  CODE_ALREADY_SENT: `Confirmed code was already sent`,
  ALREADY_CONFIRMED: `Your email address is already confirmed`,
  CODE_EXPIRED: `Confirmation code was already expired`,
  CODE_NOT_VALID: `Confirmation code is not valid`,
  PASSWORD_NOT_LINKED: `Your account has no email-password linked`,
  TOKEN_ALREADY_SENT: `Your reset token was already sent to your email address`,
  TOKEN_EXPIRED: `Password reset token was expired`,
  SUPER_ADMIN_UPDATE: '(Super Admin) user data cannot be updated',
  SUPER_ADMIN_DELETE: '(Super Admin) user cannot be deleted',
}

export default errorMessages;