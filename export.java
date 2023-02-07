import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class DatabaseExporter {
   public static void exportToTextFile(List<DatabaseRecord> records, String filePath) {
      try (BufferedWriter bw = new BufferedWriter(new FileWriter(filePath))) {
         for (DatabaseRecord record : records) {
            bw.write(record.getName() + "," + record.getEmail() + "," + record.getAge());
            bw.newLine();
         }
         System.out.println("Exported database to text file successfully!");
      } catch (IOException e) {
         System.err.println("Error exporting database to text file: " + e.getMessage());
      }
   }
}