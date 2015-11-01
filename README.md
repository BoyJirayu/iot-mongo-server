# homework-api-mongoose

Download
```
$ git clone https://github.com/divHacker/homework-api-mongoose.git
$ cd homework-api-mongoose
$ npm install
```

Start Mongodb
```
$ mongod --dbpath ./data
```

Start App
```
$ nodemon index.js
```

POST -> http://domain/api/homework
GET -> http://domain/api/homework

JSON
```
{
	ip_addr: String,
	port: number,
	name: String
}
```