package com.zengfk.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.zengfk.domain.entity.Menu;

import java.util.List;

/**
 * 菜单权限表(Menu)表服务接口
 *
 * @author zengfk
 * @since 2023-06-03 13:11:53
 */
public interface MenuService extends IService<Menu> {

    List<String> selectPermsByUserId(Long id);

    List<Menu> selectRouterMenuTreeByUserId(Long userId);

    List<Menu> selectMenuList(Menu menu);

    List<Long> selectMenuListByRoleId(Long roleId);

    boolean hasChild(Long menuId);
}

