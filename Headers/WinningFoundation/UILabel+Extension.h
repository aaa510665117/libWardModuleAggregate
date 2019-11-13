//
//  UILabel+Extension.h
//  MobileClinical
//
//  Created by WinningMac on 2018/3/19.
//  Copyright © 2018年 winning. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UILabel (Extension)

/**
 创建label

 @param color 文本颜色
 @param font 字体
 @param textAlignment 文本对齐方式
 @return label
 */
+(UILabel *)LabelWithTextColor:(UIColor *)color Font:(CGFloat)font textAlignment:(NSTextAlignment)textAlignment;

/**
 改变label某字符前后颜色

 @param tag 某标志字符
 @param frontColor 字符之前颜色
 @param backColor 字符之后颜色
 @param text 整个文本
 */
-(void)changeLabelTextColorWithTag:(NSString *)tag FrontColor:(UIColor *)frontColor BackColor:(UIColor *)backColor WithText:(NSString *)text;

/**
 改变文本中某段字符串颜色
 */
-(void)changeLabelTextColorWithTag:(NSString *)tag Color:(UIColor *)color WithText:(NSString *)text;

@end
