package com.haticenurnalbant.app.entity;

import javax.persistence.*;

@Entity
public class User {
	
 @Id
 @GeneratedValue(strategy= GenerationType.IDENTITY)
 private long userId;
 
 @Column
 private String username;
 
 @Column
 private String lastname;
 
 @Column 
 private String password;

 
 //constructor
public User(long userId, String username, String lastname, String password) {
	super();
	this.userId = userId;
	this.username = username;
	this.lastname = lastname;
	this.password = password;
}


//getter setter
public long getUserId() {
	return userId;
}

public void setUserId(long userId) {
	this.userId = userId;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getLastname() {
	return lastname;
}

public void setLastname(String lastname) {
	this.lastname = lastname;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}
 
 
 
}
