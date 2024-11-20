const userTypeDef = `#graphql

type User{
    id:ID!,
    username:String!,
    password:String!,
    email:String!,
    gender:String!,
}

type Query {
    users:[User!],
    user(userId:ID!):User
}

type Mutation {
    signUp(input:SignUpInput!):User
    loginIn(input:LoginInInput!):User
    logout:LogoutResponse   
}

input SignUpInput {
    username:String!
    password:String!
    email:String!
    gender:String!
}
input LoginInInput {
    email:String!
    password:String!
}

type LogoutResponse {
    message:String!
}


`;

export default userTypeDef;
