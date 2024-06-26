import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Player {
    user: User!
    score: Int!
  }

  type Question {
    question: String
    answers: [String!]!
    correct: String
  }

  type Game {
    currentQuestion: Question
    currentRound: Int!
    totalRounds: Int!
    roundTimestamp: String
    roundTime: Int!
    status: String!
  }

  type Lobby {
    id: ID!
    name: String!
    owner: User!
    players: [Player!]!
    maxPlayers: Int!
    createdAt: String!
    endedAt: String!
    game: Game!
  }

  type Query {
    getAllUsers: [User!]!
    lobbies: [Lobby!]!
    lobby(lobbyId: ID!): Lobby!
    historicGames: [Lobby!]!
  }

  type Mutation {
    createUser(username: String!, password: String!): User!
    login(username: String!, password: String!): AuthPayload!
    createLobby(name: String!, maxPlayers: Int!): Lobby!
    joinLobby(lobbyId: ID!): Lobby!
    startGame(lobbyId: ID!): Lobby!
    submitAnswer(lobbyId: ID!, score: Int!): Lobby!
  }
`;

export default typeDefs;
