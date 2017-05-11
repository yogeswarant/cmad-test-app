FROM maven:3.3-jdk-8

WORKDIR /code

ADD pom.xml /code/pom.xml
RUN mvn dependency:resolve
RUN mvn verify

ADD src /code/src
RUN mvn package

CMD java -jar target/cmad-advanced-staging-demo-fat.jar




