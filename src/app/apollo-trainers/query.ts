import gql from 'graphql-tag';
// We use the gql tag to parse our query string into a query document

export class Queries {
//Querys
static Trainer = gql`
  query TrainerQuery {
    Trainer(name: "Harlen Giraldo") {
      id
      name
      ownedPokemons {
        name
        url
      }
    }
  }
`;
static allTrainers = gql`
  query TrainerQuery {
    allTrainers(orderBy: name_ASC)  {
      id
      name
      ownedPokemons {
        name
        url
      }
    }
  }
`;

//Subscripciones
static SubsTrainer = gql`
 subscription TrainerSubscriptionPayload {
    Trainer{
   	 mutation
     previousValues{
      name
    }
      node{
        name
        createdAt
      }
  	}
  }
`;
//Mutaciones
static createNewsTrainers = gql`
  mutation createTrainer($nameTrainer: String!){
    createTrainer(name : $nameTrainer){
    	name
      id
      createdAt
      updatedAt
    }
  }
`;
static createNewsPokemons = gql`
  mutation  createTrainer($pokemonName: String!, $url: String!, $trainerID: ID! ) {
    createPokemon(trainerId: $trainerID, name: $pokemonName, url: $url){
      name
      url
    }
  }
`;
static delTrainer = gql`
  mutation deleteTrainer($id: ID!) {
    deleteTrainer(id: $id){
      id
    }
  }
`;
}