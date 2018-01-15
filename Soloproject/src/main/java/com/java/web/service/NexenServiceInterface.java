package com.java.web.service;

import java.util.HashMap;
import java.util.List;

public interface NexenServiceInterface {
	
	public HashMap<String, Object> all();
	public HashMap<String, Object> staff();
	public HashMap<String, Object> pitcher();
	public HashMap<String, Object> catcher();
	public HashMap<String, Object> infielder();
	public HashMap<String, Object> outfielder();

}
