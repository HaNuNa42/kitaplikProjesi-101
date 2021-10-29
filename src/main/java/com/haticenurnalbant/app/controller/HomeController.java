package com.haticenurnalbant.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	@GetMapping({"/", "anasayfa"})
	public String anasayfa() {
		return "anasayfa";
	}

}
