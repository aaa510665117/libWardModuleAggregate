//
//  XXSearchBar.h
//  MobileDoctor
//
//  Created by WinningMac on 2018/1/22.
//  Copyright © 2018年 Ran. All rights reserved.
//************占位符自定义居左**************

#import <UIKit/UIKit.h>

@interface XXSearchBar : UISearchBar

///修改背景色
-(void)changeSearchBarBackgroundColor:(UIColor *)color;

///修改放大镜图片
-(void)changeLeftImage:(UIImage *)imageName;

///获取搜索框的TextFiled
- (UITextField *)sa_GetSearchTextFiled;

@end
