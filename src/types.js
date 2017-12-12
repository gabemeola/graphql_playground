import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat,
} from 'graphql'


const scalarTypes = {
    id: GraphQLID,
    string: GraphQLString,
    int: GraphQLInt,
    float: GraphQLFloat,
    bool: GraphQLBoolean,
}

export default scalarTypes;