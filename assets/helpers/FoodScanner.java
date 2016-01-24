package foodScanner;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;


/**
 * @author mingz
 *
 */

public class FoodScanner {
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		Scanner foodFile = new Scanner(new File("foodlist.txt"));
		BufferedWriter outputWriter = new BufferedWriter(new FileWriter("foodListArray.txt"));
		outputWriter.write("var foodList = [");
		while (!(foodFile.hasNext("end"))) {
				outputWriter.write("'" + foodFile.nextLine() + "',\n");
		}
		outputWriter.write("'" + foodFile.nextLine() + "']");
		outputWriter.flush();  
		outputWriter.close(); 
		foodFile.close();
	}
}
