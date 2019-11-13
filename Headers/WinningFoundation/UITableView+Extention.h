//
//  UITableView+Extention.h
//  MobileDoctor
//
//  Created by WinningMac on 2019/3/13.
//  Copyright © 2019年 Ran. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <MJRefresh/MJRefresh.h>

@interface UITableView (Extention)

/**
 tableView添加下拉刷新和上拉加载更多

 @param target 添加head的控制器
 @param newAction 下拉刷新方法
 @param moreAction 上拉加载更多方法
 */
-(void)createRefreshForTarget:(id)target newAction:(SEL)newAction moreAction:(SEL)moreAction;

/**
 tableView添加下拉刷新

 @param target 当前控制器
 @param newAction 下拉刷新方法
 */
-(void)createRefreshForTarget:(id)target newAction:(SEL)newAction;

@end
