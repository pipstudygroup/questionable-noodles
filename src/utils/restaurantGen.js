import restaurants from './../services/restaurantsAPI/restaurantsAPI';

const removeRestaurants = (people) => {
  const filteredRestaurants = restaurants.filter(function(restaurant){
    return people.filter(function(person){
      return person.isAttending;
    }).reduce(function(isEligible, person){
      return isEligible && !person.hates.includes(restaurant);
    }, true);
  })

  return filteredRestaurants;
}

const getEligibleRestaurants = (people) => {
  let eligibleRestaurants;

  eligibleRestaurants = removeRestaurants(people);

  return eligibleRestaurants
}


export default getEligibleRestaurants;