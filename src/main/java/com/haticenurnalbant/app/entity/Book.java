package com.haticenurnalbant.app.entity;

import javax.persistence.*;

@Entity
public class Book {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long bookId;
	
	@Column
	private String bookname;
	
	@Column
	private String author;
	
	@Column
	private int numberOfPages;
	
	@ManyToOne(fetch= FetchType.LAZY, cascade=CascadeType.ALL) //çoktan bire ilişki
	@JoinColumn(name= "category_id", nullable=false)
	private Category category;

	
}
