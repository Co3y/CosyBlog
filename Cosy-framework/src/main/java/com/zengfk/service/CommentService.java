package com.zengfk.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.zengfk.domain.ResponseResult;
import com.zengfk.domain.entity.Comment;

/**
 * 评论表(Comment)表服务接口
 *
 * @author zengfk
 * @since 2023-06-01 14:25:11
 */
public interface CommentService extends IService<Comment> {

    ResponseResult commentList(String commentType, Long articleId, Integer pageNum, Integer pageSize);

    ResponseResult addComment(Comment comment);
}

