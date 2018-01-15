package com.java.web.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@Repository
public class NexenDao implements NexenDaoInterface {
	@Resource(name="sqlSession")
	SqlSession session;

	@Override
	public List<HashMap<String, Object>> all() {
		return session.selectList("sql.all");
	}

	@Override
	public List<HashMap<String, Object>> staff() {
		return session.selectList("sql.staff");
	}

	@Override
	public List<HashMap<String, Object>> pitcher() {
		return session.selectList("sql.pitcher");
	}

	@Override
	public List<HashMap<String, Object>> catcher() {
		return session.selectList("sql.catcher");
	}

	@Override
	public List<HashMap<String, Object>> infielder() {
		return session.selectList("sql.infielder");
	}

	@Override
	public List<HashMap<String, Object>> outfielder() {
		return session.selectList("sql.outfielder");
	}

}
