package com.java.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.java.web.service.TestServiceInterface;
import com.java.web.util.HttpUtil;

@Controller
public class NexenController {

	@RequestMapping("/")
	public String nexen(){
		return "Nexen";
	}
	
	@Autowired
	TestServiceInterface tsi;
	
	@RequestMapping(value = "/testDB", method = RequestMethod.GET)
	public ModelAndView testDB(){
		return HttpUtil.returnJson(tsi.test());
	}
	
}
