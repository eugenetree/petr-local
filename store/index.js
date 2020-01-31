export const state = () => ({
  apiDomain: 'https://safelocationapi.azurewebsites.net',
  hotelsCounter: 0,
})

export const mutations = {
  incrementHotels(state) {
    state.hotelsCounter++;
  }
}