import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DcHero } from './dc-hero';

@Injectable({
  providedIn: 'root'
})
export class DcDataService {

	private heroes$ = new BehaviorSubject([
    {
      index: '1',
      character: 'Batman',
      name: 'Bruce Wayne',
      abilities: 'money'
    }, {
      index: '2',
      character: 'Flash',
      name: 'Barry Allen',
      abilities: 'speed'
    }, {
      index: '3',
      character: 'Superman',
      name: 'Clark Kent',
      abilities: 'invincible'
    }, {
      index: '4',
      character: 'Wonder Woman',
      name: 'Diana Prince',
      abilities: 'superhuman strength'
    }, {
      index: '5',
      character: 'Nightwing',
      name: 'Dick Grayson',
      abilities: 'martial arts'
    }, {
      index: '6',
      character: 'Green Lantern',
      name: 'Hal Jordan',
      abilities: 'Power ring'
    }, {
      index: '7',
      character: 'Green Arrow',
      name: 'Oliver Queen',
      abilities: 'money'
    }, {
      index: '8',
      character: 'Aquaman',
      name: 'Arthur Curry',
      abilities: 'can talk with fishes'
    }, {
      index: '9',
      character: 'Martian Manhunter',
      name: 'John Jones',
      abilities: 'telepathy'
    }, {
      index: '10',
      character: 'Captain Marvel',
      name: 'Billy Batson',
      abilities: 'superhuman abilities'
    }, {
      index: '11',
      character: 'Black Canary',
      name: 'Laurel Lance',
      abilities: 'sonic scream'
    }, {
      index: '12',
      character: 'Zatanna',
      name: 'Zatanna',
      abilities: 'magic'
    }, {
      index: '13',
      character: 'Robin',
      name: 'Damian Wayne',
      abilities: 'martial arts, gadgets'
    }, {
      index: '14',
      character: 'Supergirl',
      name: 'Kara Zor-El',
      abilities: 'superhuman powers'
    }, {
      index: '15',
      character: 'Batgirl',
      name: 'Barbara Gordon',
      abilities: 'speed, flexibility and strength'
    }, {
      index: '16',
      character: 'Cyborg',
      name: 'Vic Stone',
      abilities: 'high-tech gadgets'
    }, {
      index: '17',
      character: 'Kid Flash',
      name: 'Wally West',
      abilities: 'speed'
    }, {
      index: '18',
      character: 'Catwoman',
      name: 'Selina Kyle',
      abilities: 'stealthy and agile'
    }, {
      index: '19',
      character: 'Red Robin',
      name: 'Tim Drake',
      abilities: 'martial arts'
    }, {
      index: '20',
      character: 'John Constantine',
      name: 'John Constantine',
      abilities: 'sorcery'
    }, {
      index: '21',
      character: 'Raven',
      name: 'Rachel Roth',
      abilities: 'dark magic'
    }, {
      index: '22',
      character: 'Starfire',
      name: 'Koriand\'r',
      abilities: 'flight and energy projection'
    }, {
      index: '23',
      character: 'Beast Boy',
      name: 'Garfield Logan',
      abilities: 'shape-shifting'
    }, {
      index: '24',
      character: 'Hawkgirl',
      name: 'Kendra Saunders',
      abilities: 'flight'
    }, {
      index: '25',
      character: 'Doctor Fate',
      name: 'Kent Nelson',
      abilities: 'magic'
    }, {
      index: '26',
      character: 'Red Hood',
      name: 'Jason Todd',
      abilities: 'martial arts'
    }, {
      index: '27',
      character: 'Firestorm',
      name: 'Ronnie Raymond / Martin Stein',
      abilities: 'nuclear power'
    }, {
      index: '28',
      character: 'The Atom',
      name: 'Ray Palmer',
      abilities: 'size-changing'
    }, {
      index: '29',
      character: 'Jonah Hex',
      name: 'Jonah Hex',
      abilities: 'excellent gunslinger'
    }, {
      index: '30',
      character: 'Joker',
      name: 'Clown Prince of Crime',
      abilities: 'deadly and unpredictable'
    }, {
      index: '31',
      character: 'Lex Luthor',
      name: 'Alexander Luthor',
      abilities: 'money'
    }, {
      index: '32',
      character: 'Darkseid',
      name: 'Darkseid',
      abilities: 'unparalleled strength'
    }, {
      index: '33',
      character: 'Sinestro',
      name: 'Thaal Sinestro',
      abilities: 'power ring'
    }, {
      index: '34',
      character: 'Brainiac',
      name: 'Vril Dox',
      abilities: 'Extremely advanced mental abilities'
    }, {
      index: '35',
      character: 'Black Adam',
      name: 'Teth-Adam',
      abilities: 'superhuman abilities'
    }, {
      index: '36',
      character: 'Ra\'s al Ghul',
      name: 'Head of the Demon',
      abilities: 'immortality'
    }, {
      index: '37',
      character: 'Deathstrok',
      name: 'Slade Wilson',
      abilities: 'enhanced strength, agility and intelligence'
    }, {
      index: '38',
      character: 'Two-Face',
      name: 'Harvey Dent',
      abilities: 'can flip coins'
    }, {
      index: '39',
      character: 'Vandal Savage',
      name: 'Vandal Savage',
      abilities: 'immortality'
    }, {
      index: '40',
      character: 'Reverse Flash',
      name: 'Eobard Thawne',
      abilities: 'speed'
    }, {
      index: '41',
      character: 'Doomsday',
      name: 'Doomsday',
      abilities: 'regenerative abilities'
    }, {
      index: '42',
      character: 'Mongul',
      name: 'Mongul I',
      abilities: 'superhuman abilities'
    }, {
      index: '43',
      character: 'Bizarro',
      name: 'Bizarro',
      abilities: 'has many duplicates'
    }, {
      index: '44',
      character: 'Riddler',
      name: 'Edward Nygma',
      abilities: 'excellent at creating riddles'
    }, {
      index: '45',
      character: 'Maxwell Lord',
      name: 'Maxwell Lord IV',
      abilities: 'mind control'
    }, {
      index: '46',
      character: 'Captain Cold',
      name: 'Leonard Snart',
      abilities: 'cold gun'
    }, {
      index: '47',
      character: 'Bane',
      name: 'Bane',
      abilities: 'good at taking steroid'
    }, {
      index: '48',
      character: 'Harley Quinn',
      name: 'Harleen Quinzel',
      abilities: 'spending money'
    }, {
      index: '49',
      character: 'Gorilla Grodd',
      name: 'Gorilla Grodd',
      abilities: 'super-intelligence'
    }, {
      index: '50',
      character: 'Lobo',
      name: 'Lobo',
      abilities: 'incredible strength and regeneration'
    }]);

	getHeroes(): Observable<Array<DcHero>> {
		return this.heroes$.asObservable();
	}
}
