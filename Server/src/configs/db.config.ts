const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH, MONGO_DATABASE, MONGO_DEV_DATABASE } = process.env;

export const databaseConfig = {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_PATH,
  MONGO_DATABASE,
  MONGO_DEV_DATABASE
}