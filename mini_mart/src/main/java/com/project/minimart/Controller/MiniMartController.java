package com.project.minimart.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.minimart.Entity.MiniMart;
import com.project.minimart.Repo.MiniMartRepo;
import com.project.minimart.Service.MiniMartService;

@RestController
@CrossOrigin("*")
public class MiniMartController {
	String pw;
	@Autowired
	MiniMartRepo mmRepo;

	@Autowired
	MiniMartService mmService;



	  @PostMapping("mm/add") public MiniMart userAdd(@RequestBody MiniMart mm) {
	  MiniMart savedUser=mmRepo.save(mm); return savedUser; }

	 /* @GetMapping("mm/get/{userName}") public String userGet(@PathVariable String
	 * userName) { System.out.println(userName); MiniMart
	 * u=mmRepo.findByUserName(userName); pw=u.getPassword(userName); return pw; }
	 */

	@GetMapping("/login")
	public String checkLogin(@RequestParam String username,@RequestParam String password) {
		return mmService.checkLogin(username,password);
	}


	}