package com.siaplaouras.managmentsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.siaplaouras.managmentsystem.models")
public class ManagmentSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(ManagmentSystemApplication.class, args);
	}

}
