package com.usc.beans;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name = "usc_order")
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "ORDER_SEQ")
	@SequenceGenerator(name = "ORDER_SEQ", sequenceName = "USC_ORDER_SEQ", allocationSize =  1)
	private int id;
	@Column
	@JsonFormat(pattern = "MM-dd-yyyy")
	private Date purchase_Date;
	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<OrderProduct> purchases;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@JsonIgnore
	User user;
	
	public Order() {
		super();
	}
	
	 public Order(Date purchase_date, List<OrderProduct> purchases) {
		 super();
		 this.purchase_Date = purchase_date;
		 this.purchases = purchases;
	 }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getPurchase_Date() {
		return purchase_Date;
	}

	public void setPurchase_Date(Date purchase_Date) {
		this.purchase_Date = purchase_Date;
	}

	public List<OrderProduct> getPurchases() {
		return purchases;
	}

	public void setPurchases(List<OrderProduct> purchases) {
		this.purchases = purchases;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", purchase_Date=" + purchase_Date + ", purchases=" + purchases + ", user=" + user
				+ "]";
	}	
}
