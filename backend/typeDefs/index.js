import { mergeTypeDefs } from "@graphql-tools/merge";
import transactionTypeDef from "./transaction.typeDefs.js";
import userTypeDef from "./user.typeDefs.js";

const typeDefs = mergeTypeDefs([transactionTypeDef, userTypeDef]);

export default typeDefs;
