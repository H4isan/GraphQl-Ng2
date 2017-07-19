import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloTrainersComponent } from './apollo-trainers.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Apollo
import { ApolloClient,  createNetworkInterface, SubscriptionNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

// Create the client as outlined above
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj3ytjlb43nau0142191pwt6w'
  }),
});




export function provideClient(): ApolloClient {
  return client;
}
@NgModule({
  imports: [
    CommonModule,
    ApolloModule.forRoot(provideClient),
    FormsModule,
    HttpModule
  ],
  declarations: [ApolloTrainersComponent],
  exports: [ApolloTrainersComponent]
})
export class ApolloTrainersModule { }
