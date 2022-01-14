# Record API

Record filter api
Deployed on [heroku](https://records.herokuapp.com/)

## Prerequisites

You need to install [node.js](https://nodejs.org) to your machine to be able to run this project

## Installation

Clone project

```
    git clone https://github.com/muhammedmirzakilic/recorder.git
```

Go to directory and install dependencies via npm/yarn

```
cd recorder && yarn install
```

Then run project

```
yarn dev
```

To run tests

```
yarn test
```

## Endpoints

### Get

`/` basic health check endpoint

### POST

`/record/filter` returns record list

#### Request Parameters

|        Name | Required |  Type  | Description                    |
| ----------: | :------: | :----: | ------------------------------ |
| `startDate` | required |  Date  | Start date of records          |
|   `endDate` | required |  Date  | End date of records            |
|  `minCount` | required | Number | Minimum total count of records |
|  `maxCount` | required | Number | Minimum total count of records |

#### Request Body

```

{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 99,
    "maxCount": 102
}

```

#### Response Parameters

|                Name |  Type  | Description                                                                                                                        |
| ------------------: | :----: | ---------------------------------------------------------------------------------------------------------------------------------- |
|              `code` | Number | Request resul code <br/> Supported values <br/> 0 -> Success <br/> 1000 -> Unexcepted Error <br/> 1001-1005 -> Request body errors |
|               `msg` |  Date  | Description of `code`                                                                                                              |
|           `records` | Array  | `record` Array                                                                                                                     |
|  `record.createdAt` |  Date  | Creation date of record                                                                                                            |
|        `record.key` | string | Record key                                                                                                                         |
| `record.totalCount` | Number | Sum of count array of record                                                                                                       |

#### Response Body

```

{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "createdAt": "2016-12-18T22:34:12.548Z",
            "key": "gYcbAixq",
            "totalCount": 101
        },
    ]
}
```