//
//  WatermarkPicManager.h
//  WatermarkPicture
//
//  Created by winning on 2017/10/27.
//  Copyright © 2017年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface WatermarkPicManager : NSObject

/**
 生成水印图片

 @param width 水印图片的宽度
 @param height 水印图片的高度
 @param title 水印内容
 @param font 字体大小
 @param color 字体颜色
 @return 水印图片
 */
+ (UIImage *)createWatermarkPicWithWidth:(CGFloat)width height:(CGFloat)height titile:(NSString *)title textFont:(CGFloat)font textColor:(UIColor *)color;

@end
