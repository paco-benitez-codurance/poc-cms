import { mount } from '@vue/test-utils'
import RestaurantCard from '@/components/RestaurantCard.vue'
import restaurantDataService from '@/services/restaurant-data-services.ts'

jest.spyOn(restaurantDataService, 'get').mockReturnValue({})

const ID_RESTAURANT = 123

describe('RestaurantCard', () => {
  test('should get content from strapi', () => {
    mount(RestaurantCard, {
      props: {
        title: {
          id: Number
        }
      },
      propsData: {
        id: ID_RESTAURANT
      }
    })

    expect(restaurantDataService.get).toBeCalledWith(ID_RESTAURANT)
  })
})
