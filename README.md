# country-lang-app

#### Deployed at <a href="https://country-lang.herokuapp.com">country-lang.herokuapp.com</a>

## Instructions

* Send a POST Request with the following body to the deployed URL

** POST / **
**Body**
`{
    "Query": {
         "Country" : "BR"
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
