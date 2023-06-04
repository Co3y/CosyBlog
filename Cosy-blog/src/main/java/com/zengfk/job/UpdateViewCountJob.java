package com.zengfk.job;

import com.zengfk.domain.entity.Article;
import com.zengfk.service.ArticleService;
import com.zengfk.utils.RedisCache;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @Author: ZengFK
 * @Date: 2023/6/2 9:49
 */

@Component
public class UpdateViewCountJob {

    @Resource
    private RedisCache redisCache;

    @Resource
    private ArticleService articleService;

    @Scheduled(cron = "0/55 * * * * ?")
    public void updateViewCount() {
        // 获取redis中的浏览量
        Map<String, Integer> viewCountMap = redisCache.getCacheMap("article:viewCount");
        List<Article> articles = viewCountMap.entrySet()
                .stream()
                .map(entry -> new Article(Long.valueOf(entry.getKey()), entry.getValue().longValue()))
                .collect(Collectors.toList());
        // 更新到数据库中
        articleService.updateBatchById(articles);
    }
}
