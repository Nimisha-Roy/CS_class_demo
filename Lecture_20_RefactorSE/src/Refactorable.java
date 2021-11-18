import java.util.Enumeration;

import helper.MyCollection;
import helper.Order;

public class Refactorable {

	private MyCollection _orders = new MyCollection();
	private String _name = "Customer Name";
	
	void printOwing() {
		Enumeration e = _orders.elements();
		double outstanding = 0.0;
		int count = 0;
		
		// print banner
		System.out.println("**************************");
		System.out.println("***** Customer Owes ******");
		System.out.println("**************************");
		
		// calculate outstanding 
		while (e.hasMoreElements()) {
			Order each = (Order) e.nextElement();
			outstanding += each.getAmount();
			count += 1;
		}
		
		// print details
		System.out.println("name: " + _name);
		System.out.println("amount: " + outstanding);
		System.out.println(count);

		
	}
}
