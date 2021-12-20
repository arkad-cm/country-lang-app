# country-lang-app

## Instructions
* Clone 
* npm install
* npm start

** POST / **
**Body**
`{
    "Query": {
         "Country" : "BR",
    }
}`

** Get Back **
`{
  "data": {
    "country": {
      "name": "Brazil",
      "native": "Brasil",
      "capital": "Brasília",
      "currency": "BRL",
      "languages": [
        {
          "code": "pt",
          "name": "Portuguese"
        }
      ]
  }
}`
