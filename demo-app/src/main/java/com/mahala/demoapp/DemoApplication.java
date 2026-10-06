package com.mahala.demoapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*") // Cho phép Frontend gọi API không bị chặn CORS
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    // Endpoint kiểm tra sức khỏe hệ thống cho Load Balancer (Health Check)
    @GetMapping("/health")
    public String health() {
        return "OK";
    }

    // Endpoint trả dữ liệu cho React
    @GetMapping("/api/hello")
    public Map<String, String> hello() {
        return Map.of("message", "Xin chào từ Spring Boot trong Private Subnet!");
    }
}
