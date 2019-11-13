//
//  UIViewController+XXNoConnectView.h
//  NoNetwork
//
//  Created by 徐然 on 2017/10/17.
//  Copyright © 2017年 syf. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "XXNoConnectVIew.h"

@interface UIViewController (XXNoConnectView)<XXNoConnectVIewDelegate>

/**
 *  重新加载,刷新网络,自定义实现
 */
- (void)reloadRequest;

/**
 *  显示没有网络
 */
- (void)showNoNetwork;

/**
 *  隐藏没有网络
 */
- (void)hiddenNoNetwork;
//继承的话,全部网页都有,只要断网,直接不显示数据,继承的子页面每个都得实现加载数据源的方法

@end
