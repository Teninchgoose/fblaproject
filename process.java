import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;

/**
 * Servlet implementation class SaveData
 * This servlet takes user input and saves it to a NoSQL database, MongoDB
 */
@WebServlet("/SaveData")
public class SaveData extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public SaveData() {
        super();
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 * This method handles the data entered by the user and stores it in the database.
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		// Get user input
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String password = request.getParameter("password");

		// Connect to MongoDB
		MongoClient mongo = new MongoClient("localhost", 27017);

		// Get database and collection
		DB db = mongo.getDB("testDB");
		DBCollection collection = db.getCollection("userData");

		// Create a new BasicDBObject to store user data
		BasicDBObject userData = new BasicDBObject();
		userData.put("fname", name);
		userData.put("lname", email);
		userData.put("password", password);

		// Save user data to the collection
		collection.insert(userData);

		// Close the connection to MongoDB
		mongo.close();
	}

}
