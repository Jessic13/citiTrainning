package com.hnu.test.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author ly963
 */
@RestController
@RequestMapping("/hello")
public class HelloWolrd {

    @GetMapping
    public String helloWorld(){
        return "hello world";
    }

}
