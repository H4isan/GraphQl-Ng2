import { Component, OnInit } from '@angular/core';

import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from "rxjs/Subscription";

// We use the gql tag to parse our query string into a query document
const Trainer = gql`
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
const allTrainers = gql`
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
const createNewsTrainers = gql`
  mutation createTrainer {
    createTrainer(name : $name){
    	name
      id
      createdAt
      updatedAt
    }
  }
`;
const delTrainer = gql`
  mutation createTrainer {
    deleteTrainer(id: "cj401v4nq1he90162u214sitl"){
      id
    }
  }
`;

interface QueryResponse {
  ownedPokemons
  allTrainers
  id
}

@Component({
  selector: 'app-apollo-prueba',
  templateUrl: './apollo-prueba.component.html',
  styleUrls: ['./apollo-prueba.component.css']
})
export class ApolloPruebaComponent implements OnInit {
  loading: boolean = true;
  ownedPokemons: object[];
  allTrainers: any;
  networkStatus: any;
  //TrainerQuery
  trainerQuery: Subscription;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.trainerQuery = this.apollo.watchQuery<QueryResponse>({
      query: allTrainers
    }).subscribe(({ data, loading, networkStatus }) => {

      this.allTrainers = data.allTrainers;
      this.loading = loading;
      this.networkStatus = networkStatus;

      console.log(this.allTrainers, loading);

    });

  }
  newTrainer() {
    this.apollo.mutate({
      mutation: createNewsTrainers,
      variables: {
        name: 'Trainer4'
      }
    }).subscribe(({ data }) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }
}
