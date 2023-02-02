import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

// This annotation tells Spring that this class is going to provide REST APIs.
@RestController
public class DataController {

  // This annotation maps the endpoint to a HTTP POST request.
  // When a client makes a POST request to "/data", this method will be called.
  @PostMapping("/data")
  public String receiveData(@RequestBody String data) {
    // This annotation tells Spring to bind the request body to the "data" parameter.
    // In other words, the data sent in the POST request will be stored in the "data" variable.

    // This is where you can process the received data.
    // For example, you can store the data in a database or perform some other operations with it.

    // This returns a string indicating that the data was received successfully.
    return "Data received successfully";
  }
}
