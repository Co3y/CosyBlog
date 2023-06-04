package com.zengfk.controller;

import com.zengfk.domain.ResponseResult;
import com.zengfk.service.CategoryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @Author: ZengFK
 * @Date: 2023/5/30 15:37
 */

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Resource
    private CategoryService categoryService;

    @GetMapping("/getCategoryList")
    public ResponseResult getCategoryList() {
        ResponseResult result = categoryService.getCategoryList();
        return result;
    }
}
