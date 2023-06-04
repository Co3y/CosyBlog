package com.zengfk.controller;

import com.zengfk.domain.ResponseResult;
import com.zengfk.domain.entity.User;
import com.zengfk.enums.AppHttpCodeEnum;
import com.zengfk.service.BlogLoginService;
import com.zengfk.exception.SystemException;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @Author: ZengFK
 * @Date: 2023/5/30 18:35
 */

@RestController
public class BlogLoginController {

    @Resource
    private BlogLoginService blogLoginService;

    @PostMapping("/login")
    public ResponseResult login(@RequestBody User user) {
        if (!StringUtils.hasText(user.getUserName())) {
            //提示 必须要传用户名
            throw new SystemException(AppHttpCodeEnum.REQUIRE_USERNAME);
        }
        return blogLoginService.login(user);
    }

    @PostMapping("/logout")
    public ResponseResult logout() {
        return blogLoginService.logout();
    }

}
