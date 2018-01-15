package com.java.web.dao;

import java.util.HashMap;
import java.util.List;

public interface NexenDaoInterface {

	public List<HashMap<String, Object>> all();
	public List<HashMap<String, Object>> staff();
	public List<HashMap<String, Object>> pitcher();
	public List<HashMap<String, Object>> catcher();
	public List<HashMap<String, Object>> infielder();
	public List<HashMap<String, Object>> outfielder();
}
