package enrole;

import Notification.Notification;
import Notification.Observer;
import java.util.Date;
import Post.Post;

/**
 *
 * @author marcw
 */
public class User extends SEntity implements Observer<Post> {

	String name, email;
	int universityID, phone;
	Date birthDate;
	Enrollment[] enrollments;
	

	private String hasedPassword;

	boolean login(String email, String password) {
		return false;
	}

	boolean logout() {
		return false;
	}

	@Override
	public boolean sendNotification(Post subject, Notification Notification) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

}