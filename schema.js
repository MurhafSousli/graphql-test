const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// Hardcoded data

const customers = [{
    id: '1',
    name: 'John Doe',
    email: 'jdoe@gmail.com',
    age: 35
}, {
    id: '2',
    name: 'Steve Smith',
    email: 'steve@gmail.com',
    age: 25
}, {
    id: '3',
    name: 'Sara Williams',
    email: 'sara@gmail.com',
    age: 18
}]

// Customer Type

const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    })
});

// Root Query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer: {
            type: CustomerType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return customers.find(customer => customer.id === args.id);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});