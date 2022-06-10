package com.haticenurnalbant.app.entity;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

@Entity
public class Category {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long categoryId;
	
	@Column(name="category_name")
	private String categoryName;
		
	@OneToMany(mappedBy = "category") //birden çoka ilişki 
	private List<Book> books = new ArrayList<Book>();
	
	
}
