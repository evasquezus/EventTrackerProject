package com.skilldistillery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
@EntityScan("com.skilldistillery.eventtrackerjpa.entities")
@SpringBootApplication
public class EventTrackerRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventTrackerRestApplication.class, args);
	}

}
