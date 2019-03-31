package com.skilldistillery.eventtracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.skilldistillery.eventtracker.data.BookService;

@Controller
public class RootController {

	@Autowired
	BookService service;

	@RequestMapping(path = "/")
	public String index() {
		return "index.html";
	}

}
