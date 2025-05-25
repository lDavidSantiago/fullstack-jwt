package dev.ldavidsantiago.userauthservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class UserauthserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserauthserviceApplication.class, args);
    }

}
