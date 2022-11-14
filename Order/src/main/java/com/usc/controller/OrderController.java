package com.usc.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usc.beans.Order;
import com.usc.dao.OrderDao;
import com.usc.http.Response;
import com.usc.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {
	@Autowired
	OrderDao orderDao;
	
	@Autowired
	OrderService orderService;
	
//	@Autowired
//	OrdersReportProducer ordersReportProducer
	
	@GetMapping
	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_USER')")
	public List<Order> getOrders(Authentication authentication){
		System.out.println("GetOrders is invoking!");
		return orderService.getOrders(authentication);
	}
	
	@GetMapping("/orders/{id}")
	public Order getOrder(@PathVariable int id) {
		return orderDao.findById(id).get();
	}
	
	public void printOrders() {
		System.out.println(Arrays.asList((List<Order>) orderDao.findAll()));
	}
	
	@PostMapping
	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_USER')")
	public Response postOrders(@RequestBody Order order, Authentication authentication) {
		return orderService.addOrder(order, authentication);
	}
	
	@PutMapping
	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_USER')")
	public Response putOrders(@RequestBody Order order) {
		return orderService.editOrder(order);
	}
}
