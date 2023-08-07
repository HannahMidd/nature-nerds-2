import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedParks {
        activities
        addresses
        comments
        contacts
        description
        designation
        directionsInfo
        directionsUrl
        entranceFees
        entrancePasses
        images
        latLong
        name
        operatingHours
        states
        topics
        url
        weatherInfo
      }
    }
  }
`;
