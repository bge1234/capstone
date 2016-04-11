exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('cities').del(),

    knex('cities').insert({
      city: "New+York+City",
      state: "New+York",
      state_abbreviation: "NY",
      latitude: "40.712784",
      longitude: "-74.005941",
      population: 8336697
    }),
    knex('cities').insert({
      city: "Los+Angeles",
      state: "California",
      state_abbreviation: "CA",
      latitude: "34.052234",
      longitude: "-118.243685",
      population: 3857799
    }),
    knex('cities').insert({
      city: "Chicago",
      state: "Illinois",
      state_abbreviation: "IL",
      latitude: "41.878114",
      longitude: "-87.629798",
      population: 2714856
    }),
    knex('cities').insert({
      city: "Houston",
      state: "Texas",
      state_abbreviation: "TX",
      latitude: "29.760427",
      longitude: "-95.369803",
      population: 2160821
    }),
    knex('cities').insert({
      city: "Philadelphia",
      state: "Pennsylvania",
      state_abbreviation: "PA",
      latitude: "39.952584",
      longitude: "-75.165222",
      population: 1547607
    }),
    knex('cities').insert({
      city: "Phoenix",
      state: "Arizona",
      state_abbreviation: "AZ",
      latitude: "33.448377",
      longitude: "-112.074037",
      population: 1488750
    }),
    knex('cities').insert({
      city: "San+Antonio",
      state: "Texas",
      state_abbreviation: "TX",
      latitude: "29.424122",
      longitude: "-98.493628",
      population: 1382951
    }),
    knex('cities').insert({
      city: "San+Diego",
      state: "California",
      state_abbreviation: "CA",
      latitude: "32.715738",
      longitude: "-117.161084",
      population: 1338348
    }),
    knex('cities').insert({
      city: "Dallas",
      state: "Texas",
      state_abbreviation: "TX",
      latitude: "32.776664",
      longitude: "-96.796988",
      population: 1241162
    }),
    knex('cities').insert({
      city: "San+Jose",
      state: "California",
      state_abbreviation: "CA",
      latitude: "37.338208",
      longitude: "-121.886329",
      population: 982765
    }),
    knex('cities').insert({
      city: "Denver",
      state: "Colorado",
      state_abbreviation: "CO",
      latitude: "39.739236",
      longitude: "-104.990251",
      population: 634265
    })
  );
};
