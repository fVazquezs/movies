# Movies app
To run this project you can either use docker (recommended!)
```
 docker-compose up
```

Or run it manually with the following steps
* Install node if you dont have it
```
node -v
cd ui
npm install
npm start
```

* Make sure to have gradle and java 19 installed
```
gradle build
cd api
java -jar ./build/libs/api-0.0.1-SNAPSHOT.jar
```

* Run mongo in your local machine, here is how:
    * windows https://hevodata.com/learn/windows-mongodb-shell/ 
    * macos https://treehouse.github.io/installation-guides/mac/mongo-mac.html#:~:text=Run%20the%20Mongo%20daemon%2C%20in%20one%20terminal%20window%20run%20~%2F,to%20access%20data%20in%20MongoDB.
    * or with docker    
     ````
        docker run -d -p 27017:27017 \
	-e MONGO_INITDB_ROOT_USERNAME=root \
	-e MONGO_INITDB_ROOT_PASSWORD=example \
	mongo
    ````

You should be able to open http://localhost:3000 and see an empty list

## Data creation
Make sure that the steps above are completed
* For docker
    ```
    docker build ./generate -t generate && docker run generate
    ```
* In you machine
    ```
    cd generate
    npm install
    npm start
    ```

Data is setup and you can reload your page