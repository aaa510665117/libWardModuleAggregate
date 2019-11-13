//
//  JumpSchemeManager.h
//  MobileDoctor
//
//  Created by ZY on 2019/8/9.
//  Copyright © 2019 Ran. All rights reserved.
//  页面跳转管理

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface JumpSchemeManager : NSObject

/**
 处理推送跳转逻辑

 @param urlSheme 推送消息URL
 */
+(void)dealUrlJump:(NSString *)urlSheme;

@end

NS_ASSUME_NONNULL_END
