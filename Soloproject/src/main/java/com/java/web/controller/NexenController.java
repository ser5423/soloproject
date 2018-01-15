package com.java.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.java.web.service.NexenServiceInterface;
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
	
	@Autowired
	NexenServiceInterface nsi;
	
	@RequestMapping(value = "/all", method = RequestMethod.POST)
	public ModelAndView all(){
		return HttpUtil.returnJson(nsi.all());
	}
	
	@RequestMapping(value = "/staff", method = RequestMethod.POST)
	public ModelAndView staff(){
		return HttpUtil.returnJson(nsi.staff());
	}
	
	@RequestMapping(value = "/pitcher", method = RequestMethod.POST)
	public ModelAndView pitcher(){
		return HttpUtil.returnJson(nsi.pitcher());
	}
	
	@RequestMapping(value = "/catcher", method = RequestMethod.POST)
	public ModelAndView catcher(){
		return HttpUtil.returnJson(nsi.catcher());
	}
	
	@RequestMapping(value = "/infielder", method = RequestMethod.POST)
	public ModelAndView infielder(){
		return HttpUtil.returnJson(nsi.infielder());
	}
	
	@RequestMapping(value = "/outfielder", method = RequestMethod.POST)
	public ModelAndView outfielder(){
		return HttpUtil.returnJson(nsi.outfielder());
	}
	
}
