package com.zengfk.controller;

import com.zengfk.domain.ResponseResult;
import com.zengfk.domain.dto.AddTagDto;
import com.zengfk.domain.dto.EditTagDto;
import com.zengfk.domain.dto.TagListDto;
import com.zengfk.domain.entity.Tag;
import com.zengfk.domain.vo.PageVo;
import com.zengfk.domain.vo.TagVo;
import com.zengfk.service.TagService;
import com.zengfk.utils.BeanCopyUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Author: ZengFK
 * @Date: 2023/6/3 12:26
 */

@RestController
@RequestMapping("/content/tag")
public class TagController {

    @Resource
    private TagService tagService;

    @GetMapping("/list")
    public ResponseResult<PageVo> list(Integer pageNum, Integer pageSize, TagListDto tagListDto) {
        return tagService.pageTagList(pageNum, pageSize, tagListDto);
    }

    @PostMapping
    public ResponseResult add(@RequestBody AddTagDto tagDto) {
        Tag tag = BeanCopyUtils.copyBean(tagDto, Tag.class);
        tagService.save(tag);
        return ResponseResult.okResult();
    }

    @DeleteMapping("/{id}")
    public ResponseResult delete(@PathVariable Long id) {
        tagService.removeById(id);
        return ResponseResult.okResult();
    }

    @PutMapping
    public ResponseResult edit(@RequestBody EditTagDto tagDto) {
        Tag tag = BeanCopyUtils.copyBean(tagDto, Tag.class);
        tagService.updateById(tag);
        return ResponseResult.okResult();
    }

    @GetMapping(value = "/{id}")
    public ResponseResult getInfo(@PathVariable(value = "id") Long id) {
        Tag tag = tagService.getById(id);
        return ResponseResult.okResult(tag);
    }

    @GetMapping("/listAllTag")
    public ResponseResult listAllTag() {
        List<TagVo> list = tagService.listAllTag();
        return ResponseResult.okResult(list);
    }
}
