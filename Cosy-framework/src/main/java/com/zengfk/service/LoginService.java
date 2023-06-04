package com.zengfk.service;

import com.zengfk.domain.ResponseResult;
import com.zengfk.domain.entity.User;

public interface LoginService {
    ResponseResult login(User user);

    ResponseResult logout();
}
