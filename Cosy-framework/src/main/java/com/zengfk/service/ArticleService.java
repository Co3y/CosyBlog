package com.zengfk.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.zengfk.domain.ResponseResult;
import com.zengfk.domain.dto.AddArticleDto;
import com.zengfk.domain.dto.ArticleDto;
import com.zengfk.domain.entity.Article;
import com.zengfk.domain.vo.ArticleVo;
import com.zengfk.domain.vo.PageVo;

/**
 * 文章表(Article)表服务接口
 *
 * @author zengfk
 * @since 2023-05-30 13:35:20
 */
public interface ArticleService extends IService<Article> {

    ResponseResult hotArticleList();

    ResponseResult articleList(Integer pageNum, Integer pageSize, Long categoryId);

    ResponseResult getArticleDetail(Long id);

    ResponseResult updateViewCount(Long id);

    ResponseResult add(AddArticleDto articleDto);

    PageVo selectArticlePage(Article article, Integer pageNum, Integer pageSize);

    ArticleVo getInfo(Long id);

    void edit(ArticleDto articleDto);
}

