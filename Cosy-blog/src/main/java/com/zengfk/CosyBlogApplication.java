package com.zengfk;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @Author: ZengFK
 * @Date: 2023/5/29 20:40
 */
@SpringBootApplication
@MapperScan("com.zengfk.mapper")
@EnableScheduling
@EnableSwagger2
public class CosyBlogApplication {
    public static void main(String[] args) {
        SpringApplication.run(CosyBlogApplication.class, args);
    }
}
