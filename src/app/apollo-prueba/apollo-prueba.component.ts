import { Component, OnInit } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';

// We use the gql tag to parse our query string into a query document
const CurrentUserForProfile = gql`
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

interface QueryResponse {
  currentUser
  loading
  ownedPokemons
}

@Component({
  selector: 'app-apollo-prueba',
  templateUrl: './apollo-prueba.component.html',
  styleUrls: ['./apollo-prueba.component.css']
})
export class ApolloPruebaComponent implements OnInit {
  loading: boolean;
  currentUser: any;
  ownedPokemons: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<QueryResponse>({
      query: CurrentUserForProfile
    }).subscribe(({ data }) => {
      console.log(data);

    });
  }

}
