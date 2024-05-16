import { switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country

  constructor(
    private activaredRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activaredRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.searchByAlphaCode(id))
    )
    .subscribe((country) => {
      if (!country) {
        return this.router.navigateByUrl('')
      }

      return this.country = country
    })
  }

}
