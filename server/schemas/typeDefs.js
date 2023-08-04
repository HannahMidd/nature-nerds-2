const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedParks: [Park]
  }

  type Park {
    activities: [Activity]
    addresses: String
    comments: [Comment]
    contacts: String
    description: String
    designation: String
    directionsInfo: String
    directionsUrl: String
    entranceFees: Number
    encrancePasses: String
    images: String
    latLong: {
      latitude: Number
      longitude: Number
    }
    name: String
    """
    "operatingHours: {
      openinng: Date
      closing: Date
    }"
    """
    states: String
    topics: [topic]
    url: String
    weatherInfo: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePark(parkData: ParkInput!): User
    removePark(parkId: ID!): User
  }
`;

module.exports = typeDefs;
