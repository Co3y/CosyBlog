package com.zengfk.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.zengfk.domain.ResponseResult;
import com.zengfk.domain.entity.Role;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 角色信息表(Role)表服务接口
 *
 * @author zengfk
 * @since 2023-06-03 13:13:46
 */
public interface RoleService extends IService<Role> {

    List<String> selectRoleKeyByUserId(Long id);

    List<Role> selectRoleAll();

    List<Long> selectRoleIdByUserId(Long userId);

    void updateRole(@Param("role") Role role);

    void insertRole(Role role);

    ResponseResult selectRolePage(Role role, Integer pageNum, Integer pageSize);

}

