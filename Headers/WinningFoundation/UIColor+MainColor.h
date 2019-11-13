//
//  UIColor+MainColor.h
//  WinningFoundation
//
//  Created by WinningMac on 2019/6/4.
//  Copyright © 2019 winning. All rights reserved.
//  卫宁E院主要颜色值

#import <UIKit/UIKit.h>
#import "UIColor+Hex.h"

NS_ASSUME_NONNULL_BEGIN
// COLOR
#define RGBA(r, g, b, a) ([UIColor colorWithRed:(r / 255.0) green:(g / 255.0) blue:(b / 255.0) alpha:a])
#define RGB(r, g, b) RGBA(r,g,b,1)
#define HEXCOLOR(r)  [UIColor colorWithHex:r]
@interface UIColor (MainColor)

//Hex值
+(UIColor *)HexColor:(long)hex;

//项目主蓝色-(导航栏颜色)
+(UIColor *)navBarColor;

//浅蓝色调
+(UIColor *)shallow_navBarColor;

//主灰色-界面背景色
+(UIColor *)mainGray;

//项目主字体颜色
+(UIColor *)mainTextColor;
//深色字体颜色
+(UIColor *)mainTextDark;
//浅色字体颜色
+(UIColor *)mainTextGray;

//分割线颜色
+(UIColor *)separateColor;
//tableViewSectionHead
+(UIColor *)sectionHeadColor;
//seg
+(UIColor *)segColor;
//线条颜色
+(UIColor *)lineColor;
//白色
+(UIColor *)FFF_Color;

//随机色
+(UIColor *)RandomColor;



@end

NS_ASSUME_NONNULL_END
