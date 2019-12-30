## Real Time Weather
Esta aplicação tem por objetivo mostrar ao usuário informações em tempo real, de temperatura do ar, umidade relativa do ar, velocidade do vento e volume de chuva na última hora, com relação à localização atual do usuário. Conforme a condição climática, a cor de fundo dos elementos muda, para deixar o ambiente mais fiel. Foi construida utilizando a biblioteca [React](https://pt-br.reactjs.org/), totalmente responsiva (mobile-first). Para tornar o desenvolvimento mais prático e rápido, foi utilizado o framework [Tailwind CSS](https://blog.logrocket.com/create-react-app-and-tailwindcss/). Para a obtenção dos dados a serem mostrados, foi utilizada a API [Darksky](https://darksky.net/dev/docs). Para estabelecer uma conexão HTTP com a API, foi utilizada a biblioteca [Axios](https://github.com/axios/axios), por já ter trabalhado com essa biblioteca no desenvolvimento com Vue js. Para algumas lógicas com datas e horas, foi utilizada a biblioteca [Moment](https://momentjs.com/). Para mostrar o nome da cidade do usuário na tela, foi utilizada a API do google [Geocode](https://developers.google.com/maps/documentation/geocoding/start). 
## Usage
Para que o sistema funcione conforme o esperado, é necessário que você crie um arquivo na raiz do projeto chamado `.env`. Nele devem conter as seguintes linhas: 

    REACT_APP_DARK_SKY_KEY=<your darksky secret key>
    REACT_APP_GEOLOCATION_KEY=<your google geocode key>
Nos campos seguidos por `<>` você deve inserir as respectivas chaves para acessar a API.

Você deve dar `npm install` para instalar todas as dependências necessárias e para rodar o projeto, deve dar o comando `npm run start`.
## Screenshots
![Tempo nublado, desktop](https://drive.google.com/file/d/1GK6jBvQ0qsyzlITxAaUKfxfTpWy2dx4P/view?usp=sharing)
![Céu limpo, desktop](https://drive.google.com/file/d/1Lc4IioId-coLNHBs75-09kf1jYfPPRQ_/view?usp=sharing)
![Tempo nublado, mobile](https://drive.google.com/file/d/1hKlQ4eJ4EKsr7T27TKMvchGWEO-F91b7/view?usp=sharing)
![Céu limpo, mobile](https://drive.google.com/file/d/1FZ1zJwvmX6jNN0ko4AKcPqjnv_jfYaqF/view?usp=sharing)
