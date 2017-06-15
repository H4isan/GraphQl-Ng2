import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Apollo
import { ApolloClient,  createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { ApolloPruebaComponent } from './apollo-prueba/apollo-prueba.component';

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
  declarations: [
    AppComponent,
    ApolloPruebaComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule.forRoot(provideClient),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);