package com.java.web.util;

import java.util.Enumeration;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.servlet.ModelAndView;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

public class HttpUtil {
	// 메모리에 할당 시킴
	public static ModelAndView returnJson(final HashMap<String, Object> result) {
		
		ModelAndView mav = new ModelAndView();
		
		JSONObject jsonObject = new JSONObject();
		jsonObject = JSONObject.fromObject(JSONSerializer.toJSON(result)); // json형식으로 값을 넘겨줌
		mav.addObject("message", jsonObject.toString());
		mav.setViewName("json");
		
		return mav;
		
	}
	
	public static HashMap<String, Object> paramMap(HttpServletRequest req){
		HashMap<String, Object> params = new HashMap<String, Object>();
		
		Enumeration<?> enums = req.getParameterNames(); // 엘리멘트 안에 ? 처리해서 뭐든 들어올 수 있게 함
		
		while(enums.hasMoreElements()){ // 내용물이 있으면 돌린다. 없을 때 까지
			String paramName = (String) enums.nextElement();
			String[] parameters = req.getParameterValues(paramName);
			
			if(parameters.length > 1){
				params.put(paramName, parameters);
			} else {
				// 예외 처리 할 경우 사용 할 것
				try {
					params.put(paramName, parameters[0]); // 가져온 것이 많을 경우 첫번째 것만 값을 넣겟다.
				} catch (Exception e) {
					e.printStackTrace();
	            }
			}
		}
		
		return params;
	}
}
