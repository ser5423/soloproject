package com.java.web.service;

import java.util.HashMap;

public interface TestServiceInterface {

	public HashMap<String, Object> test();
	public HashMap<String, Object> addUser(HashMap<String, Object> param);
	public HashMap<String, Object> login(HashMap<String, Object> param);
	
	public HashMap<String, Object> upUser(HashMap<String, Object> param);
	public HashMap<String, Object> out(HashMap<String, Object> param);

}
