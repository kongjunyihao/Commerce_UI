package com.usc.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "usc_order_product")
public class OrderProduct {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "ORDER_PRODUCT_SEQ")
	@SequenceGenerator(name = "ORDER_PRODUCT_SEQ", sequenceName = "USC_ORDER_PRODUCT_SEQ", allocationSize = 1)
	private int id;
	@Column(name = "quantity")
	private int quantity;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "order_id")
	@JsonIgnoreProperties("purchases")
	private Order order;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "product_id")
	private Product product;
	
	public OrderProduct() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public OrderProduct(int quantity, Order order, Product product) {
		super();
		this.quantity = quantity;
		this.order = order;
		this.product = product;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Order getOrder() {
		return order;
	}
	public void setOrder(Order order) {
		this.order = order;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	
	@Override
	public String toString() {
		return "OrderProduct [id=" + id + ", quantity=" + quantity + ", order=" + order + ", product=" + product + "]";
	}
	
	@Override
	public boolean equals(Object o) {
		if((o == null) || this.getClass() != o.getClass()) return false;
		return (this == o);	
	}
}
