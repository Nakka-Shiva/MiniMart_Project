package com.project.minimart.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.minimart.Entity.MiniMart;
import com.project.minimart.Repo.MiniMartRepo;

@Service
public class MiniMartService {

	@Autowired
	MiniMartRepo mmRepo;

public String checkLogin(String username, String password) {
	// TODO Auto-generated method stub
	MiniMart miniMart = mmRepo.findByUserName(username);

	if(( miniMart != null) && (miniMart.getPassword().contentEquals(password))){
		return "success";

	}
	else {
		return "fail";
	}
}
}