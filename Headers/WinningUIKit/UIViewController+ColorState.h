//
//  AnalysisViewController.h
//  MedicalTong
//
//  Created by ZY on 2019/9/19.
//  Copyright © 2019 扬张. All rights reserved.
//  导航栏颜色

#import <UIKit/UIKit.h>

@interface UIViewController (ColorState)

/*
    设置导航栏颜色
    navigationController  传入需要设置的navigationController  可以为nil
    backColor   导航栏背景色
    titleColor  文字颜色
    tintColor   元素颜色
 */
- (void)navigationBarColor:(UINavigationController *)navigationController
                 backColor:(UIColor *)backColor
            withTitleColor:(UIColor *)titleColor
             withTintColor:(UIColor *)tintColor;

@end
