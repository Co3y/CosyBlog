package com.zengfk.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.zengfk.domain.entity.RoleMenu;

/**
 * 角色和菜单关联表(RoleMenu)表服务接口
 *
 * @author zengfk
 * @since 2023-06-03 13:15:13
 */
public interface RoleMenuService extends IService<RoleMenu> {

    void deleteRoleMenuByRoleId(Long id);
}

