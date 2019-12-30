## Real Time Weather
Esta aplicação tem por objetivo mostrar ao usuário informações em tempo real, de temperatura do ar, umidade relativa do ar, velocidade do vento e volume de chuva na última hora, com relação à localização atual do usuário. Conforme a condição climática, a cor de fundo dos elementos muda, para deixar o ambiente mais fiel. Foi construida utilizando a biblioteca [React](https://pt-br.reactjs.org/), totalmente responsiva (mobile-first). Para tornar o desenvolvimento mais prático e rápido, foi utilizado o framework [Tailwind CSS](https://blog.logrocket.com/create-react-app-and-tailwindcss/). Para a obtenção dos dados a serem mostrados, foi utilizada a API [Darksky](https://darksky.net/dev/docs). Para estabelecer uma conexão HTTP com a API, foi utilizada a biblioteca [Axios](https://github.com/axios/axios), por já ter trabalhado com essa biblioteca no desenvolvimento com Vue js. Para algumas lógicas com datas e horas, foi utilizada a biblioteca [Moment](https://momentjs.com/). Para mostrar o nome da cidade do usuário na tela, foi utilizada a API do google [Geocode](https://developers.google.com/maps/documentation/geocoding/start). 
## Usage
Para que o sistema funcione conforme o esperado, é necessário que você crie um arquivo na raiz do projeto chamado `.env`. Nele devem conter as seguintes linhas: 

    REACT_APP_DARK_SKY_KEY=<your darksky secret key>
    REACT_APP_GEOLOCATION_KEY=<your google geocode key>
Nos campos seguidos por `<>` você deve inserir as respectivas chaves para acessar a API.

Você deve dar `npm install` para instalar todas as dependências necessárias e para rodar o projeto, deve dar o comando `npm run start`.
## Screenshots
![Tempo nublado, desktop](https://user-images.githubusercontent.com/29802533/71583609-f4267c00-2aed-11ea-87c8-7df272130892.png)
![Céu limpo, desktop](https://user-images.githubusercontent.com/29802533/71583624-06081f00-2aee-11ea-990d-e6ccea3f5545.png)
![Tempo nublado, mobile](https://user-images.githubusercontent.com/29802533/71583636-15876800-2aee-11ea-95e5-261133ca02ba.png)
![Céu limpo, mobile](https://user-images.githubusercontent.com/29802533/71583645-2041fd00-2aee-11ea-8411-cc8b725c3307.png)
