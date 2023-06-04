package com.zengfk.service;

import com.zengfk.domain.ResponseResult;
import com.zengfk.domain.entity.User;

/**
 * @Author: ZengFK
 * @Date: 2023/5/30 18:39
 */

public interface BlogLoginService {
    ResponseResult login(User user);

    ResponseResult logout();
}
