package com.usc.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usc.beans.Product;
import com.usc.dao.ProductDao;
import com.usc.http.Response;

@Service
@Transactional
public class ProductService {
	@Autowired
	ProductDao productDao;

	public Response saveProduct(Product product) {
		productDao.save(product);
		return new Response(true);
	}

	public Response updateProduct(Product product) {
		Product p = productDao.findById(product.getId()).get();
		p.setPrice(product.getPrice());
		p.setProductname(product.getProductname());
		p.setStock(product.getStock());
		productDao.save(p);
		return new Response(true);
	}

	public Response deleteProduct(int id) {
		if (productDao.findById(id) != null) {
			productDao.deleteById(id);
			return new Response(true);
		} else {
			return new Response(false, "Product is not found!");
		}
	}

}
