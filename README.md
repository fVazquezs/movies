# Movies app
To run this project you need to have java and node installed
```
 node -v
 java --version
```

And run 2 applications
* UI
```
cd ui
npm install
npm run build
npm run start:build
```

* API (open a new terminal)
```
cd api
java -jar ./api-0.0.1-SNAPSHOT.jar
```

You should be able to open http://localhost:3000 and see an empty list

## Data creation
Make sure that the steps above are completed (open a new terminal)
``` 
cd generate
npm install
npm start
```

Data is setup and you can reload your page

## TODO list
1. Unit tests
2. Clean code patterns
3. Pagination in the api
4. Swagger documentation
5. Additional nice to have UI feature, ex.: button colors
 
