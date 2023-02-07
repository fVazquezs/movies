FROM gradle:7.6.0-jdk19
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build --no-daemon 

RUN ls /home/gradle/src/build/libs/
EXPOSE 8080

ENTRYPOINT ["java","-jar","/home/gradle/src/build/libs/api-0.0.1-SNAPSHOT.jar"]