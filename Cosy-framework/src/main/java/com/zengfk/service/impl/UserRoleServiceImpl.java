package com.zengfk.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.zengfk.domain.entity.UserRole;
import com.zengfk.mapper.UserRoleMapper;
import com.zengfk.service.UserRoleService;
import org.springframework.stereotype.Service;

/**
 * 用户和角色关联表(UserRole)表服务实现类
 *
 * @author zengfk
 * @since 2023-06-03 13:17:04
 */
@Service("userRoleService")
public class UserRoleServiceImpl extends ServiceImpl<UserRoleMapper, UserRole> implements UserRoleService {

}

