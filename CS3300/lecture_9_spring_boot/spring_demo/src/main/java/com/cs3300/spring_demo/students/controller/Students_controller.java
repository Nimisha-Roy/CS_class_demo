package com.cs3300.spring_demo.students.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs3300.spring_demo.student.bean.Student;

@RestController
public class Students_controller {

	// localhost:8080/students...
	@GetMapping("/students")
	public List<Student> getAllStudents() {
		return (List<Student>) Arrays.asList(new Student(1, "Chunhao"),
				new Student(2, "Kendall"));
	}
}
