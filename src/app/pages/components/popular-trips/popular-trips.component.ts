import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-trips',
  templateUrl: './popular-trips.component.html',
  styleUrl: './popular-trips.component.scss'
})
export class PopularTripsComponent {
  popularTrips = [
    {
      from: 'New York, USA',
      to: 'Paris, France',
      price: '$500',
      imgSrc: 'assets/paris.jpg',
      duration: '7h 30m',
      airline: 'Air France',
      stops: 'Non-stop',
      description: 'Discover the city of lights with our special offer.'
    },
    {
      from: 'Sydney, Australia',
      to: 'Tokyo, Japan',
      price: '$700',
      imgSrc: 'assets/tokyo.jpg',
      duration: '9h 45m',
      airline: 'Qantas',
      stops: '1 stop',
      description: 'Experience the vibrant culture of Sydney.'
    },
    {
      from: 'London, UK',
      to: 'New York, USA',
      price: '$400',
      imgSrc: 'assets/new-york.jpg',
      duration: '8h 15m',
      airline: 'British Airways',
      stops: 'Non-stop',
      description: 'Explore the bustling streets of New York City.'
    }
  ];
}
