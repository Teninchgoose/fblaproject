import java.util.HashMap;
import java.util.Map;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class StudentInvolvement {

  public static void main(String[] args) {
    Map<String, Integer> events = new HashMap<>();
    events.put("Sporting events", 5);
    events.put("Concerts", 3);
    events.put("Dances", 1);
    events.put("Fundraisers", 10);

    Map<String, Integer> prizes = new HashMap<>();
    prizes.put("Homework Pass", 20);
    prizes.put("Restaurant Gift Card", 50);
    prizes.put("School Swag Bag", 100);

    String firstName = "";
    String lastName = "";
    int grade = 0;
    int totalPoints = 0;

    // Code to get the first name, last name and grade from the input form

    // Code to get the attendance status from the radio buttons
    if (attendanceStatus1) {
      totalPoints += events.get("Dances");
    }
    if (attendanceStatus2) {
      totalPoints += events.get("Sporting events");
    }
    if (attendanceStatus3) {
      totalPoints += events.get("Fundraisers");
    }
    if (attendanceStatus4) {
      totalPoints += events.get("Concerts");
    }
    // ...

    // Connect to MongoDB
    MongoClient mongoClient = new MongoClient("localhost", 27017);
    MongoDatabase database = mongoClient.getDatabase("studentInvolvement");
    MongoCollection<Document> collection = database.getCollection("students");

    // Create a document for the student
    Document student = new Document("firstName", firstName)
        .append("lastName", lastName)
        .append("grade", grade)
        .append("totalPoints", totalPoints);

    // Insert the document into the collection
    collection.insertOne(student);

    // Close the MongoDB connection
    mongoClient.close();
  }
}
