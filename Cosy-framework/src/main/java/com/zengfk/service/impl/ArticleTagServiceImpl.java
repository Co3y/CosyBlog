package com.zengfk.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.zengfk.domain.entity.ArticleTag;
import com.zengfk.mapper.ArticleTagMapper;
import com.zengfk.service.ArticleTagService;
import org.springframework.stereotype.Service;

/**
 * 文章标签关联表(ArticleTag)表服务实现类
 *
 * @author zengfk
 * @since 2023-06-03 15:39:14
 */
@Service("articleTagService")
public class ArticleTagServiceImpl extends ServiceImpl<ArticleTagMapper, ArticleTag> implements ArticleTagService {

}

