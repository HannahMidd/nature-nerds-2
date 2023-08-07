const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String
    savedParks: [Park]
  }

  type Park {
    activities: [String]
    addresses: String
    comments: [String]
    contacts: String
    description: String
    designation: String
    directionsInfo: String
    directionsUrl: String
    entranceFees: Int
    encrancePasses: String
    images: String
    latLong: LatLong
    name: String
    operatingHours: OperatingHours
    states: String
    topics: [String]
    url: String
    weatherInfo: String
  }

  type LatLong {
    latitude: Float
    longitude: Float
  }
  type OperatingHours {
    opening: String
    closing: String
  }

  type Query {
    me: User
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePark(parkData: ParkInput!): User
    removePark(parkId: ID!): User
  }
  input ParkInput {
    activities: [String]
    addresses: String
    comments: [String]
    contacts: String
    description: String
    designation: String
    directionsInfo: String
    directionsUrl: String
    entranceFees: Float
    entrancePasses: String
    images: String
    latLong: LatLongInput
    name: String
    operatingHours: OperatingHoursInput
    states: String
    topics: [String]
    url: String
    weatherInfo: String
  }
  input LatLongInput {
    latitude: Float
    longitude: Float
  }
  input OperatingHoursInput {
    opening: String
    closing: String
  }
`;

module.exports = typeDefs;
