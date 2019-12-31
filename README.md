## Real Time Weather
This application aims to show the user real time information of air temperature, relative humidity, wind speed and rainfall in the last hour, relative to the user's current location. Depending on the weather condition, the background color of the elements changes to make the environment more faithful. The system still stores the data in the browser for 15 minutes to avoid unnecessary requests (temperature does not change dramatically in 1 minute, for example). It was built using the fully responsive (mobile-first) library [React](https://pt-br.reactjs.org/). To make development more convenient and fast, we used the [Tailwind CSS](https://blog.logrocket.com/create-react-app-and-tailwindcss/) framework. To obtain the data to be shown, the [Darksky](https://darksky.net/dev/docs) API was used. To establish an HTTP connection to the API, we used the [Axios](https://github.com/axios/axios) library, as we had already worked with this library in development with Vue js. For some logics with dates and times, the [Moment](https://momentjs.com/) library was used. To show the user's city name on the screen, we used the Google [Geocode](https://developers.google.com/maps/documentation/geocoding/start) API. 
## Usage
For the system to work as expected, you need to create a file at the root of the project called `.env`. This file exists to protect against possible exposure of secret keys for misuse.
It should contain the following lines: 

    REACT_APP_DARK_SKY_KEY=<your darksky secret key>
    REACT_APP_GEOLOCATION_KEY=<your google geocode key>
In the fields followed by `<>` you must enter their keys to access the API.

You must give `npm install` to install all necessary dependencies and to run the project, you must give the` npm run start` command.
## Screenshots
![Tempo nublado, desktop](https://user-images.githubusercontent.com/29802533/71583609-f4267c00-2aed-11ea-87c8-7df272130892.png)
![Céu limpo, desktop](https://user-images.githubusercontent.com/29802533/71583624-06081f00-2aee-11ea-990d-e6ccea3f5545.png)
![Tempo nublado, mobile](https://user-images.githubusercontent.com/29802533/71583636-15876800-2aee-11ea-95e5-261133ca02ba.png)
![Céu limpo, mobile](https://user-images.githubusercontent.com/29802533/71583645-2041fd00-2aee-11ea-8411-cc8b725c3307.png)
