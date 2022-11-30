package com.usc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usc.beans.UserDetail;
import com.usc.dao.UserDetailDao;
import com.usc.http.Response;
import com.usc.service.UserDetailService;

@RestController
@RequestMapping("/userDetails")
public class UserDetailController {
	@Autowired
	UserDetailDao userDetailDao;

	@Autowired
	UserDetailService userDetailService;

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public List<UserDetail> getUserDetails(){
		return userDetailDao.findAll();
	}
	
	@GetMapping("/{id}")
	public UserDetail getUserDetail(@PathVariable int id) {
		return userDetailDao.findById(id).get();
	}

	@PostMapping
	public Response addUserDetail(@RequestBody UserDetail userDetail) {
		return userDetailService.addDetail(userDetail);
	}

	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN','ROLE_USER')")
	@PutMapping
	public Response changeUserDetail(@RequestBody UserDetail userDetail, Authentication authentication) {
		return UserDetailService.changeDetail(userDetail, authentication);
	}

	@DeleteMapping("/{id}")
	public Response deleteUserDetail(@PathVariable int id) {
		return userDetailService.deleteUser(id);
	}
}
