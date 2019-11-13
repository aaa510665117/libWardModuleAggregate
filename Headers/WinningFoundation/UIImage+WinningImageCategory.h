//
//  UIImage+WinningImageCategory.h
//  WinningFoundation
//
//  Created by winning on 2019/5/23.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <UIKit/UIKit.h>


NS_ASSUME_NONNULL_BEGIN

@interface UIImage (WinningImageCategory)

/** 根据网络图片地址获取图片*/
+ (UIImage *)getImageFromURLString:(NSString *)imageURLString;

/// 生成指定颜色和大小的图片
/// @param color 图片颜色
/// @param size 图片大小
+ (UIImage *)imageWithColor:(UIColor *)color size:(CGSize)size;

/// 给图片加蒙层
/// @param color 蒙层的颜色
- (UIImage*)imageMaskedWithColor: (UIColor*)color;

/// 图像倒过来
- (UIImage*)imageByMirroring;

/// 从相册中查找图片
/// @param urlString 图片地址
+ (UIImage*)imageFromPhotoLibararyURLString: (NSString*)urlString;

/// 将图片转换成base64字符串
- (NSString*)base64StringRepresentation;

@end

NS_ASSUME_NONNULL_END
