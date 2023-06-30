export default ({ env }) => ({
  "location-field": {
    enabled: true,
    config: {
      fields: ["photo", "rating"], // optional
      // You need to enable "Autocomplete API" and "Places API" in your Google Cloud Console
      googleMapsApiKey: env("GOOGLE_MAPS_API_KEY"),
      // See https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
      autocompletionRequestOptions: {},
    },
  },
});
