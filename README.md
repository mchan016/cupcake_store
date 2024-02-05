# Cupcake Store

An API for a virtual cupcake store server selling delicious cupcakes made from scratch

## Repository URL

Follow this [link](https://github.com/mchan016/cupcake_store) to access the main repo

## Prerequisites

- Docker version v1.13.1+ (Ideally latest version)
- Docker Compose v2.24.x (Ideally latest v2.24.x version)

## Setup and test

### Setup

- Clone the repo using `git clone https://github.com/mchan016/cupcake_store.git`
- Navigate into the cloned local folder **cupcake_store**
- Run the command `docker-compose up -d`

### Test

- Wait until docker compose starts running the app and database containers
- Our cupcake api server is currently running on `127.0.0.1:3000/api/v1/`
- Test out the api specs

  - POST /cupcake:
    - POST the following JSON to `127.0.0.1:3000/api/v1/cupcake`:
    ```
    {
        "name": "Black Forest",
        "description": "A cupcake with a rich texture",
        "price": "something"
    }
    ```
    - **verify** the return status code is _405_ with a message of _Invalid input_
    - POST again the above JSON to `127.0.0.1:3000/api/v1/cupcake`, but this time with correct input types:
    ```
    {
        "name": "Black Forest",
        "description": "A cupcake with a rich texture",
        "price": 5.75
    }
    ```
  - GET /cupcake:
    - GET all cupcakes via `127.0.0.1:3000/api/v1/cupcake`
    - **verify** the return includes one document entry which is the Black Forest cupcake from the previous step
  - GET /cupcake/{cupcakeId}
    - GET a particular cupcake using `127.0.0.1:3000/api/v1/cupcake/abc`
    - **verify** the return status code is _400_ with a message of _Invalid ID supplied_
    - GET a particular cupcake using `127.0.0.1:3000/api/v1/cupcake/12`
    - **verify** the return status code is _404_ with a message of _Cupcake not found_
    - GET a particular cupcake using `127.0.0.1:3000/api/v1/cupcake/1`
    - **verify** the Black Forest cupcake is returned
  - PUT /cupcake/{cupcakeId}

    - Update our Black Forest cake using `127.0.0.1:3000/api/v1/cupcake/1` with the following update:

    ```
    {
        "name": "Black Forest",
        "description": "A cupcake with a black forest base and velvety whipping cream",
        "price": "stock",
        "ingredients": [
            "flour",
            "sugar",
            "chocolate",
            "heavy cream"
        ]
    }
    ```

    - **verify** the return status code is _405_ with a message of _Validation Exception_
    - Update again to `127.0.0.1:3000/api/v1/cupcake/1` but this time with a correct type for price:

    ```
    {
        "name": "Black Forest",
        "description": "A cupcake with a black forest base and velvety whipping cream",
        "price": 12,
        "ingredients": [
            "flour",
            "sugar",
            "chocolate",
            "heavy cream"
        ]
    }
    ```

    - **verify** our Black Forest cupcake is updated with new ingredients and a new price

  - DELETE /cupcake/{cupcakeId}
    - DELETE our Black Forest cupcake with `127.0.0.1:3000/api/v1/cupcake/1`
    - **verify** the response status code is _204_ with no content returned

## Cleanup

- Run `docker-compose stop` to stop the active containers
- Run `docker-compose down` to remove the generated containers
