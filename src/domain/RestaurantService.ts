import { LOCAL_STORAGE_KEY } from '../constant/constants';
import { FilteringCategory, SortingProperty, Restaurant, Restaurants } from '../interface/RestaurantInterfaces';

const RestaurantService: Restaurants = {
  addRestaurant(restaurant: Restaurant, restaurantList: Restaurant[]): boolean {
    const existingRestaurant = restaurantList.find(
      item => item.category === restaurant.category && item.name === restaurant.name,
    );
    if (existingRestaurant) {
      return false;
    }
    restaurantList.push(restaurant);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(restaurantList));
    return true;
  },

  filterByCategory(category: FilteringCategory, restaurantList: Restaurant[]): Restaurant[] {
    if (category === '전체') return restaurantList;
    return restaurantList.filter(restaurant => restaurant.category === category);
  },

  sortByProperty(property: SortingProperty, restaurantList: Restaurant[]): Restaurant[] {
    return restaurantList.sort((a: Restaurant, b: Restaurant) => (a[property] > b[property] ? 1 : -1));
  },
};

export default RestaurantService;
