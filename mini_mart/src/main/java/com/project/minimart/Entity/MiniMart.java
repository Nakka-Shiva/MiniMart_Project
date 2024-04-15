package com.project.minimart.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MiniMart {
	@Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
private int id=0;
private String emailId;
private String userName;
private String password;
public MiniMart() {
	super();
}
public MiniMart(String emailId, String userName, String password) {
	super();
	id=id+1;
	this.emailId = emailId;
	this.userName = userName;
	this.password = password;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}

}