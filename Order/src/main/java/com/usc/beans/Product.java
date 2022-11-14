package com.usc.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;

@Entity
@Table(name = "usc_product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "PRODUCT_SEQ")
	@SequenceGenerator(name = "PRODUCT_SEQ", sequenceName = "USC_PRODUCT_SEQ", allocationSize = 1)
	private int id;
	@Column(name = "productname", nullable = false)
	private String productname;
	@Column(name = "price", nullable = false)
	private double price;
	@Column(name = "stock", nullable = false)
	@PositiveOrZero
	private int stock;
	
	public Product() {
		super();
	}
	
	public Product(String productname){
		super();
		this.productname = productname;
	}

	public Product(String productname, @Positive double price, @PositiveOrZero int stock) {
		super();
		this.productname = productname;
		this.price = price;
		this.stock = stock;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", productname=" + productname +  ", price=" + price + ", stock=" + stock + "]";
	}	
}
