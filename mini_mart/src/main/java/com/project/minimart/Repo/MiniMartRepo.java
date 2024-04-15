package com.project.minimart.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.minimart.Entity.MiniMart;

public interface MiniMartRepo extends JpaRepository<MiniMart, Integer> {
MiniMart findByUserName(String name);
}