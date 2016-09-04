# Near Me 2
1. Extending Near Me App
2. Instead of hardcoding marker data we use follwing
3. Using jsonp services to get data from [Wikipedia] (https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=40.741934%7C-74.004897&gslimit=30&format=json&callback=JSON_CALLBACK)
4. Display Wikipedia page based on marker position 