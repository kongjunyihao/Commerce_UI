package com.usc.service;

import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import com.usc.beans.UserDetail;
import com.usc.dao.UserDetailDao;
import com.usc.http.Response;

@Service
@Transactional
public class UserDetailService {
	
	@Autowired
	static
	UserDetailDao userDetailDao;

	public Response addDetail(UserDetail userDetail) {
		userDetailDao.save(userDetail);
		return new Response(true);
	}

	public static Response changeDetail(UserDetail userDetail, Authentication authentication) {
		if (userDetail.getUser().getUsername().equals(authentication.getName()) || isAdmin(authentication.getAuthorities())) {
			UserDetail ud = userDetailDao.findById(userDetail.getId()).get();
			ud.setAddress1(userDetail.getAddress1());
			ud.setAddress2(userDetail.getAddress2());
			ud.setCity(userDetail.getCity());
			ud.setEmail(userDetail.getEmail());
			ud.setName(userDetail.getName());
			ud.setPhone(userDetail.getPhone());
			ud.setState(userDetail.getState());
			ud.setZip(userDetail.getZip());
			userDetailDao.save(ud);
		} else {
			return new Response(false);
		}
		return new Response(true);
	}
	
	public static boolean isAdmin(Collection<? extends GrantedAuthority> profiles) {
		boolean isAdmin = false;
		for (GrantedAuthority profile : profiles) {
			if (profile.getAuthority().equals("ROLE_ADMIN")) {
				isAdmin = true;
			}
		}
		return isAdmin;
	}

	public Response deleteUser(int id) {
		if (userDetailDao.findById(id) != null) {
			userDetailDao.deleteById(id);
			return new Response(true);
		} else {
			return new Response(false, "User is not found!");
		}
	}

}
