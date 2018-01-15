package com.java.web.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.web.dao.NexenDaoInterface;

@Service
public class NexenService implements NexenServiceInterface {

	@Autowired
	NexenDaoInterface ndi;
	
	@Override
	public HashMap<String, Object> all() {
		HashMap<String, Object> all = new HashMap<String, Object>();
		all.put("all", ndi.all());
		return all;
	}

	@Override
	public HashMap<String, Object> staff() {
		HashMap<String, Object> staff = new HashMap<String, Object>();
		staff.put("staff", ndi.staff());
		return staff;
	}

	@Override
	public HashMap<String, Object> pitcher() {
		HashMap<String, Object> pitcher = new HashMap<String, Object>();
		pitcher.put("pitcher", ndi.pitcher());
		return pitcher;
	}

	@Override
	public HashMap<String, Object> catcher() {
		HashMap<String, Object> catcher = new HashMap<String, Object>();
		catcher.put("catcher", ndi.catcher());
		return catcher;
	}

	@Override
	public HashMap<String, Object> infielder() {
		HashMap<String, Object> infielder = new HashMap<String, Object>();
		infielder.put("infielder", ndi.infielder());
		return infielder;
	}

	@Override
	public HashMap<String, Object> outfielder() {
		HashMap<String, Object> outfielder = new HashMap<String, Object>();
		outfielder.put("outfielder", ndi.outfielder());
		return outfielder;
	}


}
