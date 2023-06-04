package com.zengfk.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.zengfk.domain.entity.Role;

import java.util.List;

/**
 * 角色信息表(Role)表数据库访问层
 *
 * @author zengfk
 * @since 2023-06-03 13:13:44
 */
public interface RoleMapper extends BaseMapper<Role> {

    List<String> selectRoleKeyByUserId(Long id);

    List<Long> selectRoleIdByUserId(Long userId);
}

