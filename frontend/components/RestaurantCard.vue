<template>
  <div>Soy un restaurant {{ id }}</div>
</template>

<script>
import restaurantDataServices from '@/services/restaurant-data-services'
export default {
  name: 'RestaurantCard',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  mounted () {
    restaurantDataServices.get(this.id)
  }
}
</script>
