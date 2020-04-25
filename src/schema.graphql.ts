import { gql } from "apollo-server"

export const typeDefs = gql`
  scalar Date

  type Attributes {
    views: Int
    created_at: Date
    updated_at: Date
  }

  type Page {
    id: Int
    location: String
    attributes: Attributes
  }

  type Pages {
    Count: Int
    ScannedCount: Int
    Pages: [Page]
  }

  type Ip {
    id: Int
    ipAddress: String
    visits: [Date]
  }

  type Ips {
    Count: Int
    ScannedCount: Int
    Ips: [Ip]
  }

  type ProvisionedThroughput {
    LastIncreaseDateTime: String
    LastDecreaseDateTime: String
    NumberOfDecreasesToday: Int
    ReadCapacityUnits: Int
    WriteCapacityUnits: Int
  }

  type KeySchema {
    AttributeName: String
    KeyType: String
  }

  type AttributeDefinitions {
    AttributeName: String
    AttributeType: String
  }

  type TableDescription {
    TableName: String
    TableStatus: String
    CreationDateTime: String
    TableSizeBytes: Int
    ItemCount: Int
    TableArn: String
    ProvisionedThroughput: ProvisionedThroughput
    KeySchema: [KeySchema]
    AttributeDefinitions: [AttributeDefinitions]
  }

  type Table {
    TableDescription: TableDescription
  }

  type Mutation {
    createIpsTable: Table
    createPage(location: String!, id: Int): Page
    createPagesTable: Table
    incrementViews(location: String!, id: Int): Attributes
    trackIpVisits: String
  }

  type Query {
    getIp: String!
    getIps: [Ip]
    getPage(location: String!, id: Int): Page
    getPages: Pages
    listTables: [String]
  }
`
