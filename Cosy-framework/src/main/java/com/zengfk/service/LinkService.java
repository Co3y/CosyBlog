package com.zengfk.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.zengfk.domain.ResponseResult;
import com.zengfk.domain.entity.Link;
import com.zengfk.domain.vo.PageVo;

/**
 * 友链(Link)表服务接口
 *
 * @author zengfk
 * @since 2023-05-30 18:15:32
 */
public interface LinkService extends IService<Link> {

    ResponseResult getAllLink();

    PageVo selectLinkPage(Link link, Integer pageNum, Integer pageSize);
}

