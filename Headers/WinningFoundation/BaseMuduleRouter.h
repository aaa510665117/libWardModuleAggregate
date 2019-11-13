//
//  BaseMuduleRouter.h
//  Module1
//
//  Created by winning on 2019/9/26.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface BaseMuduleRouter : NSObject
/*
 路由跳转，主要处理
 className 控制器名称
 parameters 页面跳转参数（formVC用以控制跳转方式，formVC：控制器--模态c弹出；导航控制器--push）
 */
+ (void)openModule:(NSString *)className routerParameters:(NSDictionary *)parameters;

@end

NS_ASSUME_NONNULL_END
