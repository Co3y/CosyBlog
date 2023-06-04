package com.zengfk.service;

import com.zengfk.domain.ResponseResult;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @Author: ZengFK
 * @Date: 2023/6/1 21:15
 */

public interface UploadService {
    ResponseResult uploadImg(MultipartFile img) throws IOException;
}
