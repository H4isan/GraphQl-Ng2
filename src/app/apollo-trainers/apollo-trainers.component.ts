import { Component, OnInit } from '@angular/core';
import { Injectable, NgZone } from '@angular/core';
import { TrainersService } from './trainers.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-apollo-trainers',
  templateUrl: './apollo-trainers.component.html',
  styleUrls: ['./apollo-trainers.component.css']
})
export class ApolloTrainersComponent implements OnInit {
  loading = true;
  allTrainers: any;
  trainerQuery: Subscription;
  constructor(private trainerServ: TrainersService, private ngZone: NgZone) { }

  ngOnInit() {
    this.trainerQuery = this.trainerServ.getTrainers().subscribe(({ data, loading }: any) => {
      this.ngZone.run(() => {
        this.allTrainers = data.allTrainers;
        this.loading = loading;
      });
    });
  }

  newTrainer(trainerName) {
    this.trainerServ.createNewTrainers(trainerName).subscribe(({ data }) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });

  }

  deleteTrainer(id_value) {
    this.trainerServ.delPokemon(id_value);
  }
  addNewPokemon(pokemonName, pictureUrl, trainerID){
    this.trainerServ.addPokemons(pokemonName, pictureUrl, trainerID).subscribe(({data}) => {
      console.log(data);
    })
  }
}
