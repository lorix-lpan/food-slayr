import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
import java.util.List;
import java.util.ListIterator;


/**
 * @author mingz
 *
 */

public class FoodScanner {
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
//		Scanner foodFile = new Scanner(new File("..\foodlist.txt"));
//		BufferedWriter outputWriter = new BufferedWriter(new FileWriter("foodListArray.txt"));
//		outputWriter.write("var foodList = [");
//		while (!(foodFile.hasNext("end"))) {
//				outputWriter.write("'" + foodFile.nextLine() + "',\n");
//		}
//		outputWriter.write("'" + foodFile.nextLine() + "']");
//		outputWriter.flush();
//		outputWriter.close();
//		foodFile.close();

		Scanner foodListArray = new Scanner (new File("..\\foodListArray.txt"));
		StringBuilder lowerCaseFoodArray = new StringBuilder("");
		while (!(foodListArray.hasNext("end"))) {
			lowerCaseFoodArray.append(foodListArray.nextLine());
			lowerCaseFoodArray.append(System.getProperty("line.separator"));
		}
		String lwcArray = lowerCaseFoodArray.toString();
		lwcArray = lwcArray.toLowerCase();
		BufferedWriter lowerCaseOutputWriter = new BufferedWriter(new FileWriter("lowerCaseFoodListArray.txt"));
		lowerCaseOutputWriter.write(lwcArray);
		lowerCaseOutputWriter.flush();
		lowerCaseOutputWriter.close();
		foodListArray.close();
	}
}
