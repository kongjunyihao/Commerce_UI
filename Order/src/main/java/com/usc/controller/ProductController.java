package com.usc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usc.beans.Product;
import com.usc.dao.ProductDao;
import com.usc.http.Response;
import com.usc.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
	@Autowired
	ProductDao productDao;

	@Autowired
	ProductService productService;


	@GetMapping
	public List<Product> getProducts() {
		return productDao.findAll();
	}

	@GetMapping("/{id}")
	public Product getProduct(@PathVariable int id) {
		return productDao.findById(id).get();
	}
		
	@PostMapping
	public Response addProduct(@RequestBody Product product) {
		return productService.saveProduct(product);
	}
	
	@PutMapping
	public Response updateProduct(@RequestBody Product product) {
		return productService.updateProduct(product);
	}
	
	@DeleteMapping("/{id}")
	public Response deleteProduct(@PathVariable int id) {
		return productService.deleteProduct(id);
	}
}
