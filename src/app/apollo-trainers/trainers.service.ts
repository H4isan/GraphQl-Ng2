import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Queries } from './query';
@Injectable()
export class TrainersService {

  constructor(private apollo: Apollo) { }
  getTrainers() {
    return this.apollo.watchQuery({
      query: Queries.allTrainers, // la query Graphql que cree en la clase Queries
      pollInterval: 1000 // Es para que despues de q halla un cambio se actualize a los 1seconds
    });
  }
  // mutate son para cuando quiero Act, insert, o delete algun registro
  createNewTrainers(name) {
    return this.apollo.mutate({
      mutation: Queries.createNewsTrainers,
      variables: {
        nameTrainer: name
      }
    });
  }
  addPokemons(name, url, trainerId) {
    return this.apollo.mutate({
      mutation: Queries.createNewsPokemons,
      variables: {
        pokemonName: name,
        url: url,
        trainerID: trainerId
      }
    });
  }
  delPokemon(id_value) {
    this.apollo.mutate({
      mutation: Queries.delTrainer,
      variables: {
        id: id_value
      }
    });
  }
}
