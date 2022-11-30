package com.usc.service;

import java.util.Collection;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import com.usc.beans.Order;
import com.usc.beans.OrderProduct;
import com.usc.beans.Product;
import com.usc.dao.OrderDao;
import com.usc.dao.OrderProductDao;
import com.usc.dao.ProductDao;
import com.usc.dao.UserDao;
import com.usc.http.Response;

@Service
@Transactional
public class OrderService {
	@Autowired
	OrderDao orderDao;

	@Autowired
	ProductDao productDao;

	@Autowired
	OrderProductDao orderProductDao;

	@Autowired
	UserDao userDao;
	
//	@Autowired
//	OrderProcessService orderProcessService

	public List<Order> getOrders(Authentication authentication) {
		if (isAdmin(authentication.getAuthorities())) {
			return orderDao.findAll();
		} else {
			return orderDao.findAllByUser(userDao.findByUsername(authentication.getName()));
		}
	}

	public Response addOrder(Order order, Authentication authentication) {
		for (OrderProduct op : order.getPurchases()) {
			Product product = (Product) productDao.findByProductname(op.getProduct().getProductname());
			if (op.getQuantity() >= product.getStock()) {
				return new Response(false, "Not enough Products in Stock");
			}
			op.setProduct(product);
			op.setOrder(order);
		}
		order.setUser(userDao.findByUsername(authentication.getName()));
		orderDao.save(order);
		return new Response(true);
	}

	public Response editOrder(Order order) {
		Order o = orderDao.findById(order.getId()).get();
		for(OrderProduct op : o.getPurchases()) {
			orderProductDao.deleteById(op.getId());
		}
		o.setPurchase_Date(order.getPurchase_Date());
		for (OrderProduct op : order.getPurchases()) {
			Product product = (Product) productDao.findByProductname(op.getProduct().getProductname());
			if (op.getQuantity() > op.getProduct().getStock()) {
				return new Response(false, "Not enough Products in Stock");
			}
			op.setProduct(product);
		}
		o.setPurchases(order.getPurchases());
		orderDao.save(o);
		return new Response(true);
	}

	public boolean isAdmin(Collection<? extends GrantedAuthority> profiles) {
		boolean isAdmin = false;
		for (GrantedAuthority profile : profiles) {
			if (profile.getAuthority().equals("ROLE_ADMIN")) {
				isAdmin = true;
			}
		}
		return isAdmin;
	}

}
